import axios from 'axios';

type LaunchesQuery = {
  page?: number;
  limit?: number;
};

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

const getNextLaunch = async () => {
  try {
    const { data } = await API.get<any>('/launches/next');
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

const getLaunches = async ({ page, limit = 20 }: LaunchesQuery) => {
  try {
    const query = {
      query: {
        success: { $ne: null },
      },
      options: {
        sort: {
          date_utc: -1,
        },
        page,
        limit,
        select: {
          'links.patch': 1,
          'links.flickr': 1,
          success: 1,
          name: 1,
          date_utc: 1,
        },
      },
    };

    const { data } = await API.post<any>('/launches/query', query);
    data.docs.shift();
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

export { getLatestLaunch, getNextLaunch, getLaunches };
