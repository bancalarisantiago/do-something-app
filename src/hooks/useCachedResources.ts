import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import customFonts from '../globals/fonts'

export default function useCachedResources(): boolean {
  const [isLoadingComplete, setLoadingComplete] = useState(false);


  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        const [fontsLoaded] = Font.useFonts(customFonts);
      } catch (e) {
        console.log(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }
    loadResourcesAndDataAsync();
  }, []);
  return isLoadingComplete;
}
