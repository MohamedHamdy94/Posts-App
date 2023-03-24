import axios from 'axios';
import { axiosInstance } from '../../Network/axiosConfig';
import { done, start } from './Loader';
export const getPosts = () => async (dispatch) => {

  dispatch(start())
  try {
    const res = await axiosInstance.get('/posts');
    console.log(res.data);

    dispatch({
      type: 'GET_POSTS',
      payload: res.data,
    });
    dispatch(done())


  } catch (err) {
    console.log(err)
    dispatch(done())
  }
};

export const getPostComments = (id) => async (dispatch) => {
  dispatch(start())

  try {
    const res = await axiosInstance.get(
      '/comments',
      {
        params: {
          postId: id,
        },
      }
    );

    console.log(res.data);
    dispatch({
      type: 'GET_POST',
      payload: res.data,
    });
    dispatch(done())

  } catch (err) {
        console.log(err)
        dispatch(done())

  }
};
