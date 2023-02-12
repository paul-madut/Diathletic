import React from 'react';
import { ImageBackground,View,Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();
function WelcomeWindow() {
    return (
        
<>

        <ImageBackground
         source= {require("../assets/background.png")}
         style = {styles.background}>
        </ImageBackground>

            <View style = {styles.loginButton}>
                <Text style ={styles.buttonText}>Get Started</Text>
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
    
export default WelcomeWindow;