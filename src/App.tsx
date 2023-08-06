import React, { useState } from "react" 

const App = () =>{
  const [todo,setTodo]=useState("");
  const [addTodos,setAddTodos]:any=useState([]);
  const addTodo = ()=>{
    if(todo !== " "){
      setAddTodos([...addTodos,todo]);
      setTodo("");

    }
  }
  
  return(
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" onChange={(e)=>(setTodo(e.target.value))}/>
      <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  )
}

export default App;