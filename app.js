const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

app.engine('handlebars', expressHandlebars.engine({defaultLayout: 'main', })) 
app.set('view engine', 'handlebars') 

app.use(express.static(__dirname + '/public')) 

app.get('/', (req,res) => {
    res.render('home')
}) 

app.get('/about', (req,res) => {
    res.render('about')
}) 

app.get('/about/directions', (req,res) => {
    // envia conteúdo.... 
}) 

app.use((req, res) => {
    res.status(404)
    res.render('404') 
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500') 
}) 


app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; `+ `press Ctrl-C to terminate.`
));