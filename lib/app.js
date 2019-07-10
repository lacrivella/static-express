const express = require('express');
const app = express();

const colors = [
  { name: 'cerulean', hex: '007BA7', r: '0', g: '123', b:'167' },
  { name: 'vermilion', hex: 'E34234', r: '227', g: '66', b:'52' },
  { name: 'viridian', hex: '40826D', r: '60', g: '130', b:'109' },
  { name: 'lavender', hex: 'E6E6FA', r: '230', g: '230', b:'250' },
];

app.use(express.static('./public'));

app.get('/api/v1/colors', (req, res) => {
  res.send(colors);
});

module.exports = app;
