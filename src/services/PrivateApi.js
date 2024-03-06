import axios from 'axios';

const privateApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
});

export default privateApi;
