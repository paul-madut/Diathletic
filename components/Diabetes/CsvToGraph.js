import {useEffect, useState} from 'react';
import { View, Text, Dimensions} from 'react-native';
import { StyleSheet } from 'react-native';
import {
    LineChart,
  } from "react-native-chart-kit";

export function CsvToGraph(prop) {

      return (
        <View>
            <LineChart
                data={{
                labels: prop.labels,
                datasets: [
                    {
                    data: [
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10
                    ]
                    }
                ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundColor: prop.color,
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
</View>
      );
}

export default CsvToGraph;
