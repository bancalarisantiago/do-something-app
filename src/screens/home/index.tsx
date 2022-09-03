import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHooks'
import DropDownPicker from 'react-native-dropdown-picker';
//Types
import { ActivityType } from '../../types'

//Actions
import { getRandomActivity, filterActivitiesBy } from '../../redux/slice/activitySlice';

//Components 
import Header from '../../components/header';
import Activity from '../../components/activity'
import Button from '../../components/button';

//Styles
import styles from './styles';

const Home = () => {

  const dispatch = useAppDispatch();
  const randomActivity = useAppSelector(({ activity: { randomActivity } }) => randomActivity)
  const myActivities = useAppSelector(({ activity: { myActivities } }) => myActivities)


  const [open, setOpen] = useState(false);
  const [valueFilter, setValueFilter] = useState(null);
  const [openValueList, setOpenValueList] = useState(false);
  const [valueFilterOptions, setValueFilterOptions] = useState(null);

  const [itemsFilter, setItemFilter] = useState<any>([
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

  function generateNumberPicklistOptions(number: number) {
    type Option = {
      label: string;
      value: null | number;
    }
    let i = 1;
    let array: Option[] = [{ label: 'None', value: null }]
    while (i < number) {
      array.push({ label: i.toString(), value: i })
      i++
    }
    return array
  }

  const [itemsFilterValue, setItemFilterValue] = useState<any>([typeOptionsPicklist, generateNumberPicklistOptions(9)]);

  function handleResfreshActivity() {
    if (valueFilter && valueFilterOptions) {
      const filter = {
        filterOpt: valueFilter,
        value: valueFilterOptions
      }
      console.log(valueFilter, valueFilterOptions)
      dispatch(filterActivitiesBy(filter))
    } else {
      dispatch(getRandomActivity());
    }
  }


  useEffect(() => {
    dispatch(getRandomActivity())
  }, [])


  return (
    <View style={styles.wrapper}>
      {/* <Header />
      <Button /> */}
      {/* <Text>Normal</Text> */}


      <View>
        <Button label="refresh activity" onPress={handleResfreshActivity} />
      </View>
      <View style={styles.dropDownsContainer}>
        <View style={styles.dropDown}>
          <DropDownPicker
            open={open}
            value={valueFilter}
            items={itemsFilter}
            setOpen={setOpen}
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

        <Activity
          // @ts-ignore
          id={randomActivity.key}
          // @ts-ignore
          activity={randomActivity.activity}
          // @ts-ignore
          type={randomActivity.type}
          // @ts-ignore
          participants={randomActivity.participants}
          // @ts-ignore
          price={randomActivity.price}
          // @ts-ignore
          link={randomActivity.link}
          // @ts-ignore
          accessibility={randomActivity.accessibility}
        />)
      }
      <View style={styles.container}>
        <Text>Recently Added</Text>
        {myActivities.length > 0 && (
          myActivities.slice(myActivities.length - 2, myActivities.length).reverse().map((activity: any) =>
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