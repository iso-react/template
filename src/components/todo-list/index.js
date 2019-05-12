import React from 'react';
import {useFetchJson} from '@iso-react/data';

import config from '~/config';

import Todo from '~/components/todo';

const TodoList = () => {
  const [data, {loading, error}] = useFetchJson(
    config.exampleEndpoint,
    {},
    {hash: 'hello'}
  );
  const todos = React.useMemo(() => {
    return data && [...data].splice(0, 10);
  }, [data]);
  if (loading) return 'loading';
  if (error) return error.toString();

  return todos.map(todo => <Todo key={todo.id} {...todo} />);
};

export default TodoList;
