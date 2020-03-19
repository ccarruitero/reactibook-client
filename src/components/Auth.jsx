import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { validateToken } from '../api/reactibookAPI';
import { setAuth } from '../reducers/authSlice'

const Auth =  ({ children,  history, ...props}) => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);
  const isAuthenticated = !!token;
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function checkToken() {
      if (isAuthenticated) {
        setIsFetching(false);
        return;
      };

      const authToken = localStorage.getItem('authToken');

      if (!authToken) {
        history.push('/login');
      }

      const response  = await validateToken(authToken);
      const error = response?.error;
      if (error) {
        localStorage.removeItem('authToken');
        history.push('/login');
      } else {
        dispatch(setAuth({ token: authToken }));
        setIsFetching(false);
      }
    }

    checkToken();
  }, []);

  return (
    <div>
      { isFetching
        ? <CircularProgress />
        : children }
    </div>
  );
};

export default withRouter(Auth);
