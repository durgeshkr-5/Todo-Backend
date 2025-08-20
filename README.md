# Todo-Backend

This is the backend project for a Todo application. The project is built using **Node.js** and **Express.js**, and utilizes **MongoDB** as the database. It includes authentication and full CRUD (Create, Read, Update, Delete) operations on todos. **JWT (JSON Web Tokens)** is used for secure user authentication.

## Features

- **User Authentication:**  
  Secure login and registration using JWT for token-based authentication.

- **CRUD Operations on Todos:**  
  Create, read, update, and delete todos for authenticated users.

- **RESTful API:**  
  Well-structured endpoints for interacting with todo items and user accounts.

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose ORM)
- **JWT (JSON Web Tokens)**

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or available via Atlas

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/durgeshkr-5/Todo-Backend.git
   cd Todo-Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory and add:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Start the server**
   ```bash
   npm start
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive a JWT token

### Todos (Protected routes, require JWT in Authorization header)

- `GET /api/todos` — Get all todos for the logged-in user
- `POST /api/todos` — Create a new todo
- `PUT /api/todos/:id` — Update a todo by ID
- `DELETE /api/todos/:id` — Delete a todo by ID

## Usage

- Use an API client like Postman or Insomnia to test endpoints.
- Authenticate with your JWT token for todo operations.


---

**Author:** [durgeshkr-5](https://github.com/durgeshkr-5)
