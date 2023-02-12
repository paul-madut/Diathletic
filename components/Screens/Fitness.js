import React from 'react';
import { Button, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export function Fitness() {
    return (
        <>
            <View style = {styles.loginButton}>
                <Text style ={styles.buttonText}>Fitness</Text>
            </View>
        </>
    );

}

const styles = StyleSheet.create({

    background:{
        flex : 1,
    },

    loginButton:{
        width: '80%',
        height: 10,
        backgroundColor: 'black',

        alignSelf: 'center',
        alignItems: 'flex-end',
        position: 'absolute',
        borderRadius: '20',
        marginTop: '100%'
        

    },
    buttonText:{
        color:'white',
        fontSize:50,
        alignSelf:'center',
        paddingTop:10
    }
})

