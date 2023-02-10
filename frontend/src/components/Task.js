import React from "react";
import { useState } from "react";
//import { useState } from "react";
import { deleteTask, changeTask } from "../services/taskServices";

const Task = ({ task }) => {
  /* CREATE UPDATE OPERATION */
  const [editing, setEditing] = useState(false);
  const [updateField, setUpdateField] = useState(task.description);

  const handleUpdateChange = (event) => {
    setUpdateField(event.target.value);
  }
  const updateEntry = (event) => {
    event.preventDefault();
    let submit = {
      description: updateField
    }
    changeTask(task._id, submit).then(response => {
      console.log(submit)
    }).catch(e => {
      console.log(e)
    });
    setEditing(false);
  }
  
  /* CREATE DELETE OPERATION*/
  const deleteEntry = (event) => {
    event.preventDefault();
    deleteTask(task._id);
    console.log("Task deleted");
  }
  return (
    <div className='pb-3 pt-1'>
      <p className='text-center'>{`${task.description}`}</p>
      <div>
        <button onClick={deleteEntry}>DELETE</button>
        { editing ? 
        <div className="form-group">
          <input type="text" className="form-control" required value={updateField} onChange={handleUpdateChange} name="task"></input>
          <button onClick={updateEntry}>FINISH EDIT</button>
        </div> 
        :
        <button onClick={()=>{setEditing(true)}}>UPDATE</button>
        }
        
      </div>
    </div>
  );
};

export default Task;
