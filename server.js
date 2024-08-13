// Require:
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts')

// Cofnig:
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static(path.join(__dirname, 'public')));

//Routers:
const studentsRouter = require('./routes/students')
const systemRouter = require('./routes/system')

app.use('/students', isAuthenticated, studentsRouter)
app.use('/cours', isAuthenticated, systemRouter)

// Pages:

router.get('/', (req, res) => {
    res.render('index', {layout: 'layouts/guestLayout'})
})

app.get('/login', (req, res) => {
    const error = req.query.error;
    res.render('login', {layout: 'layouts/layout', error})
  })
  
  app.post('/login', (req, res) => {
    const password = req.body.password;  
    if (password === "1997") {
      req.session.authenticated = true;
      res.redirect('/students');
    } else {
      const errorMessage = encodeURIComponent('סיסמה שגויה, נסה שנית...');
          res.redirect(`/login?error=${errorMessage}`);
    }
  })
  
  function isAuthenticated(req, res, next) {
    if (req.session.authenticated) {
        return next();
    }
    res.redirect('/login');
  }
  
  app.get('/logout', (req, res) => {
    req.session.authenticated = false;
    res.redirect('/login');
  });

// Server:
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
