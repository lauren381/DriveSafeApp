import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OnloadingScreen from './src/screens/Onloading/OnloadingScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import WelcomeScreen from './src/screens/Welcome/WelcomeScreen';
import RegisterScreen from './src/screens/Register/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import NotificationScreen from './src/screens/Notification/NotificationScreen';
import NoticeDetailScreen from './src/screens/NoticeDetail/NoticeDetailScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfile/EditProfileScreen';
import {Colors, Fonts} from './src/constant';
import Icon from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Notice') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: Colors.YELLOW,
        tabBarInactiveTintColor: Colors.BLACK,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notice" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnloadingScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnloadingScreen" component={OnloadingScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HomeTab" component={MyTab} />
        <Stack.Screen name="NotificationTab" component={MyTab} />
        <Stack.Screen name="NoticeDetail" component={NoticeDetailScreen} />
        <Stack.Screen name="ProfileTab" component={MyTab} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
