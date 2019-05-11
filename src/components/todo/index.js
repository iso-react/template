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
  '& > *': {
    flex: '0 1 100%',
  },
};

const nameStyle = {
  display: 'block',
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

const Todo = ({id, userId, title, completed}) => {
  return (
    <div css={containerStyle}>
      <div css={nameStyle}>{title}</div>
      <User id={userId}>
        {(user, {loading, error}) => {
          if (loading) return 'loading';
          if (error) return error;
          return <div css={userStyle}>Created by {user.name}</div>;
        }}
      </User>
      <div css={statusStyle}>{completed ? '✅' : '❌'}</div>
    </div>
  );
};

export default Todo;
