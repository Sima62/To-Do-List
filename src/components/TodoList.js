import React from 'react';
import { useState } from 'react/cjs/react.development';
import TodoForm from './TodoForm'
import Todo from './Todo'

export default function Todolist() {
    const [todos, setTodos] = useState([]);

    const addTask = task => {
        if(!task.text) {
            return
        }
        const newTodos= [task, ...todos];
        setTodos(newTodos);

    }
    const removeTask=id=>{
        let updatedtasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedtasks)
    }
    
    const completeTask= id => {
      let updatedtasks= todos.map(todo => {
          if(todo.id ===id){
              todo.isComplete=true;
          }
          return todo;
      })   
      setTodos(updatedtasks)
    }

  return (
    <div>
        <TodoForm addTask ={addTask}></TodoForm>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>

    </div>
  )
}
