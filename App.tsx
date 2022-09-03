import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import store from './src/redux/slice/store';
//Components
import Login from './src/screens/login'
import SignUp from './src/screens/signup'
import Home from './src/screens/home'
import MyActivities from './src/screens/myActivities'
//Hooks
//import useCachedResources from './src/hooks/useCachedResources'

export default function App() {

  // const isLoadingComplete = useCachedResources();

  // if (!isLoadingComplete) {
  //   return null;
  // } else {
  //   return (
  //     <View style={styles.container}>
  //       <StatusBar style="auto" />
  //       <Login />
  //     </View>
  //   );
  // }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Home />
        {/* <MyActivities /> */}
        {/* <Login /> */}
        {/* <SignUp /> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
