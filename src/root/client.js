import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {DataContext} from '@iso-react/data';

import App from '~/components/app';

const Root = ({client}) => {
  return (
    <BrowserRouter>
      <App client={client} />
    </BrowserRouter>
  );
};

export default Root;
