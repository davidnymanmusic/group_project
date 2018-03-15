const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('Group project with david');
});
app.get('/about', (req, res) => {
  res.send("what we're all about");
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on ${PORT}`);
});
