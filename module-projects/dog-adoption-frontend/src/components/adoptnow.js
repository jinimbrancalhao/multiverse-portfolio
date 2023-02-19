import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

const AdoptNow = () => {
  const {logout} = useAuth0();
  return (
    <button
      onClick={() =>
        logout({
          returnTo: 'http://localhost:3000/dog-adoption-frontend',
        })
      }
    >
      Log Out
    </button>
  );
};

export default AdoptNow;
