//Lib
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

//Globals
import customFonts from '../globals/fonts'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState<boolean>(false);

  async function loadResourcesAndDataAsync() {
    try {
      SplashScreen.preventAutoHideAsync();
      await Font.loadAsync(customFonts);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingComplete(true);
      SplashScreen.hideAsync();
    }
    return isLoadingComplete;
  }
  useEffect(() => {
    loadResourcesAndDataAsync();
  }, []);

}
