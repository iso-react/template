import React from 'react';
import {render} from 'react-testing-library';

import App from '~/components/app';

jest.mock('@iso-react/data', () => {
  return {
    DataContext: {
      Provider: ({children}) => children,
    },
  };
});

jest.mock('~/components/todo-list', () => {
  return () => null;
});

describe('App', () => {
  it('should render', () => {
    const {getByTestId} = render(<App />);
    expect(getByTestId('app')).toBeDefined();
  });
});
