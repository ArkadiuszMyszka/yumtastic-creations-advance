// import axios from 'axios';
import privateApi from '../PrivateApi.js';

export const getFavoriteAPI = async (page = 1, per_page = 4) => {
  return await privateApi
    .get(`/recipes/favorites/list?page=${page}&per_page=${per_page}`)
    .then(({ data }) => {
      return data;
    });
};

export const removeFavoriteAPI = async id => {
  const result = await privateApi.patch(`/recipes/${id}/favorites/false`);
  if (result.status === 200) return getFavoriteAPI();
  return result;
};
