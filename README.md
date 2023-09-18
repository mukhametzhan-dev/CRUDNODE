# CRUD Application with Express.js, Node.js, MongoDB, and Mongoose

This is a simple CRUD (Create, Read, Update, Delete) application built with Express.js, Node.js, MongoDB, and Mongoose. 

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- MongoDB installed and running.

## Installation

**Step 1**: Install Dependencies for the project:
```bash
npm install
npm install express 
npm install mongoose 
npm install dotenv
npm install nodemon
```

**Step 2**: Now You have edit the `package.json` file. Copy the below code and paste it to that particular code.
```bash
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
```

**Step 3**: To Run the Project
```bash
npm run dev
```

Here is the structure of the files and folders of CRUD application project:

```bash
├── config/             # configuration files, e.g., database configuration
├── controllers/        # controller files for handling HTTP requests
├── models/             # Mongoose schema and model files for MongoDB
├── node_modules/       # dependencies installed by npm
├── routes/             # route files for defining API endpoints
├── .env                # environment variables configuration
├── server.js           # main application entry point
└── package-lock.json   # auto-generated file, locks dependency versions
└── package.json        # metadata and dependency configuration for npm
```

## API Routes

1. **Create a User**:
   - URL: `http://localhost:8000/api/v1/createUsers`
   - Route: `/createUsers`

2. **Get All Users**:
   - URL: `http://localhost:8000/api/v1/getUsers`
   - Route: `/getUsers`

3. **Get a User by ID**:
   - URL: `http://localhost:8000/api/v1/getUsers/:id`
   - Route: `/getUsers/:id`
   - `Note`: `:id` is a dynamic part of the URL that should be replaced with the actual user ID when making the request.

4. **Update a User by ID**:
   - URL: `http://localhost:8000/api/v1/updateUsers/:id`
   - Route: `/updateUsers/:id`
   - `Note`: `:id` is a dynamic part of the URL that should be replaced with the actual user ID when making the request.

5. **Delete a User by ID**:
   - URL: `http://localhost:8000/api/v1/deleteUsers/:id`
   - Route: `/deleteUsers/:id`
   - `Note`: `:id` is a dynamic part of the URL that should be replaced with the actual user ID when making the request.


## Usage

### Create Users (POST request):
 
1. Open Postman.

1. Set the request type to `POST`

1. Enter the URL for creating users:
   - URL: `http://localhost:8000/api/v1/createUsers`

1. In the "Body" tab, select the `raw` option and choose `JSON (application/json)` as the content type.

1. Enter JSON objects representing up to three users in the request body. Send (post request) 1 object at a time. For example:
   ```json
   {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "age": 30
   }
   {
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "age": 25
   }
   {
      "name": "Bob Johnson",
      "email": "bobjohnson@example.com",
      "age": 35
   }
1. Click the `Send` button to make the `POST` request.

1. You should receive a response from the server indicating that the users have been created. The response will include the users' data.

### Get All Users (GET request):

1. Create a new request in Postman.

2. Set the request type to `GET`

3. Enter the URL for getting all users:
   - URL: `http://localhost:8000/api/v1/getUsers`

4. Click the `Send` button to make the GET request.

5. You will receive a response from the server containing a list of all users in your database, which may include the users you just created.

### Update Users (PUT request):

1. Create a new request in Postman.

2. Set the request type to either `PUT` (if you want to update all fields).

3. Enter the URL for updating a user by ID, replacing `:id` with the actual user ID:
   - URL: `http://localhost:8000/api/v1/updateUsers/:id` (replace `:id` with a valid user ID)

4. In the "Body" tab, select the `raw` option and choose `JSON (application/json)` as the content type.

5. Enter the JSON data for updating one or more users in the request body. For example:
   ```json
   {
      "name": "Jane Smith",
      "email": "janesmith23@example.com",
      "age": 40
   },
1. Click the `Send` button to make the `PUT` request

1. You will receive a response from the server indicating that the users have been updated. The response will include the updated users' data.

### Delete Users (DELETE request):

1. Create a new request in Postman.

2. Set the request type to `DELETE`

3. Enter the URL for deleting a user by ID, replacing `:id` with the actual user ID:
   - URL: `http://localhost:8000/api/v1/deleteUsers/:id` (replace `:id` with a valid user ID)

4. Click the `Send` button to make the `DELETE` request.

5. You should receive a response from the server indicating that the user with the specified ID has been deleted.
