import React from 'react';
import {render} from 'react-testing-library';

import User from '~/components/user';

import Todo from '~/components/todo';

jest.mock('~/components/user', () => {
  return jest.fn(({id, children}) => children({name: id}, {}));
});

const samples = {
  complete: {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: true,
  },
  incomplete: {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
};

describe('Todo', () => {
  it('should render a complete todo', () => {
    const sample = samples.complete;
    const {getByTestId} = render(<Todo {...sample} />);

    expect(getByTestId('todo:1')).toBeDefined();
    expect(getByTestId('title').textContent).toEqual(sample.title);
    expect(getByTestId('user').textContent).toEqual(
      expect.stringMatching(new RegExp(`^created by ${sample.id}$`, 'i'))
    );
    expect(getByTestId('status').textContent).toEqual('✅');
  });
  it('should render an incomplete todo', () => {
    const sample = samples.incomplete;
    const {getByTestId} = render(<Todo {...sample} />);

    expect(getByTestId('todo:1')).toBeDefined();
    expect(getByTestId('title').textContent).toEqual(sample.title);
    expect(getByTestId('user').textContent).toEqual(
      expect.stringMatching(new RegExp(`^created by ${sample.id}$`, 'i'))
    );
    expect(getByTestId('status').textContent).toEqual('❌');
  });
  it('should render a todo with a loading user', () => {
    User.mockImplementationOnce(({id, children}) =>
      children(null, {loading: true})
    );
    const sample = samples.complete;
    const {getByTestId} = render(<Todo {...sample} />);

    expect(getByTestId('todo:1')).toBeDefined();
    expect(getByTestId('title').textContent).toEqual(sample.title);
    expect(getByTestId('user').textContent).toEqual(
      expect.stringMatching(new RegExp(`^loading$`, 'i'))
    );
    expect(getByTestId('status').textContent).toEqual('✅');
  });
  it('should render a todo with a user that failed to load', () => {
    User.mockImplementationOnce(({id, children}) =>
      children(null, {error: new Error('test-error')})
    );
    const sample = samples.complete;
    const {getByTestId} = render(<Todo {...sample} />);

    expect(getByTestId('todo:1')).toBeDefined();
    expect(getByTestId('title').textContent).toEqual(sample.title);
    expect(getByTestId('user').textContent).toEqual(
      expect.stringMatching(new RegExp(`test-error`, 'i'))
    );
    expect(getByTestId('status').textContent).toEqual('✅');
  });
});
