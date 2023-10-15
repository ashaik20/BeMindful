import React from 'react';
import {View, Text, Button} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native';

export default function JourneyScreen() {
    const linedata = {
        datasets: [
          {
            data: [40, 45, 50, 47, 53, 56],
            strokeWidth: 2, // optional
          },
        ],
      };

    return(
        <View>
            
                <LineChart
        data={linedata}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel={'$'}
        withHorizontalLabels={false}
        chartConfig={{
        paddingTop: 20,
        
          backgroundColor: '#FCEFE4',
          backgroundGradientFrom: '#FCEFE4',
          backgroundGradientTo: '#FCEFE4',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
         
        }}
 
        style={{
            paddingTop: 20,
          marginVertical: 20,
          borderRadius: 16,

        }}
      />

<Text style={styles.title}> Pathway: Become a more sociable person </Text>
        <FlatList textAlign='center' padding='20' fontSize='10'
        data={[
        {key: 'Talk to at least one new person today!'},
        {key: 'Take the leap and join a club!'},
        {key: 'Take the initiative and be the leader for your group of friends!'},
        {key: 'Plan an outing for your friends!'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FCEFE4',
    },
    img: {
        textAlign: 'center',
    },
    qodtitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#C7A2D4',
        marginHorizontal: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingTop: 40,
        fontSize: 40
    },

    qod: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#DD7373",
        marginHorizontal: 10,
        paddingHorizontal: 30,
        paddingBottom: 5,
        fontSize: 25
    },

    smr: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#C7A2D4',
        paddingBottom: 15,
        fontSize: 12,
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F5f5dc',
        marginTop: 50,
        margin: 50,
        padding: 20,
        borderWidth: 5,
        borderColor: '#D34a4a',
        backgroundColor: "#DD7373",
        borderRadius: 5,
        fontSize: 25
        
    },
    item: {
        textAlign: 'center',
        margin: 10,
        padding: 10,
        borderWidth: 5,
        borderColor: '#A86EBC',
        backgroundColor: '#C7A2D4',
        borderRadius: 5,
        fontSize: 10
    
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});