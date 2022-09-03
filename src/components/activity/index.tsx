import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
//Actions
import { addActivity, deleteActivity } from '../../redux/actions'

//Component
import Button from '../button';
//Styles
import styles from './styles';
//Globals
import colors from '../../globals/colors';


type Props = {
  id: string;
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  accessibility: number;
  myList?: boolean;
}

// type IconNames = {
//   diy: string;
//   social: string;
//   relaxation: string;
//   education: string;
//   recreational: string;
//   busywork: string;
//   charity: string;
//   music: string;
//   cooking: string;
// }

interface IconNames {
  [key: string]: string;

}

const Activity: React.FC<Props> = ({
  id,
  activity,
  type,
  participants,
  price,
  link,
  accessibility,
  myList }) => {

  const dispatch = useDispatch();
  const myActivities = useSelector(state => state?.myActivities);

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

      return <Ionicons name={iconName}></Ionicons>
    } else {
      <Ionicons name="man-outline"></Ionicons>
    }
  }

  function handleAddActivity() {
    dispatch(addActivity({
      id,
      activity,
      type,
      participants,
      price,
      link,
      accessibility,

    }))
  }

  function handleDeleteActivity(id: string) {
    dispatch(deleteActivity(id))
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
            <Button onPress={() => handleDeleteActivity(id)} >
              <Ionicons name="trash-outline"></Ionicons>
            </Button>
            :
            <Button onPress={handleAddActivity} >
              <Ionicons name="add-outline"></Ionicons>
            </Button>}
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