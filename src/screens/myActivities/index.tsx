import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHooks'
//Types
import { ActivityType } from '../../types'

//Actions
import { getMyActivities } from '../../redux/slice/activitySlice';

//Components 
import Header from '../../components/header';
import Activity from '../../components/activity'
import Button from '../../components/button';

//Styles
import styles from './styles';

const MyActivities: React.FC = () => {

  const dispatch = useAppDispatch();
  const myActivities = useAppSelector(({ activity: { myActivities } }) => myActivities)

  // function getActivities() {
  //   dispatch(getMyActivities())

  // }
  useEffect(() => {
    // dispatch(getMyActivities())
  }, [])

  return (
    <View style={styles.wrapper}>
      <Text>MY ACTIVITIES</Text>
      {myActivities && (
        myActivities.map((activity: ActivityType) =>
          <Activity myList={true} {...activity} />
        )
      )}
    </View>
  )
}

export default MyActivities;