import React, { Fragment } from 'react';
import Header from './shared/Header';
import NewPost from './NewPost';

const Dashboard = () => {
  return (
    <Fragment>
      <Header
        title='Dashboard'
      />
      <NewPost />
    </Fragment> 
  );
};

export default Dashboard;
