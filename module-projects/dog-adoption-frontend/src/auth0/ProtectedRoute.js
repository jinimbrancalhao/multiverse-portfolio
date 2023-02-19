/* eslint-disable react/prop-types */
import React from 'react';
import {Route} from 'react-router-dom';
import {withAuthenticationRequired} from '@auth0/auth0-react';

import AdoptNow from '../components/adoptnow.js';

const ProtectedRoute = ({component, ...args}) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <AdoptNow />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
