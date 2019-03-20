import type from '../types';
import axios from 'axios';

const apiUrl = 'http://localhost:4000/business';
const {FETCH_POSTS} = type;

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POSTS,
    payload:posts
  }
};

export const fetchAllPosts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
      let result = response.data

      dispatch(fetchPosts(result))
      })
      .catch(error => {
        throw(error);
      });
  };
};
