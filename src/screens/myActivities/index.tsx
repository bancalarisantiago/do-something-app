import { View, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
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

    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        {myActivities && (
          myActivities.map((activity: ActivityType, index: number) =>
            <View key={`MA-${activity.id}`}>
              <Activity key={index} myList={true} {...activity} />
            </View>
          )
        )}
      </SafeAreaView>
    </ScrollView>

  )
}

export default MyActivities;