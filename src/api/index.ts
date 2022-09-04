import axios from 'axios';

export const fetchRandomActivity = async () => {
  try {
    const { data: activity } = await axios.get('http://www.boredapi.com/api/activity')
    return activity
  } catch (e) {
    console.log(e)
  }
}

type FilterOptions = {
  filterOpt: string;
  value: string | number;
}

export const fetchFilterActivityBy = async (filter: FilterOptions) => {
  try {
    const { filterOpt, value } = filter;
    const { data: activity } = await axios.get(`http://www.boredapi.com/api/activity?${filterOpt}=${value}`)
    return activity
  } catch (e) {
    console.log(e)
  }
}


