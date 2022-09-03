import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//Actions
import { getMyActivities } from '../../redux/actions'

//Components 
import Header from '../../components/header';
import Activity from '../../components/activity'
import Button from '../../components/button';

//Styles
import styles from './styles';


const MyActivities: React.FC = () => {

  const dispatch = useDispatch();
  const myActivities = useSelector(state => state?.myActivities);

  function getActivities() {
    dispatch(getMyActivities())

  }
  useEffect(() => {
    getActivities();
  }, [])


  return (
    <View style={styles.wrapper}>

      {myActivities && (
        myActivities.map(activity =>
          <View key={activity.id}>
            <Activity myList={true} {...activity} />
          </View>
        )
      )}
    </View>
  )
}

export default MyActivities;