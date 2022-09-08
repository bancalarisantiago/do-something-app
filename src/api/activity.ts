import { getAsyncStorageItem } from '../storage';
import axios from 'axios';

//Types
import { FilterType } from '../types';

const BASE_URL = 'http://www.boredapi.com/api/activity';

export const fetchUserActivities = async (userEmail: string) => {
  try {
    const user = await getAsyncStorageItem(userEmail)
    return user
  } catch (e) {
    console.log(e);
  }
};

export const fetchRandomActivity = async () => {
  try {
    const { data: activity } = await axios.get(BASE_URL);
    return activity;
  } catch (e) {
    console.log(e);
  }
};

type FilterOptions = {
  filterOpt: string;
  value: string | number;
};

export const fetchActivityByFilter = async (filter: FilterType) => {
  try {
    const { type, value } = filter;
    const { data: activity } = await axios.get(`${BASE_URL}?${type}=${value}`);
    return activity;
  } catch (e) {
    console.log(e);
  }
};


