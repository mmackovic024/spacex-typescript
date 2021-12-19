import axios from 'axios';

const API = axios.create({
  baseURL: process.env.PUBLIC_URL || 'https://api.spacexdata.com/v4',
});

const getLatestLaunch = async () => {
  try {
    const { data } = await API.get<any>('/launches/latest');
    return data || null;
  } catch (error: any) {
    let msg = '';
    if (error.response?.data?.message) {
      msg = error.response.data.message;
    } else {
      msg = error.message;
    }
    console.log(error);
    console.log(msg);
    throw new Error(msg);
  }
};

export { getLatestLaunch };
