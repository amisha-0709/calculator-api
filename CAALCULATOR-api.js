const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.post('/add', (req, res) => {
  const { number1, number2 } = req.body;

  if (!number1 || !number2) {
    return res.status(400).json({ error: 'Missing input values' });
  }

  const result = number1 + number2;

  res.status(200).json({
    operation: 'addition',
    result,
  });
});

app.post('/sub', (req, res) => {
  const { number1, number2 } = req.body;

  if (!number1 || !number2) {
    return res.status(400).json({ error: 'Missing input values' });
  }

  const result = number1 - number2;

  res.status(200).json({
    operation: 'subtraction',
    result,
  });
});

app.post('/mul', (req, res) => {
  const { number1, number2 } = req.body;

  if (!number1 || !number2) {
    return res.status(400).json({ error: 'Missing input values' });
  }

  const result = number1 * number2;

  res.status(200).json({
    operation: 'multiplication',
    result,
  });
});

app.post('/div', (req, res) => {
  const { number1, number2 } = req.body;

  if (!number1 || !number2) {
    return res.status(400).json({ error: 'Missing input values' });
  }

  if (number2 === 0) {
    return res.status(400).json({ error: 'Division by zero not allowed' });
  }

  const result = number1 / number2;

  res.status(200).json({
    operation: 'division',
    result,
  });
});

app.post('/mod', (req, res) => {
  const { number1, number2 } = req.body;

  if (!number1 || !number2) {
    return res.status(400).json({ error: 'Missing input values' });
  }

  const result = number1 % number2;

  res.status(200).json({
    operation: 'modulo',
    result,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});