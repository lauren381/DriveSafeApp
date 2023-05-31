import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnloadingScreen from './src/screens/Onloading/OnloadingScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import WelcomeScreen from './src/screens/Welcome/WelcomeScreen';
import RegisterScreen from './src/screens/Register/RegisterScreen';
import NotificationScreen from './src/screens/Notification/NotificationScreen';
import NoticeDetailScreen from './src/screens/NoticeDetail/NoticeDetailScreen';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="NoticeDetail"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnloadingScreen" component={OnloadingScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="NoticeDetail" component={NoticeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
