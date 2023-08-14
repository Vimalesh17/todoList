import { useState, useEffect } from "react";
import TaskComponent from "./components/TaskComponent";

function App() {
  const [todo, setTodo] = useState<any>([]);
  const [input, setInput] = useState<any>("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const addTask = () => {
    let task = {
      title: input,
      isCompleted: false,
    };
    let data: any = [...todo, task];
    setTodo(data);
    console.log(todo);
  };
  useEffect(() => {
    //console.log(todo); // Log the updated todo array whenever it changes
  }, [todo]);

  const deleteTask = (index: number) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };
  const completeTask = (index: number) => {
    const newTodo = [...todo];
    newTodo[index].isCompleted = true;
    setTodo(newTodo);
  };
  const editTask = (index: number, newValue: string) => {
    const newTodo = [...todo];
    newTodo[index].title = newValue;
    setTodo(newTodo);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add your task"
        onChange={handleInput}
      ></input>
      <button onClick={() => addTask()}>Add Task </button>
      <div>
        {todo.map((item: any, index: number) => {
          return (
            <TaskComponent
              key={index}
              deleteTask={() => {
                deleteTask(index);
              }}
              completeTask={() => {
                completeTask(index);
              }}
              editTask={(newValue: string)=>{
                editTask(index,newValue)
              }}
              task={item}
            ></TaskComponent>
          );
        })}
      </div>
    </div>
  );
}

export default App;
