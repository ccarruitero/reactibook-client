import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../reducers/authSlice'

const AuthRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();

  const isAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      dispatch(setAuth({ token }));
    }
    return !!token;
  }

  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated() ? (
        children
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      ))}
    />
  );
};

export default AuthRoute;
