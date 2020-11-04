import React from 'react';

function TodoItem({ todo, index, onClick, removeItem }) {
  //there we take some fields from props which is default
  let condition = [];

  if (todo.completed) condition.push('todo-item-checked');

  return (
    <li className='todo-item'>
      <span className={condition.join(' ')}>
        <input
          className='todo-item__check'
          type='checkbox'
          checked={todo.completed}
          onChange={() => onClick(todo.id)}
        />
        <strong>{index + 1})</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className='todo-item__btn-remove' onClick={()=>{removeItem(todo.id)}}>&times;</button>
    </li>
  );
}

export default TodoItem;
