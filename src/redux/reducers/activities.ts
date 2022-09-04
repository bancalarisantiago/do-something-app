import * as ACT from '../actions/constants';

const initialState = {
  // randomActivity: {},
  // myActivities: [],
};

const activitiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACT.ADD_ACTIVITY:
      const repeatedActivity = state.myActivities.find((activity: any) => activity.id === payload.id);
      if (!repeateActivity || state.myActivities.length === 0) {
        return { ...state, myActivities: [...state.myActivities, payload] };
      }
      return { ...state };
    case ACT.DELETE_ACTIVITY:
      const newActivityList = state.myActivities.filter((activity: any) => activity.id !== payload)
      return { ...state, myActivities: newActivityList };
    case ACT.GET_MY_ACTIVITIES:
      return { ...state };
    case ACT.GET_RANDOM_ACTIVITY:
      return { ...state, randomActivity: payload };
    case ACT.FILTER_ACTIVITIES_BY:

      return { ...state };

    default:
      return state;
  }
}

export default activitiesReducer;