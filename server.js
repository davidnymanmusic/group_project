const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('Group project with david');
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});

// eslint-disable-next-line no-console
