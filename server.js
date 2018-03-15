const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('site/index', {
		title: 'GROUP PROJECT WITH D&D'
	});
});
app.get('/about', (req, res) => {
  res.render('site/about', {
		about: 'This is who we are'
	});
});
app.get('/contact', (req, res) => {
  res.render('site/contact', {
		title: 'contact us now please'
	});
});
app.get('/forms', (req, res) => {
  res.render('site/forms', {
		title: 'sign up'
	});
});



app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on ${PORT}`);
});
