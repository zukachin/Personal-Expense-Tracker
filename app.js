// The main application file sets up the Express server, 
// connects to MongoDB, and defines the routes for CRUD operations.
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Expense = require('./models/Expense');

const app = express();
const PORT = process.env.PORT;



app.set('view engine', 'ejs'); // Set EJS as the template engine
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data
app.use(express.static('public')); // Serve static files from the 'public' folder


mongoose.connect(process.env.DB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log("MongoDB connection error:",err));


// Get all expenses and display on the homepage
app.get('/', async (req, res) => {
    const expenses = await Expense.find({});
    res.render('index', { expenses });
  });

// Render form to add a new expense
app.get('/add', (req, res) => {
    res.render('add');
  });
  
// Add a new expense to the database
app.post('/add', async (req, res) => {
    const { name, amount,date, category } = req.body;
    await new Expense({ name, amount,date,category }).save();
    res.redirect('/');
  });

// Render edit form for an expense
app.get('/edit/:id', async (req, res) => {
    const expense = await Expense.findById(req.params.id);
    res.render('edit', { expense });
  });

// Update an expense
app.post('/edit/:id', async (req, res) => {
    const { name, amount,date, category } = req.body;
    await Expense.findByIdAndUpdate(req.params.id, { name, amount,date,category });
    res.redirect('/');
  });
  
// Delete an expense
app.post('/delete/:id', async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.redirect('/');
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  