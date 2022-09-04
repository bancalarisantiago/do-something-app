
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Components
import Home from '../screens/home';
import MyActivities from '../screens/myActivities';
import Settings from '../screens/settings'
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();


type NavigationProps = {
  children: React.ReactNode;
};


const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
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


export default function Navigation(props: NavigationProps) {
  return (
    <NavigationContainer >
      <TabNavigator />
    </NavigationContainer>
  );
};


// function RootNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Root" component={TabNavigator} options={{ headerShown: false }} />
//       <Stack.Screen name="Home" component={Home} options={{
//         title: 'HOME',
//         headerStyle: {
//           backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: '300',
//         },
//         headerTitle: (props) => <><Ionicons name="home-outline" size={25} /><Text>HOME</Text></>,
//         headerRight: () => <><Ionicons name="settings-outline" size={25} /></>,
//       }} />
//       <Stack.Screen name="My Activities" component={MyActivities} options={{
//         title: 'ACTIVITIES',
//         headerStyle: {
//           backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: '300',
//         },
//       }} />
//       <Stack.Screen name="Settings" component={Settings} options={{
//         title: 'Settings',
//         headerStyle: {
//           backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: '300',
//         },
//         headerTitle: (props) => <><Ionicons name="settings-outline" size={25} /><Text>HOME</Text></>,

//       }} />
//     </Stack.Navigator>
//   );
// };
