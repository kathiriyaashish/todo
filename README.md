# Task Management Application

A full-stack Task Management Application built using **Next.js**, **TypeScript**, **Tailwind CSS**, **Node.js**, **Express.js**, and **MongoDB**.

## Features

* Add Task
* Edit Task
* Delete Task
* Mark Task as Complete
* View All Tasks
* Responsive User Interface
* MongoDB Database Integration
* REST API Backend
* Deployed Frontend and Backend

---

## Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MongoDB Atlas

### Deployment

* Frontend: Vercel
* Backend: Render

---

## Task Fields

Each task contains:

| Field       | Description         |
| ----------- | ------------------- |
| Title       | Task title          |
| Description | Task description    |
| Priority    | High / Medium / Low |
| Due Date    | Task deadline       |
| Status      | Pending / Completed |

---

## API Endpoints

### Create Task

POST /api/tasks

### Get All Tasks

GET /api/tasks

### Get Task By ID

GET /api/tasks/:id

### Update Task

PUT /api/tasks/:id

### Delete Task

DELETE /api/tasks/:id

### Mark Task Complete

PATCH /api/tasks/:id/complete

---

## Project Structure

frontend/
├── app/
├── app/components/
├── app/services/


backend/
├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── config/
│ └── app.ts
│ └── server.ts

---

## Environment Variables

### Backend (.env)

PORT=5000

MONGO_URI=mongodb+srv://kathiriyaashish255:xxxxxxxxxx@cluster0.d0e8cxc.mongodb.net/?appName=Cluster0/todoapp"

---

## Installation & Setup

### Clone Repository

git clone https://github.com/kathiriyaashish/todo/
second backend https://github.com/kathiriyaashish/todo_backend/
### Frontend Setup

cd frontend

npm install

npm run dev

### Backend Setup

cd backend

npm install

npm run dev

---

## Deployment Links

### Frontend (Vercel)

https://todo-iota-nine-38.vercel.app/

### Backend (Render)

https://todobackend-ib6n.onrender.com/

---



## Responsive Design

The application is fully responsive and supports:

* Mobile Devices
* Tablets
* Desktop Screens

---

## Database Integration

MongoDB Atlas is used for data persistence.

Task data is stored and managed using Mongoose models and MongoDB collections.

---

## Made by

Ashish Kathiriya

BCA Graduate

Ahmedabad, Gujarat
