const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product')
mongoose.connect('mongodb://localhost:27017/farmStand',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    }
  
  ).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});;


app.set('views', path.join(__dirname, 'views'));
app.set('view  engine', 'ejs');


app.get('/dog', (req,res)=>{
    res.send("woof");
})

app.listen(3000, ()=>{
    console.log("App listening on port 3000");
})