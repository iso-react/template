import React from 'react';

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
};

const statusStyle = {
  display: 'block',
  marginLeft: '1rem',
};

const Todo = ({id, userId, title, completed}) => {
  return (
    <div css={containerStyle}>
      <div css={nameStyle}>{title}</div>
      <div css={statusStyle}>{completed ? '✅' : '❌'}</div>
    </div>
  );
};

export default Todo;
