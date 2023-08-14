import { useState } from "react";
const TaskComponent = ({ task, deleteTask, completeTask,editTask }: any) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newValue, setNewValue] = useState(task.title);
  const handleEdit =(e:any)=>{
    setNewValue(e.target.value);

  }
  const  edit = () =>{
    setIsEdit(false);
    editTask(newValue);
  }
  return (
    <div>
      <span>
        {isEdit ? (
          <input type="text" value={newValue} onChange={handleEdit}></input>
        ) : (
          <p
            style={
              task.isCompleted
                ? { textDecoration: "line-through" }
                : { textDecoration: "" }
            }
          >
            {task.title}
          </p>
        )}
      </span>
      <span>
        <button onClick={() =>isEdit? edit() : setIsEdit(true)}>{isEdit ? 'Submit' : 'Edit'}</button>
      </span>
      <span>
        <button disabled={isEdit} onClick={deleteTask}>Delete</button>
      </span>
      
      <span>
        <button disabled={isEdit} onClick={completeTask}>Complete</button>
      </span>
    </div>
  );
};
export default TaskComponent;
