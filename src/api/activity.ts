import { getAsyncStorageItem } from '../storage';
import axios from 'axios';

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

export const fetchActivityByFilter = async (filter: FilterOptions) => {
  try {
    const { filterOpt, value } = filter;
    const { data: activity } = await axios.get(`${BASE_URL}?${filterOpt}=${value}`);
    return activity;
  } catch (e) {
    console.log(e);
  }
};


