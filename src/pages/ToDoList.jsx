import React, { useState } from 'react'

const ToDoList = () => {
  const [todo, setTodo] = useState('')
  const [task, setTask] = useState([])

  const handleChange =(e)=>{
   setTodo(e.target.value)
   console.log(todo)
  }

  const addTask=()=>{
    if(todo.trim() === '') return;
    setTask([...task,todo]);
    setTodo ('')
  } 

  return (
    <div>
      <h1>TO DO LIST</h1>
      <div className="input">
        <input type="text" value={todo} onChange={handleChange} placeholder='enter text' />
        <button onClick={addTask}>ADD</button>
      </div>
      <ul>
        {task.map((data,index )=>(
          <li key={index}>{data} </li>
        ))}
      </ul>

    </div>
  )
}

export default ToDoList