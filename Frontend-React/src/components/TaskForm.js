// src/components/TaskForm.js
import React, { useState } from 'react';
import { addTask } from '../api';

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask({ title, completed: false })
            .then(response => {
                onAddTask(response.data);
                setTitle('');
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
