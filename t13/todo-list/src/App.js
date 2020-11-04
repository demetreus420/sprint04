import React from 'react';
import './App.css';
import InputTodo from './components/Todo/InputTodo';
import TodoList from './components/Todo/TodoList';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Buy some shit1' },
    { id: 3, completed: false, title: 'Buy some shit2' },
    { id: 2, completed: false, title: 'Buy some shit3' },
  ]);

  function onToggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeListItem(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    return todos;
  }

  function onCreate(title) {
    setTodos(todos.concat([{
      title: title,
      id: Date.now(),
      completed: false,
    }]));
  }

  return (
    <div className='wrapper'>
      <h1>Todo list</h1>
      <InputTodo onCreate={onCreate}/>
      <TodoList
        todos={todos}
        onToggle={onToggleTodo}
        removeItem={removeListItem}
      />
    </div>
  );
}

export default App;
