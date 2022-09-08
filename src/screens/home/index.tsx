import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHooks'
import DropDownPicker from 'react-native-dropdown-picker';
//Types
import { ActivityType, FilterType } from '../../types'

//Actions
import { getRandomActivity, filterActivitiesBy, getMyActivities } from '../../redux/slices/activitySlice';

//Components 
import Activity from '../../components/activity'
import Button from '../../components/button';
import Ionicons from '@expo/vector-icons/Ionicons';

//Styles
import styles from './styles';


const Home = () => {

  const [loading, setLoading] = useState(true)

  const dispatch = useAppDispatch();
  const randomActivity = useAppSelector(({ activity: { randomActivity } }) => randomActivity)
  const myActivities = useAppSelector(({ activity: { myActivities } }) => myActivities)
  const userSession = useAppSelector(({ user: { user } }) => user);


  const [openType, setOpenType] = useState(false);
  const [openValueList, setOpenValueList] = useState(false);


  const [valueFilter, setValueFilter] = useState(null);
  const [valueFilterOptions, setValueFilterOptions] = useState(null);


  const [itemsFilter, setItemFilter] = useState([
    { label: 'None', value: null },
    { label: 'Type', value: 'type' },
    { label: 'Participants', value: 'participants' }
  ]
  )

  const typeOptionsPicklist = [{ label: 'None', value: null },
  { label: 'Social', value: 'social' },
  { label: 'Relaxation', value: 'relaxation' },
  { label: 'Education', value: 'education' },
  { label: 'Diy', value: 'diy' },
  { label: 'Charity', value: 'charity' },
  { label: 'Recreational', value: 'recreational' },
  { label: 'Music', value: 'music' },
  { label: 'Cooking', value: 'cooking' },
  ]

  function generateNumberPicklistOptions(num: number) {

    type FilterOptionsType = {
      label: string;
      value: string | number | null;
    }

    let i = 1;
    let array: FilterOptionsType[] = [{ label: 'None', value: null }]
    while (i < num) {
      array.push({ label: i.toString(), value: i });
      i++;
    }
    return array;
  }

  const [itemsFilterValue, setItemFilterValue] = useState([typeOptionsPicklist, generateNumberPicklistOptions(9)]);

  function handleResfreshActivity() {
    if (valueFilter && valueFilterOptions) {
      const filter = {
        type: valueFilter,
        value: valueFilterOptions
      };
      dispatch(filterActivitiesBy(filter));
    } else {
      dispatch(getRandomActivity());
    }
  };

  useEffect(() => {

    if (loading) {
      dispatch(getRandomActivity());
      dispatch(getMyActivities());
      setLoading(false);
    }

  }, [loading]);


  if (loading) {
    return <View><ActivityIndicator></ActivityIndicator></View>
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome {userSession?.firstName}</Text>
        <Text style={styles.title}>Age: {userSession?.age}</Text>
        <Text style={styles.subtitle}>It's time to do something</Text>
        <Text style={styles.subtitle}>Tap the button and find a new activity</Text>
      </View>
      <View>
        <Button style={styles.btnRefresh} label="refresh" onPress={() => handleResfreshActivity()} ><Ionicons name="refresh-outline" /></Button>
      </View>
      <View style={styles.dropDownsContainer}>
        <View style={styles.dropDown}>
          <DropDownPicker
            open={openType}
            value={valueFilter}
            items={itemsFilter}
            setOpen={setOpenType}
            setValue={setValueFilter}
            setItems={setItemFilter}
            placeholder="Select filter type"

          />
        </View>
        {valueFilter && (
          <View style={styles.dropDown}>
            <DropDownPicker
              open={openValueList}
              value={valueFilterOptions}
              items={valueFilter === 'type' ? itemsFilterValue[0] : itemsFilterValue[1]}
              setOpen={setOpenValueList}
              setValue={setValueFilterOptions}
              setItems={setItemFilterValue}
              placeholder="Select value"
            />
          </View>
        )}
      </View>
      {randomActivity && (
        <View >
          <Activity
            id={randomActivity.key}
            activity={randomActivity.activity}
            type={randomActivity.type}
            participants={randomActivity.participants}
            price={randomActivity.price}
            link={randomActivity.link}
            accessibility={randomActivity.accessibility}
          />
        </View>
      )
      }
      <View style={styles.addedContainer}>
        <View style={styles.divider}>
          <View style={styles.leftLine}></View>
          <View>
            <Text style={styles.titleRecently}>Recently Added</Text>
          </View>
          <View style={styles.rightLine}></View>
        </View>
        {myActivities.length > 0 ? (
          myActivities.slice(myActivities.length - 2, myActivities.length).reverse().map((activity: ActivityType, index: number) =>
            <View key={`RA-${activity.id}`}>
              <Activity myList={true} {...activity} />
            </View>
          )
        ) : <Text>ADD YOUR FIRST ACTIVITY</Text>
        }
      </View>
    </View>
  )
}

export default Home;