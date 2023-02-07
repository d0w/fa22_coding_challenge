import React from "react";
//import { useState } from "react";
import { deleteTask } from "../services/taskServices";

const Task = ({ task }) => {
  /* CREATE UPDATE OPERATION */
  
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
        <button>UPDATE</button>
      </div>
    </div>
  );
};

export default Task;
