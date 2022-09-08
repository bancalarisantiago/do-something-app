import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHooks'
//Types
import { ActivityType } from '../../types'

//Actions
import { getMyActivities } from '../../redux/slices/activitySlice';

//Components 
import Activity from '../../components/activity'


//Styles
import styles from './styles';

const MyActivities: React.FC = () => {

  const [loading, setLoading] = useState(true)
  const dispatch = useAppDispatch();
  const myActivities = useAppSelector(({ activity: { myActivities } }) => myActivities)

  return (
    <View style={styles.wrapper}>
      <View>
        <Text>MY ACTIVITIES</Text>
      </View>

      {myActivities && (
        myActivities.map((activity: ActivityType, index: number) =>
          <View style={styles.activityBox} key={activity.id}>
            <Activity key={index} myList={true} {...activity} />
          </View>
        )
      )}
    </View>
  )
}

export default MyActivities;