# 📝 Task Manager
![Screenshot from 2024-11-07 22-20-51](https://github.com/user-attachments/assets/b9b05677-27a3-4573-a8b9-39031e4b5f42)

A task management application built with Django REST framework and React. Manage your tasks effortlessly with this full-stack web application! 🚀

---

## 🌟 Features

- 🆕 **Add Tasks:** Create new tasks with a title.
- 📋 **View Tasks:** List all existing tasks in a clean, organized format.
- ❌ **Delete Tasks:** Remove tasks when they’re done.
- 💻 **Full-Stack Setup:** Django REST framework as backend, React as frontend.

---

## 🛠️ Technologies Used

- **Backend:** Django, Django REST Framework
- **Frontend:** React, Axios (for API requests)
- **Database:** SQLite (default with Django, can switch to PostgreSQL or MySQL)
- **Utilities:** Django CORS Headers, Axios

---

## ⚙️ Installation

Follow these steps to get the project running on your local machine:

### 📋 Prerequisites

Make sure you have the following installed:
- Python 3.x 🐍
- Node.js and npm 🌐

### 🖥️ Backend Setup (Django)
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/saeidsaadatigero/task-manager.git
   cd task-manager
   ```

2. **Set up a Virtual Environment:**
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # For Windows use `.venv\Scripts\activate`
   ```

3. **Install Backend Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run Migrations:**
   ```bash
   python manage.py migrate
   ```

5. **Start the Backend Server:**
   ```bash
   python manage.py runserver
   ```
   Django server will be running at `http://127.0.0.1:8000/` 🎉

6. **Setup CORS (if needed):**
   Add `CORS_ALLOWED_ORIGINS` in Django settings to allow requests from the frontend:
   ```python
   # settings.py
   CORS_ALLOWED_ORIGINS = [
       "http://localhost:3000",
   ]
   ```

### 🌐 Frontend Setup (React)

1. **Navigate to the `frontend` Directory:**
   ```bash
   cd frontend
   ```

2. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

3. **Start the React Development Server:**
   ```bash
   npm start
   ```

   React app will be running at `http://localhost:3000/` 🥳

---

## 📂 Project Structure

Here’s a quick overview of the project layout:

```plaintext
task-manager/
├── backend/                     # Django backend
│   ├── task_manager/            # Django project configuration
│   └── api/                     # API app containing views, models, and serializers
│
└── frontend/                    # React frontend
    ├── src/
    │   ├── components/          # React components (TaskList, TaskForm, TaskItem)
    │   ├── App.js               # Main React App component
    │   ├── api.js               # Axios API configuration
    │   └── index.js             # React entry point
```

---

## 🔧 Usage

1. Go to `http://localhost:3000` to view the task manager app.
2. 🖊️ Use the input form to add new tasks. Tasks are saved in the backend and loaded on page refresh.
3. 🗑️ Delete tasks by clicking the “Delete” button next to each item.

---

## 🌍 API Endpoints
![Screenshot from 2024-11-07 23-01-45](https://github.com/user-attachments/assets/642c6557-190e-41da-b2fb-05bf6b22d325)


These are the main API endpoints exposed by Django:

- `GET /api/tasks/` - Get all tasks
- `POST /api/tasks/` - Create a new task
- `DELETE /api/tasks/<id>/` - Delete a specific task

---

## ❓ Troubleshooting

- **CORS Errors:** Add the frontend URL (`http://localhost:3000`) in `CORS_ALLOWED_ORIGINS` in Django settings.
- **Database Issues:** If SQLite gives trouble, delete the `db.sqlite3` file and re-run migrations (`python manage.py migrate`).
![Screenshot from 2024-11-07 22-32-45](https://github.com/user-attachments/assets/7ca8f68e-cfd1-40a5-bfd1-8e6834d9a0a0)

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues, create pull requests, or fork the repo and make your own changes. 🎉

---

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by [Saeid Saadatigero](https://github.com/saeidsaadatigero)

