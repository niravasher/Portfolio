module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('home.ejs');
  })
  app.get('/portfolio', (req, res) => {
    res.render('portfolio.ejs');
  })
  app.get('/contact', (req, res) => {
    res.render('contact.ejs');
  })
  app.get('/whatsapp', (req, res) => {
    res.render('whatsapp.ejs');
  })
}