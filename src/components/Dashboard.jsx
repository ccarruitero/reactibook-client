import React, { Fragment } from 'react';
import Header from './shared/Header';
import NewPost from './NewPost';
import PostList from './PostList';

const Dashboard = () => {
  return (
    <Fragment>
      <Header
        title='Dashboard'
      />
      <NewPost />
      <PostList />
    </Fragment> 
  );
};

export default Dashboard;
