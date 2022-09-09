//Lib
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReactNode, useEffect, useState } from 'react';

//Components
import Home from '../screens/home';
import MyActivities from '../screens/myActivities';
import Settings from '../screens/settings';
import LogIn from '../screens/login';
import SignUp from '../screens/signup';
import Ionicons from '@expo/vector-icons/Ionicons';

//Provider
import { useAuth } from '../context/AuthProvider';
import { getSecureItemValue } from '../storage';

//Globals
import colors from '../globals/colors'

const Tab = createBottomTabNavigator();

const iconStyle = {

}

function TabNavigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: '300',
          },
          tabBarStyle: { height: 55 },
          tabBarActiveTintColor: colors.blue,
          tabBarActiveBackgroundColor: 'white',
          tabBarIcon: ({ focused }) => <Ionicons style={{
            color: focused ? colors.blue : 'black',
          }} name="home-outline" size={25} />,
          tabBarLabel: ({ focused }) => focused ? <Text style={{
            fontWeight: '400', color: colors.blue
          }}>Home</Text>
            : null,
        }
        } />
      <Tab.Screen name="My Activities" component={MyActivities}
        options={{
          title: 'My Activities',
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: '300',
          },
          tabBarStyle: { height: 55 },
          tabBarActiveTintColor: colors.blue,
          tabBarActiveBackgroundColor: 'white',
          tabBarIcon: ({ focused }) => <Ionicons style={{
            color: focused ? colors.blue : 'black',
          }} name="star-outline" size={25} />,
          tabBarLabel: ({ focused }) => focused ? <Text style={{
            fontWeight: '400', color: colors.blue
          }}>Activities</Text>
            : null,
        }
        } />
      <Tab.Screen name="Settings" component={Settings}
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: '300',
          },
          tabBarStyle: { height: 55 },
          tabBarActiveTintColor: colors.blue,
          tabBarActiveBackgroundColor: 'white',
          tabBarIcon: ({ focused }) => <Ionicons style={{
            color: focused ? colors.blue : 'black',
          }} name="settings-outline" size={25} />,
          tabBarLabel: ({ focused }) => focused ? <Text style={{
            fontWeight: '400', color: colors.blue
          }}>Settings</Text>
            : null,
        }
        } />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

type NavigationProps = {
  children: ReactNode;
  auth: boolean;
};

const Navigation: React.FC<NavigationProps> = ({ auth }) => {

  const { isAuth, setIsAuth } = useAuth();

  return (
    <NavigationContainer >
      <Stack.Navigator >
        {isAuth ? (
          <Stack.Group>
            <Stack.Screen name="TabsMenu" component={TabNavigator} options={{ headerShown: false }} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, animation: 'none' }} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

