import React from 'react';
import {StaticRouter} from 'react-router-dom';
import {DataClient, getInitialState} from '@iso-react/data';

import App from '~/components/app';

import config from '~/config/shared';

const Root = ({url, context, client}) => {
  return (
    <StaticRouter location={url} context={context}>
      <App client={client} />
    </StaticRouter>
  );
};

/**
 * Passed express req/res objects, and react-router context
 * Returns {app, initialState, config}
 * App is the JSX to be rendered for the final output
 * InitialState is passed as a script tag for passing prefetched data to client
 */
export const getRoot = async (req, res, context) => {
  const client = new DataClient();
  const app = <Root url={req.url} context={context} client={client} />;
  const initialState = await getInitialState({app, client});
  return {
    app,
    config,
    initialState,
  };
};

export default Root;
