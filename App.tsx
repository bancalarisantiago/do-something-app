import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login'
import SignUp from './src/screens/signup'
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
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Login />
      {/* <SignUp /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
