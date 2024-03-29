
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';


export const PrivateRoute = (props: any) => {
  const { component: RouteComponent, ...other } = props;
  const { user } = useContext(AuthContext);

  return (
    <Route
      render={(routeProps) =>
        !!user ? <RouteComponent {...routeProps} /> : <Redirect to="/login" />
      }
      {...other}
    />
  );
};