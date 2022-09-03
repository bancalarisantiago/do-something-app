import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
//Actions
import { getRandomActivity, filterActivitiesBy } from '../../redux/actions'

//Components 
import Header from '../../components/header';
import Activity from '../../components/activity'
import Button from '../../components/button';

//Styles
import styles from './styles';


const Home = () => {

  const dispatch = useDispatch();
  const randomActivity = useSelector(state => state?.randomActivity);
  const myActivities = useSelector(state => state?.myActivities)

  // const [randomActivity, setRandomActivity] = useState({
  //   key: "",
  //   activity: "",
  //   type: "",
  //   participants: 0,
  //   price: 0,
  //   link: "",
  //   accessibility: 0
  // })
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [openPickList, setOpenPickList] = useState(false);
  const [valuePickList, setValuePickList] = useState(null);

  const [items, setItems] = useState([
    { label: 'None', value: null },
    { label: 'Type', value: 'type' },
    { label: 'Participants', value: 'participants' }
  ]
  )

  const [itemsPickList, setItemsPickList] = useState(value === 'type' ? [
    { label: 'None', value: null },
    { label: 'Type', value: 'type' },
    { label: 'Participants', value: 'participants' }
  ] : [
    { label: 'None', value: null },
    { label: '1', value: 1 },
    { label: '2', value: '2' }
  ]);




  function getActivity() {
    dispatch(getRandomActivity())
    // setRandomActivity(stateRandomActivity)
  }
  function handleFilterBy(filter: string, value: string | number) {
    dispatch(filterActivitiesBy(filter, value))
  }


  useEffect(() => {
    getActivity();
  }, [value])


  return (
    <View style={styles.wrapper}>
      {/* <Header />
      <Button /> */}
      {/* <Text>Normal</Text> */}

      {randomActivity && (
        <Activity
          id={randomActivity.key}
          activity={randomActivity.activity}
          type={randomActivity.type}
          participants={randomActivity.participants}
          price={randomActivity.price}
          link={randomActivity.link}
          accessibility={randomActivity.accessibility}
        />)
      }
      <View>
        <Button label="refresh activity" onPress={getActivity} />
      </View>
      <Button label="filter by type" onPress={() => handleFilterBy("type", "recreational")}></Button>
      <Button label="filter by participants" onPress={() => handleFilterBy("participants", 1)}></Button>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select filter type"

      />
      {value && (
        <DropDownPicker
          open={openPickList}
          value={valuePickList}
          items={itemsPickList}
          setOpen={setOpenPickList}
          setValue={setValuePickList}
          setItems={setItemsPickList}

        />
      )}
      <View style={styles.container}>
        <Text>LAST ADDED</Text>
        {myActivities.length > 0 && (
          myActivities.slice(myActivities.length - 2, myActivities.length).reverse().map(activity =>
            <View key={activity.id} style={styles.activity}>
              <Activity myList={true} {...activity} />
            </View>
          )
        )}
      </View>
    </View>
  )
}

export default Home;