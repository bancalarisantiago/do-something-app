import { useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
//Components 
import Header from '../../components/header';
import Button from '../../components/button';

//Styles
import styles from './styles';


const Home = () => {

const randomActivity = async () : Promise<void> => { 
  try {
    const activity =   await axios.get('http://www.boredapi.com/api/activity')
    return console.log(activity)
  } catch(e){
   console.warn(e);
  }

}

useEffect(()=>{
  randomActivity();
},[])

  return (
    <View style={styles.wrapper}>
      <Header />
      <Button />
      <Text>Normal</Text>
    </View>
  )
}

export default Home;