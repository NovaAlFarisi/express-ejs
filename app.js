const express = require('express');
const path = require('path');   
const app = express();

//perintahkan express utnuk menggunakan ejs template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index', {home:'Hello'}); 
});

app.listen(3000,(err)=>{
    if(!err){
        console.log('server running'); 
    } else {
        console.log(err);
    }
})