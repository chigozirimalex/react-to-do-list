import React, { useState } from 'react'

function TODoList() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);

  }

  function addTask() {
    if(newTask.trim() !== "") {
      setTasks(tasks => [...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }

  return(
    <div className='to-do-list'>

      <h1>TO-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />

        <button
          className="add-button"
          onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => 
          <li key={index}>
            <span className="text">{task}</span>
            <button 
              className="delete-button" onClick={() => deleteTask(index)}>
                Delete
            </button>

          </li>
        )}
      </ol>
    </div>
  )
}

export default TODoList