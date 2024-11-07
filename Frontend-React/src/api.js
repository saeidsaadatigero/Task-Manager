// // import axios from 'axios';
// //
// // const API = axios.create({
// //     baseURL: 'http://127.0.0.1:8000/api/'
// // });
// //
// // export default API;
//
//
// // src/api.js
// import axios from 'axios';
//
// const API = axios.create({
//     baseURL: 'http://127.0.0.1:8000/api/', // URL به API Django
// });
//
// export const getTasks = () => API.get('tasks/');
// export const addTask = (task) => API.post('tasks/', task);
// export const deleteTask = (id) => API.delete(`tasks/${id}/`);
// export const updateTask = (id, updatedTask) => API.put(`tasks/${id}/`, updatedTask);
//
// export default API;


// src/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/tasks/';

export const getTasks = () => axios.get(API_URL);

export const addTask = (task) => axios.post(API_URL, task);

export const deleteTask = (id) => axios.delete(`${API_URL}${id}/`);
