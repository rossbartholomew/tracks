import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SigninScreen from'./src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext'


const Stack = createNativeStackNavigator()
const BottomTab = createMaterialBottomTabNavigator()

const AuthStack = () =>{
  return(
  <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
      name="Sign In" 
      component={SigninScreen}
      options={{
        headerTitleAlign:'center'
      }}/>
      <Stack.Screen 
      name="Sign Up" 
      component={SignupScreen}
      options={{
        headerTitleAlign:'center'
      }}/>
    </Stack.Navigator>
  )
}

const TrackListFlow = () =>{
  return(
  <Stack.Navigator>
    <Stack.Screen name="TrackList" component={TrackListScreen}/>
    <Stack.Screen name="TrackDetail" component={TrackDetailScreen}/>
  </Stack.Navigator>
  )
}

const AppTabs = () =>{
  return(
  <BottomTab.Navigator>
    <BottomTab.Screen name="TrackScreens" component={TrackListFlow}/>
    <BottomTab.Screen name="Account" component={AccountScreen} />
    <BottomTab.Screen name="TrackCreate" component={TrackCreateScreen} />
  </BottomTab.Navigator>
  )
}

 const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack}/>
      <Stack.Screen name="Tabs" component={AppTabs}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

export default () =>{
  return(
    <AuthProvider>
      <App/>
    </AuthProvider>
  )
}

