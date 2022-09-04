import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../redux/slice/store';
import { fetchActivityByFilter, fetchRandomActivity } from '../../api';

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
    // fetchRandomActivity(state, { payload }) {
    //   return { ...state, randomActivity: payload };
    // }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getRandomActivity.fulfilled, (state, { payload }) => {
      state.randomActivity = payload
    })
    builder.addCase(filterActivitiesBy.fulfilled, (state, { payload }) => {
      state.randomActivity = payload
    })
  },
})


export const getRandomActivity = createAsyncThunk(
  'activities/getRandomActivity',
  async () => {
    const activity = fetchRandomActivity();
    return activity
  })

export const filterActivitiesBy = createAsyncThunk(
  'activities/filterActivitiesBy',
  async (filter: any) => {
    const activity = fetchActivityByFilter(filter);
    return activity
  }
)

export const {
  addActivity,
  deleteActivity,
  getMyActivities,
} = activitiesSlice.actions;

export default activitiesSlice.reducer;