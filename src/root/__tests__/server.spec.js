import React from 'react';
import {render} from 'react-testing-library';

import {getRoot} from '~/root/server';

jest.mock('react-router-dom', () => {
  return {
    StaticRouter: jest.fn(({children}) => children),
  };
});

jest.mock('@iso-react/data', () => {
  return {
    DataClient: jest.fn(),
    getInitialState: jest.fn(() => ({test: true})),
  };
});

jest.mock('~/config/shared', () => {
  return {
    config: 'shared',
  };
});

jest.mock('~/components/app', () => {
  return () => <div data-testid="app" />;
});

describe('Server root', () => {
  const req = {
    url: 'test-url',
  };

  it('should return initial state', async () => {
    expect.assertions(1);
    const {initialState} = await getRoot(req);
    expect(initialState).toHaveProperty('test', true);
  });

  it('should return config', async () => {
    expect.assertions(1);
    const {config} = await getRoot(req);
    expect(config).toHaveProperty('config', 'shared');
  });

  it('should return application', async () => {
    expect.assertions(1);
    const {app} = await getRoot(req);
    const {getByTestId} = render(app);
    expect(getByTestId('app')).toBeDefined();
  });
});
