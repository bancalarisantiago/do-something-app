import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
//import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//Providers
import { persistor, store } from './src/redux/store';
import { getSecureItemValue } from './src/storage';
import { PersistGate } from 'redux-persist/integration/react';
import AuthProvider from './src/context/AuthProvider';
import Navigation from './src/navigation';
//Actions
import { getUserFromStore } from './src/redux/slices/userSlice';
//Hooks
import useCachedResources from './src/hooks/useCachedResources'
//Globals
import customFonts from './src/globals/fonts';

const LoadingMarkup = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
    }}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);


const App: React.FC = () => {
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [loading, setLoading] = useState(true)

  async function getUserTokenForAuth() {
    const token = await getSecureItemValue('token');
    if (token || token !== undefined) {
      setIsAuthUser(true)
    } else {
      setIsAuthUser(false)
    }
    setLoading(false);
  }

  async function fetchFromStore() {
    //const user = store.dispatch(getUserFromStore())
    const user = store.getState()
    console.log("userapp", user);
  }
  useEffect(() => {
    getUserTokenForAuth();
    fetchFromStore();
  }, [loading])


  //console.log(signIn)
  // const isLoadingComplete = useCachedResources();

  // const [fontsLoaded] = useFonts({
  //   'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
  //   'Roboto-BlackItalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
  //   'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
  // });

  // const loading = Font.loadAsync({
  //   'Roboto- Black': require('./assets/fonts/Roboto-Black.ttf'),
  // })

  if (loading) {
    return <View><Text>QUE ONDAAAAAA</Text></View>
  }


  return (
    <AuthProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation auth={isAuthUser} >
            <View style={styles.container} >
              <StatusBar style="auto" />
            </View>
          </Navigation>
        </PersistGate>
      </ReduxProvider>
    </AuthProvider>
  );
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
