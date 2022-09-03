import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHooks'
//Actions
import { getMyActivities } from '../../redux/slice/activitiesSlice';

//Components 
import Header from '../../components/header';
import Activity from '../../components/activity'
import Button from '../../components/button';

//Styles
import styles from './styles';


const MyActivities: React.FC = () => {

  const dispatch = useAppDispatch();
  const myActivities = useAppSelector(state => state?.myActivities);

  // function getActivities() {
  //   dispatch(getMyActivities())

  // }
  useEffect(() => {
    dispatch(getMyActivities())
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