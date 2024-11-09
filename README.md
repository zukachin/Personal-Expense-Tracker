# Personal Expense Tracker

A simple web application for tracking personal expenses, built with Node.js, Express, MongoDB, and Mongoose. This app allows users to add, view, edit, and delete expenses while tracking spending habits.

## Features
- Add new expenses with details (name, amount, date, category)
- View a list of all expenses
- Update or delete existing expenses
- Store expenses in MongoDB
- Use environment variables for configuration

## Technologies Used
- **Node.js** - JavaScript runtime for building the backend
- **Express** - Web framework for Node.js
- **MongoDB** - NoSQL database to store expenses
- **Mongoose** - ODM (Object Data Modeling) library for MongoDB
- **dotenv** - Package to manage environment variables
- **EJS** - Embedded JavaScript templating for rendering views
- **Bootstrap** - Frontend framework for responsive design

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/personal-expense-tracker.git
cd personal-expense-tracker
```

### 2. Install dependencies
After cloning the repository, navigate into the project folder and install all required dependencies using npm:
```bash
npm install
```

### 2. Create a .env file
In the root directory of the project, create a .env file to store your environment variables, such as the MongoDB connection string and the port number.
```bash
DB_URI=mongodb://localhost:27017/expense-tracker
PORT=5000
```
**DB_URI**: This is your MongoDB connection URI. You can use a local MongoDB instance or connect to a remote MongoDB database if preferred.
**PORT**: This is the port number on which the server will run. The default is set to 5000, but you can change it if necessary.

### 2. run the application
Once the dependencies are installed and the .env file is set up, you can start the application by running the following command:
```bash
npm start
```

Open your browser and navigate to http://localhost:5000 to access the Personal Expense Tracker application
