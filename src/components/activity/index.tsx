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
      busywork: "fitness-outline",
      charity: "heart-circle-outline",
      music: "musical-notes-outline",
      cooking: "restaurant-outline"
    }

    if (activityType.hasOwnProperty(type)) {
      const iconName = activityType[type];
      return <Ionicons
        // @ts-ignore
        name={iconName} size={25} />
    } else {
      <Ionicons name="man-outline" />
    }
  }

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.substring(1)
  }

  return (
    <View style={styles.container}>
      {id ? (
        <View key={id} style={styles.content}>
          <View style={styles.icon}>
            {handleActivityTypeToIconName(type)}
            <Text style={styles.iconLabel}>{capitalizeFirstLetter(type)}</Text>
          </View>

          <View style={styles.description}>
            <Text style={styles.type}>{activity}</Text>
            <Text>Participants: {participants}</Text>
          </View>
          <View style={styles.btnActivity}>
            {myList ?
              <Button onPress={() => dispatch(deleteActivity(id))} >
                <Ionicons name="trash-outline" size={25} />
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
                <Ionicons name="add-outline" size={30}></Ionicons>
              </Button>
            }
          </View>

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