import { combineReducers } from 'redux';
import count from './counterReducer';
import fetchPost from './postReducers';

export default combineReducers({
    fetchPost,
    count
});
