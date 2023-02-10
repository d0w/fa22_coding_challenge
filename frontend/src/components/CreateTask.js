import React from "react";
import { addTask } from "../services/taskServices.js";
import { useState } from "react";

const CreateTask = () => {
  /* CREATE 'CreateTask' COMPONENT */
  const [task, setTask] = useState("");
  const [buttonText, setButtonText] = useState("Add Task");

  const updateTask = (event) => {
    setTask(event.target.value);
  }

  const handleButton = () => {
    setButtonText("Added");
    setTimeout(() => {
      setButtonText("Add Task");
    }, 1500);
  }

  const save = (event) => {
    event.preventDefault();
    let entry = {
      description: task,
    };
    addTask(entry).then(response => {
      console.log(entry)
    }).catch(e => {
      console.log(e)
    });
    event.target.reset();
    console.log("Task added")
  }

  return (
    <p className='d-flex flex-column align-items-center pt-5'>
      <form onSubmit={save} className="form-container">
        <div class="form-group">
          <label for="taskName">Task</label>
          <input onChange={updateTask} class="form-control" id="exampleInputEmail1" aria-describedby="taskName" placeholder="Enter task name"/>
          <small id="emailHelp" class="form-text text-muted">What will you do today?</small>
        </div>
        <button onClick={handleButton} type="submit">{ buttonText }</button>
      </form>
    </p>
  );
};

export default CreateTask;
