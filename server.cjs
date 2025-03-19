const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;  // You can change this port if you need

const pieceService = require('./services/pieceService.cjs');

//middleware
app.use(express.static(path.join(__dirname, 'public')));

// config ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// A simple route
app.get('/', (req, res) => {
  res.render('index', {pieces : pieceService.getAllPieces()});
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});