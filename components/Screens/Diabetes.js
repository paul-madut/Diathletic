import React from 'react';
import { Button, View, Text} from 'react-native';
import { StyleSheet } from 'react-native';
import CsvToGraph from '../Diabetes/CsvToGraph';
import { ScrollView } from 'react-native';
export function Diabetes() {
    dummyProps1 = {color:'#FDE74C',labels:['6am','10am','2pm','6pm','10pm']};
    dummyProps2 = {color:'5BC0EB',labels:['Monday','Tuesday','Wednesday','Thursday','Friday']};

    return (
        <>
            <View style = {styles.container}>
                <ScrollView>
                    <View >
                    <Text style ={styles.header}>Daily Glucose</Text>
                    <CsvToGraph dummyProps = {dummyProps1}></CsvToGraph>
                    <Text style ={styles.header}>Weekly Glucose</Text>

                    <CsvToGraph dummyProps = {dummyProps2}></CsvToGraph>
                    <Text style ={styles.header}>Monthly Glucose</Text>

                    <CsvToGraph></CsvToGraph>
                    </View>

                </ScrollView>

                
            </View>
        </>
    );

}

const styles = StyleSheet.create({

    background:{
        flex : 1,
    },
    container:{

        margin:10,
        
    },
    header:{
        marginVertical: '10%',
        
        color:'#5BC0EB',
        fontSize: 30
    }
})
export default Diabetes;