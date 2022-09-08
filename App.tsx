//Lib
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

//Providers
import { persistor, store } from './src/redux/store';
import { getSecureItemValue } from './src/storage';
import { PersistGate } from 'redux-persist/integration/react';
import AuthProvider from './src/context/AuthProvider';
import Navigation from './src/navigation';

//Globals
import customFonts from './src/globals/fonts';
import colors from './src/globals/colors';


const App: React.FC = () => {
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [loadingCache, setLoadingCache] = useState(true);
  const [loading, setLoading] = useState(true);

  async function LoadCacheResources() {
    try {
      SplashScreen.preventAutoHideAsync();
      await Font.loadAsync(customFonts);
    } catch (e) {
      console.log(e);
    } finally {
      SplashScreen.hideAsync();
      setLoadingCache(false)
    }
  }

  async function getUserTokenForAuth() {
    const token = await getSecureItemValue('token');
    if (token || token !== undefined) {
      setIsAuthUser(true)
    } else {
      setIsAuthUser(false)
    }
    setLoading(false);
  }

  useEffect(() => {
    LoadCacheResources();
    getUserTokenForAuth();
  }, [loading, loadingCache])

  if (loading && loadingCache) {
    return <View><ActivityIndicator size="large" color={colors.blue} /></View>
  }

  return (
    <View style={{ flex: 1 }} >
      <StatusBar style="auto" />
      <AuthProvider>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation auth={isAuthUser} >
            </Navigation>
          </PersistGate>
        </ReduxProvider>
      </AuthProvider>
    </View>
  );
}
export default App
