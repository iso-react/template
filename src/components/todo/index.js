import React from 'react';

import User from '~/components/user';

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '80%',
  justifyContent: 'space-between',
  margin: '0 auto 0',
  '&:not(:nth-of-type(1))': {
    borderTop: '1px solid black',
  },
};

const nameStyle = {
  display: 'block',
  flex: '1 1 auto',
};

const statusStyle = {
  display: 'block',
  marginLeft: '1rem',
  flex: '0 0 auto',
};

const userStyle = {
  fontSize: '0.8rem',
  fontStyle: 'italic',
  flex: '0 0 auto',
};

const Todo = ({id, title, completed}) => {
  return (
    <div css={containerStyle} data-testid={`todo:${id}`}>
      <div css={nameStyle} data-testid="title">{title}</div>
      {/* The JSON placeholder orders them by user.        */}
      {/* Grabbing 10 will result in all the same creator. */}
      {/* We are using the todo id to avoid this.          */}
      <div css={userStyle} data-testid="user">
        <User id={id}>
          {(user, {loading, error}) => {
            if (loading) return 'loading';
            if (error) return error.toString();
            return `Created by ${user.name}`;
          }}
        </User>
      </div>
      <div css={statusStyle} data-testid="status">{completed ? '✅' : '❌'}</div>
    </div>
  );
};

export default Todo;
