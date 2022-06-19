import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Tasks from "./components/Tasks"
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import FilterTasks from "./components/FilterTasks";

import './App.css';

const App = () => {

  const getTasksFromLocalStorage = () => {
    const tasks = localStorage.getItem('tasks')
    if (!tasks) {
      console.log("no saved tasks")
      return []
    }
    return JSON.parse(tasks)
  }

  const [tasks, setTasks] = useState(getTasksFromLocalStorage());

  const handleTaskAddition = (taskTitle, description) => {
    if (description === '') description = taskTitle;
    const newTasks = [...tasks, {
      id: tasks.length,
      title: taskTitle,
      description: description,
      completed: false
    }]
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task
    })
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const handleTaskDeletion = (taskId) => {
    let newTasks = tasks.filter(task => task.id !== taskId)
    sortIdFromTasks(newTasks, taskId)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const filterTasksInView = (filterType, filterTypeAll, filterTypeCompleted, filterTypePending) => {
    const allTasksSaved = getTasksFromLocalStorage()
    if (allTasksSaved === []) return;
    switch (filterType) {
      case filterTypeAll:
        setTasks(allTasksSaved);
        break;
      case filterTypeCompleted:
        setTasks(allTasksSaved.filter(task => task.completed))
        break;
      case filterTypePending:
        setTasks(allTasksSaved.filter(task => !task.completed))
        break;
      default: break;
    }
  }

  const sortIdFromTasks = (tasks, index) => {
    for (let i = index; i < tasks.length; i++)
      tasks[i].id = i
    return tasks
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <FilterTasks filterTasksInView={filterTasksInView} />
                <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
              </>
            }
          />
          <Route path="/:taskTitle/:description" exact element={<TaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;