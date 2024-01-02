const express = require('express');
const app = express();
const port = process.env.PORT ||  5000;
const cors = require('cors')


const categories = require('./data/categories.json')
const news = require('./data/news.json')
app.use(cors())
app.get('/', (req,res) => {
    res.send('Dragon is running.....')
})
app.get('/categories', (req, res)=>{
    res.send(categories)
})

app.get('/news', (req, res) => {
    res.send(news)
})
app.listen(port, ()=> {
    console.log("Port is Running at : ", port)
})