import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StyledBox from  './shared/StyledBox';
import ViewablePost from './ViewablePost';
import EditablePost from './EditablePost';
import { updatePost, deletePost } from '../api/reactibookAPI';
import { patchPost, removePost } from '../reducers/postSlice';

const Post = ({ post }) => {
  const [isEditable, setIsEditable] = useState(false);
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const toggleIsEditable = () => {
    setIsEditable(!isEditable);
  };

  const onUpdate = async (values) => {
    const result = await updatePost(post._id, values, token);
    dispatch(patchPost(result));
    toggleIsEditable();
  }

  const onDelete = async () => {
    await deletePost(post._id, token);
    dispatch(removePost(post._id));
  }

  return (
    <StyledBox>
      { isEditable
        ? <EditablePost
            post={post}
            btnTxt='Save'
            onCancel={toggleIsEditable}
            onSubmit={onUpdate}
          />
        : <ViewablePost
            post={post}
            onEdit={toggleIsEditable}
            onDelete={onDelete}
          />
      }
    </StyledBox>
  );
};

export default Post;
