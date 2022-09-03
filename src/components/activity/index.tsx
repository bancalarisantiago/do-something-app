import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHooks';
import Ionicons from '@expo/vector-icons/Ionicons';
//Types 
import { ActivityType, IconNames } from '../../types';

//Actions
import { addActivity, deleteActivity } from '../../redux/slice/activitySlice';

//Component
import Button from '../button';
//Styles
import styles from './styles';
//Globals
import colors from '../../globals/colors';


const Activity: React.FC<ActivityType> = ({
  id,
  activity,
  type,
  participants,
  price,
  link,
  accessibility,
  myList }) => {

  const dispatch = useAppDispatch();
  // const myActivities = useAppSelector(({ activity: { myActivities } }) => myActivities)

  function handleActivityTypeToIconName(type: string) {

    const activityType: IconNames = {
      diy: "construct-outline",
      social: "people-outline",
      relaxation: "heart-outline",
      education: "library-outline",
      recreational: "body-outline",
      busywork: "",
      charity: "heart-circle-outline",
      music: "musical-notes-outline",
      cooking: "restaurant-outline"
    }

    if (activityType.hasOwnProperty(type)) {
      const iconName = activityType[type];
      return <Ionicons
        // @ts-ignore
        name={iconName}>
      </Ionicons>
    } else {
      <Ionicons name="man-outline"></Ionicons>
    }
  }

  return (
    <View style={styles.wrapper}>

      {id ? (
        <View key={id}>
          {handleActivityTypeToIconName(type)}
          <Text>{activity}</Text>
          <Text>{type}</Text>
          <Text>{participants}</Text>
          {myList ?
            <Button onPress={() => dispatch(deleteActivity(id))} >
              <Ionicons name="trash-outline"></Ionicons>
            </Button>
            :
            <Button onPress={() => dispatch(addActivity({
              id,
              activity,
              type,
              participants,
              price,
              link,
              accessibility,
            }))}>
              <Ionicons name="add-outline"></Ionicons>
            </Button>
          }
        </View>)
        :
        <ActivityIndicator
          size="small"
          color={colors.blue}
        />}
    </View>
  )
}

export default Activity