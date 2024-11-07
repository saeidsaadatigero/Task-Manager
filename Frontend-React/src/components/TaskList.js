// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, onDeleteTask }) => {
    const handleDelete = (id) => {
        onDeleteTask(id);
    };

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.title}
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
