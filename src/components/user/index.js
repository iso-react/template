import React from 'react';
import {useFetchJson} from '@iso-react/data';

import config from '~/config';

const User = ({id, children}) => {
  const [user, meta] = useFetchJson(`${config.userEndpoint}/${id}`);

  return children(user, meta);
};

export default User;
