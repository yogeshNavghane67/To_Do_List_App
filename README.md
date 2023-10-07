# To_Do_List_App

# To-Do List App - MERN Stack

A full-stack To-Do List application with authentication, built using the MERN (MongoDB, Express.js, React, Node.js) stack and Next-auth for secure user authentication.

![To-Do List App Screenshot](screenshot.png)

## Features

- User authentication with Next-auth
- Create, update, and delete tasks
- Mark tasks as completed
- Filter tasks by status (All, Active, Completed)
- Responsive design
- MongoDB database for data storage
- RESTful API for task management
- Integration with Next.js for server-side rendering

## Technologies Used

- **Frontend:**
  - React: A JavaScript library for building user interfaces.
  - Next.js: A React framework for server-side rendering and routing.
  - CSS: Styling for the application.

- **Backend:**
  - Node.js: A JavaScript runtime for building server-side applications.
  - Express.js: A web application framework for Node.js.
  - MongoDB: A NoSQL database for data storage.
  - Next-auth: An authentication library for Next.js applications.

## Install dependencies for both the client and server:

- bash
cd To_Do_List_App
cd client && npm install
cd ../server && npm install
Create a .env file in the server directory and configure the following variables:

- env
MONGODB_URI=your-mongodb-connection-string
SESSION_SECRET=your-session-secret
Start the development servers:

- bash
# In the client directory
cd client && npm run dev

# In the server directory
cd server && npm run dev

Visit http://localhost:3000 in your web browser to use the application.
