import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import axios from 'axios';

export default function MoodsScreen() {
  const [data, setData] = useState([]); // Your data from the backend

  useEffect(() => {
        axios.get('http://10.52.159.164:3000/data/moods')
        .then((response) => {
          const resp = response.data;
          const moodsArray = resp.map(item => item.mood);
          setData(moodsArray);
          console.log(moodsArray);
      })
        .catch ((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: '#FCEFE4', // Set your background color
    backgroundGradientTo: '#FCEFE4', // Set your background color
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Customize line color
    decimalPlaces: 2, // Customize decimal places
    propsForDots: {
      r: '6', // Customize dot size
      strokeWidth: '2', // Customize dot border width
      stroke: 'black', // Customize dot border color
    },
  };
    if (data?.length === 0) {
    return (
      <View style={styles.screen}>
        <Text>No chart data to display!</Text>
      </View>
    );
  }

  return (
    <View style={styles.background}>
        <ScrollView 
        horizontal={false}>
        <Text style={styles.title}>Moods</Text>
      <LineChart
        data={{
          labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'], // Replace with your labels
          datasets: [
            {
              data, // Use the data from your backend here
            },
          ],
        }}
        width={screenWidth}
        height={220}
        yAxisSuffix="" // You can customize the yAxisSuffix
        yAxisInterval={2} // You can customize the yAxisInterval
        chartConfig={chartConfig} // Apply the custom chartConfig
        bezier
        style={{
          margin: 10,
          borderRadius: 16,
          padding: 5,
        }}
      />
      <Text style={styles.title}>Mood Counts</Text>
      <Text style={styles.moodcount}>
            You logged 7 moods in the last week! Keep it up!
        </Text>
        <Text style={styles.title}>Highlights & Lowlights</Text>
        <FlatList
            data={[
            {key: 'Highlight from Oct 13th: Aced my chemistry test!'},
            {key: 'Lowlight from Oct 14th: Felt sick today morning.'},
            {key: 'Highlight from Oct 14th: Spent time with friends!'},
            {key: 'Highlight from Oct 15th: Completed my project.'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        
        </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FCEFE4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#C7A2D4',
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingTop: 40,
    fontSize: 40
  },
  moodcount: {
    textAlign: 'center',
    margin: 10,
    padding: 10,
    color: '#F5f5dc',
    margin: 10,
    padding: 10,
    borderWidth: 5,
    borderColor: '#D34a4a',
    backgroundColor: "#DD7373",
    borderRadius: 5,
    fontSize: 20
    },
    highlow: {
        textAlign: 'center',
        margin: 10,
        padding: 10,
        borderWidth: 5,
        borderColor: '#A86EBC',
        backgroundColor: '#C7A2D4',
        borderRadius: 5,
        fontSize: 15
    },
    item: {
        textAlign: 'center',
        margin: 10,
        padding: 10,
        borderWidth: 5,
        borderColor: '#A86EBC',
        backgroundColor: '#C7A2D4',
        borderRadius: 5,
        fontSize: 15
    },

});
