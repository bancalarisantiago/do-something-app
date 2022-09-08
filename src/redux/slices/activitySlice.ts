//Lib
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

//Types
import { ActivityType, FilterType } from '../../types'
import { RootState, AppThunk } from '../store';

//API
import { fetchActivityByFilter, fetchRandomActivity, fetchUserActivities } from '../../api/activity';

type InitialState = {
  randomActivity: ActivityType;
  myActivities: ActivityType[] | never[];
}

const initialState: InitialState = {
  randomActivity: {
    id: '',
    activity: '',
    type: '',
    participants: 0,
    price: 0,
    link: '',
    accessibility: 0,
    myList: false,
  },
  myActivities: [],
};

const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    addActivity(state, action: PayloadAction<ActivityType>) {
      const repeatedActivity = state.myActivities.find(({ id }) => id === action.payload.id);
      if (!state.myActivities.length || !repeatedActivity) {
        return { ...state, myActivities: [...state.myActivities, action.payload] };
      } else {
        return state
      }
    },
    getMyActivities(state, action) {
      return { ...state }
    },
    deleteActivity(state, action: PayloadAction<string>) {
      const newActivityList = state.myActivities.filter(({ id }) => id !== action.payload)
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
  async (filter: FilterType) => {
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