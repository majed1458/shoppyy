const express = require('express');
const bodyparser =require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/adminRoutes');
const shopRoutes =require('./routes/shop');

const app = express();

app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static( path.join(__dirname ,'public')));
app.set('view engine', 'ejs');

app.use('/admin' ,adminRoutes.routes);
console.log('wsel');
app.use('/' ,shopRoutes.router);
app.use ((req,res)=>{
    res.status(404).render('404', {pageTitle: 'page not found'});
})

try {
    app.listen(3000);
    console.log('connected to port 3000');
}catch{
    console.log('something went wrong while connecting');
}