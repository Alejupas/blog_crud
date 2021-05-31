const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello World');
});

// 404 case, kuri vartotojas ivede puslapi kurio nera
app.use((req, res) => res.status(404).send('Oops, Page not found'));

app.listen(PORT);
