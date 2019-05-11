import React from 'react'

const Todo = ({id, userId, title, completed}) => {
  return <div>{title}: {completed ? '✅' : '❌'}</div>
}

export default Todo;