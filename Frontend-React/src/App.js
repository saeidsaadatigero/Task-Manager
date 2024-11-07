// src/App.js
import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { getTasks } from './api';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks()
            .then(response => setTasks(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="container">
            <h1>Task Manager</h1>
            <TaskForm onAddTask={handleAddTask} />
            <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
        </div>
    );
};

export default App;
