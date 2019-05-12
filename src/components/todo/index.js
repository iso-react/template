import React from 'react';

import User from '~/components/user';

const Todo = ({id, title, completed}) => {
  return (
    <div data-testid={`todo:${id}`}>
      <div data-testid="title">{title}</div>
      {/* The JSON placeholder orders them by user.        */}
      {/* Grabbing 10 will result in all the same creator. */}
      {/* We are using the todo id to avoid this.          */}
      <div data-testid="user">
        <User id={id}>
          {(user, {loading, error}) => {
            if (loading) return 'loading';
            if (error) return error.toString();
            return `Created by ${user.name}`;
          }}
        </User>
      </div>
      <div data-testid="status">{completed ? '✅' : '❌'}</div>
    </div>
  );
};

export default Todo;
