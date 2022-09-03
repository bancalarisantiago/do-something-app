import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../redux/slice/store';
import axios from 'axios';

const initialState = {
  randomActivity: {},
  myActivities: [],
  status: "",
};


const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    addActivity(state, { payload }) {
      const repeatedActivity = state.myActivities.find((activity: any) => activity.id === payload.id);
      if (!repeatedActivity || state.myActivities.length === 0) {
        return {
          ...state,
          myActivities: [...state.myActivities, payload]
        };
      }
      return { ...state };
    },
    deleteActivity(state, { payload }) {
      const newActivityList = state.myActivities.filter((activity: any) => activity.id !== payload)
      return { ...state, myActivities: newActivityList };
    },
    getMyActivities(state, action) {
      return { ...state };
    },
    fetchRandomActivity(state, { payload }) {
      return { ...state, randomActivity: payload };
    }
  },
})


export const getRandomActivity = () => async (dispatch: any) => {
  try {
    const { data: activity } = await axios.get('http://www.boredapi.com/api/activity')
    return dispatch(fetchRandomActivity(activity))
  } catch (e) {
    console.warn(e);
  }
};

export const filterActivitiesBy = createAsyncThunk(
  'http://www.boredapi.com/api/activity',
  async () => {
    const response = await axios.get('http://www.boredapi.com/api/activity')
    return response.data
  }
)




export const {
  addActivity,
  deleteActivity,
  getMyActivities,
  fetchRandomActivity
} = activitiesSlice.actions;

export default activitiesSlice.reducer;