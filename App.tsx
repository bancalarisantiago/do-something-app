import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';

import Navigation from './src/navigation';
import store from './src/redux/slice/store';
//Components
import Login from './src/screens/logIn'
import SignUp from './src/screens/signUp'
import Home from './src/screens/home'
import MyActivities from './src/screens/myActivities'
//Hooks
import useCachedResources from './src/hooks/useCachedResources'

export default function App() {

  const isLoadingComplete = useCachedResources();

  console.log(isLoadingComplete)
  return (
    <Provider store={store}>
      <Navigation>
        <View style={styles.container} >
          <StatusBar style="auto" />
        </View>
      </Navigation>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
