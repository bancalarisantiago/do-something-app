
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Components
import Home from '../screens/home';
import MyActivities from '../screens/myActivities';
import Settings from '../screens/settings';
import LogIn from '../screens/logIn';
import SignUp from '../screens/signUp';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();


type NavigationProps = {
  children: React.ReactNode;
};


const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
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
}

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="LogIn">
      <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false, animation: 'none' }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, animation: 'none' }} />
    </Stack.Navigator>
  );
};

const isSignedIn = false;
export default function Navigation(props: NavigationProps) {
  return (
    <NavigationContainer >
      {isSignedIn ? <TabNavigator /> : <RootNavigator />}
    </NavigationContainer>
  );
};


