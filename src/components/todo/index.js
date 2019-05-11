import React from 'react';

import User from '~/components/user';

const Todo = ({id, userId, title, completed}) => {
  return (
    <div>
      <div>{title}</div>
      <User id={userId}>
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
