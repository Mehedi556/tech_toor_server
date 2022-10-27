const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/options.json');

const details = require('./data/details.json');


app.get('/categories' , (req , res) => {

    res.send(categories);

})



app.get('/details/:id' , (req , res) => {

    const id = req.params.id;
    const selectedNews = details.find( detail => detail.id === id);
    res.send(selectedNews)

})



app.get('/details' , (req , res) => {
    res.send(details);
})



app.get('/' , (req , res) => {
    res.send('news api running')
})















app.listen(port , () => {
    console.log('TechToor server running on port', port);
})