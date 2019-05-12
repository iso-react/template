import React from 'react';
import {render} from 'react-testing-library';

import Root from '~/root/client';

jest.mock('react-router-dom', () => {
  return {
    BrowserRouter: jest.fn(({children}) => children),
  };
});

jest.mock('~/components/app', () => {
  return () => <div data-testid="app" />;
});

describe('Client root', () => {
  it('should render application', () => {
    const {getByTestId} = render(<Root />);
    expect(getByTestId('app')).toBeDefined();
  });
});
