import React, { useState } from 'react';
import Store from './Components/Store';
const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const changehandler = e => {
    setTask(e.target.value)
  }
  const submiithand = e => {
    e.preventDefault();
    const newTodos = [...todos, task]
    setTodos(newTodos)
    setTask('')
    console.log(task)

  }
  const delhandler = (indexvalue) => {
    const newTodo = todos.filter((todo, index) => index !== indexvalue)

    console.log(setTodos(newTodo))

  }
  return <>
    <center>
      <form onSubmit={submiithand}>
        <input
          type="task"
          name="add"
          value={task} onChange={changehandler} />
        <input type="submit" value="add" className='btn btn-primary' />
      </form>
      <Store todos={todos} delhand={delhandler} />
    </center>
  </>;
};

export default App;
