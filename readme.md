
# Kanban Board Demo Application

This is a Kanban Board web application built using the MERN stack (MongoDB, Express, React, and Node.js). The application allows users to create and manage tasks through an intuitive drag-and-drop interface, with tasks categorized by different stages of progress (e.g.,Requested, To Do, In Progress, and Done).

## Features

- **Task Management:** Create, edit, delete, and move tasks across different columns.
- **Real-time Updates:** Tasks are updated in real-time across the UI.
- **Drag-and-Drop:** Easy task movement between columns.

## Tech Stack

- **Frontend:** React, React DnD, Bootstrap/Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Installation and Setup

To get the development environment running, follow these steps:

### Prerequisites

- Node.js (v14+)
- MongoDB (installed locally or via MongoDB Atlas)
- Git

### Clone the Repository

```bash
git clone https://github.com/your-username/kanban-board-demo.git
cd kanban-board-demo
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Set Up Environment Variables

In the `backend/` directory, create a `.env` file with the following variables:

```bash
MONGO_URI=your_mongo_db_connection_string
CORS_ORIGIN=your_frontend_uri
PORT=5000
```

In the `frontend/` directory, create a `.env` file with the following variables:

```bash
REACT_APP_BASE_URI=your_backend_uri
```

### Run the Application

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend React application:
   ```bash
   cd frontend
   npm start
   ```

The app should now be running on [http://localhost:3000](http://localhost:3000).

## Demo Video

Watch the demo of the Kanban Board application here: [Kanban Board Demo Video](https://youtu.be/HrbMapDaPXQ)

## License

This project is licensed under the MIT License.
