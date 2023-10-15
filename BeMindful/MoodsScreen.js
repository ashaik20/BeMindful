import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
// import * as ReactDOM from "react-dom";
// import {
//     Chart,
//     ChartTitle,
//     ChartSeries,
//     ChartSeriesItem,
//     ChartCategoryAxis,
//     ChartCategoryAxisItem,
//   } from "@progress/kendo-react-charts";
// import "hammerjs";
// const categories = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];


export default function MoodsScreen() {
    const [data, setData] = useState([]); // Your data from the backend

    useEffect(() => {
        // Fetch data from your backend and set it to the 'data' state
        // Example: fetch data from an API
        fetch('your-backend-api-url')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    }, []);

    const screenWidth = Dimensions.get('window').width;
    
    return (
        <View style={screenstyle.container}>
          <Text style={title.container}>Moods</Text>
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
            yAxisSuffix="M" // You can customize the yAxisSuffix
            yAxisInterval={2} // You can customize the yAxisInterval
            chartConfig={{
              backgroundGradientFrom: 'white',
              backgroundGradientTo: 'white',
              decimalPlaces: 2, // Customize decimal places
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            bezier 
            style={{ marginVertical: 8, borderRadius: 16 }}
          />
          <Text style={title.container}>Mood Counts</Text>
        </View>
      );
    }


const screenstyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCEFE4',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const title = StyleSheet.create({
    container: {
      fontSize: 20,
      fontWeight: 'bold',
      alignItems: 'top-center',
    },
  });