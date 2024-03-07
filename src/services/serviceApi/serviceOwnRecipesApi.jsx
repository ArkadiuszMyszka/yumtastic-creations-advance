// import axios from 'axios';
import privateApi from '../../services/PrivateApi.js';

export const getOwnRecipesAPI = async (page = 1, limit = 4) => {
  return await privateApi
    .get(`/users/:userId/own-recipes?page=${page}&per_page=${limit}`)
    .then(({ data }) => {
      return data;
    });
};

export const removeOwnRecipeAPI = async id => {
  const result = await privateApi.delete(`/users/own-recipes/${id}`);
  if (result.status === 200) return getOwnRecipesAPI();
  return result;
};
