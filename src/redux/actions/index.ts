//Constants actions
import {
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  GET_MY_ACTIVITIES,
  GET_RANDOM_ACTIVITY,
  FILTER_ACTIVITIES_BY,

} from '../actions/constants';

import axios from 'axios';

export const getRandomActivity = () => async (dispatch: any) => {
  try {
    const { data: activity } = await axios.get('http://www.boredapi.com/api/activity')
    return dispatch({
      type: GET_RANDOM_ACTIVITY,
      payload: activity
    })
  } catch (e) {
    console.warn(e);
  }
};

export const getMyActivities = () => ({
  type: GET_MY_ACTIVITIES,
});

export const addActivity = (activity: any) => ({
  type: ADD_ACTIVITY,
  payload: activity
});

export const deleteActivity = (id: any) => ({
  type: DELETE_ACTIVITY,
  payload: id
});

export const filterActivitiesBy = (filter: string, value: string | number) => async (dispatch: any) => {
  console.log(filter, value)
  try {
    const { data: activity } = await axios.get(`http://www.boredapi.com/api/activity?${filter}=${value}`)
    return dispatch({
      type: FILTER_ACTIVITIES_BY,
      payload: activity
    })
  } catch (e) {
    console.warn(e);
  }

}


