import axios from "axios";

export const getFavoriteAPI = (page = 1, per_page = 4) => {
  return axios
    .get(`/recipes/favorites/list?page=${page}&per_page=${per_page}`)
    .then(({ data }) => {
      return data;
    });
};

export const removeFavoriteAPI = async (id) => {
  const result = await axios.patch(`/recipes/${id}/favorites/false`);
  if (result.status === 200) return getFavoriteAPI();
  return result;
};
