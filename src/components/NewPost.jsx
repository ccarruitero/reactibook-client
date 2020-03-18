import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditablePost from './EditablePost';
import { createPost } from '../api/reactibookAPI';
import { addPost } from '../reducers/postSlice';

const NewPost = () => {
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    const result = await createPost(values, token);
    dispatch(addPost(result));
  }

  return (
    <EditablePost
      btnTxt='Publish'
      placeholder='Whats happening?'
      onSubmit={onSubmit}
    />
);
};

export default NewPost;
