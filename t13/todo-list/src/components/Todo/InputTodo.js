import React, { useState } from 'react';

function InputTodo({ onCreate }) {
  const [value, setValue] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    if (value.trim) {
      onCreate(value);
      setValue('');
    }
  }

  return (
    <form className='input-todo' onSubmit={submitHandler}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className='input-todo__text'
        type='text'
      />
      <button className='input-todo__submit' type='submit'>
        Add
      </button>
    </form>
  );
}

export default InputTodo;
