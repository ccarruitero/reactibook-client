import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { receivePosts } from '../reducers/postSlice';
import { listPosts } from '../api/reactibookAPI';
import Post from './Post';
import AudienceSelect from './shared/AudienceSelect';

const PostList = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);
  const posts = useSelector(state => state.posts);
  const [filterBy, setFilterBy] = useState('public');
  const postsToShow = posts?.filter(post => post.sharedWith === filterBy);

  useEffect(() => {
    async function getPosts() {
      const postsResult = await listPosts(token);
      dispatch(receivePosts(postsResult));
    }

    getPosts();
  }, [dispatch, token]);

  const handleChange = (event) => {
    setFilterBy(event.target.value);
  };

  return (
    <div>
      <h2>Posts</h2>
      <AudienceSelect
        value={filterBy}
        onChange={handleChange}
      />
      { postsToShow.map(post => <Post post={post} key={post._id} />) }
    </div>
  );
};

export default PostList;
