import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onClick={props.onToggle}
            removeItem = {props.removeItem}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
