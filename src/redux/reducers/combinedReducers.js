import { combineReducers } from 'redux';
import Loader from './Loader';
import Posts from './Posts';
export default combineReducers({
  Posts,
  Loader,
});
