const express = require('express');
const app = express();
const path = require('path'); //kad galetume nurodyt absoliutu kelia

const PORT = 3000;

//register view engine
app.set('view engine', 'ejs');
// nustatom render view homedir
app.set('views', 'src/views');

//home page
app.get('/', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'pages', 'index.html'));

  //paimti index.ejs faila is views  direktorijos
  res.render('index', {
    title: 'Home',
    page: 'home',
  });
});

//aout page
app.get('/about', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'pages', 'about.html'));
  res.render('about', {
    title: 'About us',
    page: 'about',
  });
});

//blog page
app.get('/blog', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'pages', 'blog.html'));
  res.render('blog', {
    title: 'Our Blog',
    page: 'blog',
  });
});

//contact page
app.get('/contact', function (req, res) {
  res.render('contact', {
    title: 'Contact Us',
    page: 'contact',
  });
});

const staticPath = path.join(__dirname, 'static');
//statine direktorija, css, js, img ir kitos..statiniam failam
app.use(express.static(staticPath));

// 404 case, kuri vartotojas ivede puslapi kurio nera
app.use((req, res) => res.status(404).send('Oops, Page not found'));

app.listen(PORT);
