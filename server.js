const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('site/index', {
		title: 'GROUP PROJECT WITH D&D'
	});
});
app.get('/about', (req, res) => {
  res.send("This is what we're all about");
});

app.get('/about', (req, res) => {
  res.send("what we're all about");
});


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on ${PORT}`);
});
