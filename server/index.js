const express = require('express');
const app = express();
const port = 3000;

// test route
app.get('/', (req, res) => {
  res.send('Gunsmith Buddy!');
});

// get all submitted cards
app.get('/', (req, res) => {
  //
});

// get all user cards
app.get('/', (req, res) => {
  //
});

// submit new card
app.post('/', (req, res) => {
  //
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});