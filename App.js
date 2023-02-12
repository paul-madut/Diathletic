import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Nav from './components/UI/Nav';
import WelcomeWindow from './Windows/WelcomeWindow';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import {Diabetes} from './components/Screens/Diabetes';
import {Fitness} from './components/Screens/Fitness';
import {Food} from './components/Screens/Food';

export default function App() {

  const Tabs = createBottomTabNavigator();
  const [showIntro, setIntro] = useState(true);

  useEffect(()=>{
    setInterval(()=>{
      setIntro(!showIntro)
    },5000)
  },[])

  return (
        <>
        <>{showIntro && <WelcomeWindow></WelcomeWindow>}</>
        {
          !showIntro &&
        <NavigationContainer>
        <Tabs.Navigator>
         <Tabs.Screen name="Diabetes" component={Diabetes}/>
          <Tabs.Screen name="Fitness" component={Fitness}/>
          <Tabs.Screen name="Food" component={Food}/>
          
  
        </Tabs.Navigator>
  
      </NavigationContainer>
        }
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%'
  },
  nav:{
    backgroundColor: '#4767bb',
    flexDirection: 'row',
    justifyContent: 'space-around'


  }
});
