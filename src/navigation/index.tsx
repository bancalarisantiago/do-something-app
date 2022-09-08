import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';

//Components
import Home from '../screens/home';
import MyActivities from '../screens/myActivities';
import Settings from '../screens/settings';
import LogIn from '../screens/logIn';
import SignUp from '../screens/signUp';
import Ionicons from '@expo/vector-icons/Ionicons';

//Provider
import { useAuth } from '../context/AuthProvider';
import { getSecureItemValue } from '../storage';



const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home} options={{
        title: 'HOME',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '300',
        },
        tabBarIcon: () => <Ionicons name="home-outline" size={25} />
      }
      } />
      <Tab.Screen name="My Activities" component={MyActivities}
        options={{
          title: 'ACTIVITIES',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '300',
          },
          tabBarIcon: () => <Ionicons name="star-outline" size={25} />
        }
        } />
      <Tab.Screen name="Settings" component={Settings} options={{
        title: 'SETTINGS',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '300',
        },
        tabBarIcon: () => <Ionicons name="settings-outline" size={25} />
      }
      } />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

type NavigationProps = {
  children: React.ReactNode;
  auth: boolean;
};

const Navigation: React.FC<NavigationProps> = ({ auth }) => {

  const { isAuth, setIsAuth } = useAuth();
  const [loading, setLoading] = useState(true);

  async function validateTokenStore() {
    const token = await getSecureItemValue('token');
    if (token || token !== undefined) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
    setLoading(false)
  }
  useEffect(() => {
    validateTokenStore();
  }, [isAuth, loading]);

  if (loading) {
    return <View><Text>CHEQUEANDO CREDENCIALES</Text></View>
  }

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

