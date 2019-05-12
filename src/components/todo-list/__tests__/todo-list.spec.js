import React from 'react';
import {render} from 'react-testing-library';

import {useFetchJson} from '@iso-react/data'

import TodoList from '~/components/todo-list';

const mockData = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: true,
  },
];

jest.mock('~/components/todo', () => {
  return jest.fn(({id}) => <div data-testid={`todo:${id}`} />);
});

jest.mock('@iso-react/data', () => {
  return {
    useFetchJson: jest.fn(() => [mockData, {}]),
  };
});

describe('Todo List', () => {
  it('should render multiple todos', () => {
    const {container, getByTestId} = render(<TodoList />);
    expect(getByTestId('todo:1')).toBeDefined();
    expect(getByTestId('todo:2')).toBeDefined();
    expect(container.childNodes).toHaveLength(2);
  });

  it('should render single todo', () => {
    useFetchJson.mockImplementationOnce(() => [[mockData[0]], {}]);

    const {container, queryByTestId, getByTestId} = render(<TodoList />);
    expect(getByTestId('todo:1')).toBeDefined();
    expect(queryByTestId('todo:2')).toBeFalsy();
    expect(container.childNodes).toHaveLength(1);
  });

  it('should render loading indicator', () => {
    useFetchJson.mockImplementationOnce(() => [null, {loading: true}]);

    const {container} = render(<TodoList />);
    expect(container.textContent).toEqual(expect.stringMatching(/loading/i));
  });

  it('should render error', () => {
    useFetchJson.mockImplementationOnce(() => [
      null,
      {error: new Error('test-error')},
    ]);

    const {container} = render(<TodoList />);
    expect(container.textContent).toEqual(expect.stringMatching(/test-error/i));
  });
});
