import React from 'react';
import {render} from 'react-testing-library';

import {useFetchJson} from '@iso-react/data';

import User from '~/components/user';

jest.mock('@iso-react/data', () => {
  return {
    useFetchJson: jest.fn(),
  };
});

describe('User', () => {
  it('should provide fetched user to child render prop', () => {
    const mockedData = ['test', {loading: true, error: new Error()}];
    useFetchJson.mockReturnValueOnce(mockedData);
    const renderProp = jest.fn(data => data);
    render(<User id={1}>{renderProp}</User>);
    expect(renderProp).toHaveBeenCalledWith(...mockedData);
  });
});
