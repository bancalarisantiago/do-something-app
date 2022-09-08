import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { fetchActivityByFilter, fetchRandomActivity, fetchUserActivities } from '../../api/activity';
import { ActivityType } from '../../types'
import { getAsyncStorageItem, storeAsyncData } from '../../storage';


type InitialState = {
  randomActivity: ActivityType | {};
  myActivities: ActivityType[] | never[];
}


const initialState: InitialState = {
  randomActivity: {},
  myActivities: [],
};


const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    addActivity(state, action: PayloadAction<ActivityType>) {
      const repeatedActivity = state.myActivities.find((activity: any) => activity.id === action.payload.id);

      if (!state.myActivities.length || !repeatedActivity) {
        return { ...state, myActivities: [...state.myActivities, action.payload] };
      } else {
        return state
      }
    },
    getMyActivities(state, actions) {
      return { ...state }
    },
    deleteActivity(state, { payload }) {
      const newActivityList = state.myActivities.filter((activity: any) => activity.id !== payload)
      return { ...state, myActivities: newActivityList };
    },
  },
  extraReducers: (builder) => {
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
  getMyActivities,
  deleteActivity,
} = activitiesSlice.actions;

export default activitiesSlice.reducer;