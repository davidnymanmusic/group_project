const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('Group project with david');
});
<<<<<<< HEAD
app.get('/about', (req, res) => {
  res.send("what we're all about");
});
=======
>>>>>>> bbf358e96b10b8eb295d767f693745f3416ec4c5

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on ${PORT}`);
});
<<<<<<< HEAD
=======


>>>>>>> bbf358e96b10b8eb295d767f693745f3416ec4c5
