import React from 'react';

import User from '~/components/user';

const Todo = ({id, title, completed}) => {
  return (
    <div>
      <div>{title}</div>
      {/* The JSON placeholder orders them by user.        */}
      {/* Grabbing 10 will result in all the same creator. */}
      {/* We are using the todo id to avoid this.          */}
      <User id={id}>
        {(user, {loading, error}) => {
          if (loading) return 'loading';
          if (error) return error;
          return <div>Created by {user.name}</div>;
        }}
      </User>
      <div>{completed ? '✅' : '❌'}</div>
    </div>
  );
};

export default Todo;
