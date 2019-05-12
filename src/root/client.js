import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import App from '~/components/app';

const Root = ({client}) => {
  return (
    <BrowserRouter>
      <App client={client} />
    </BrowserRouter>
  );
};

export default Root;
