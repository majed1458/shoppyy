const Product = require('../models/product');

exports.getAddProduct =(req,res)=>{
    res.render('add-product',{
        pageTitle: 'add product',
        path:'/admin/add-product',
        active:true
    })
}

exports.postAddProduct =(req,res)=>{
    const prod =new Product(req.body.title,req.body.description , req.body.price);
    console.log(prod);
    prod.save();
    res.redirect('/');

}

exports.getProducts = (req,res)=>{ 
    const products = Product.fetchAllProducts();
    res.render('shop',{
        prods: products ,
        pageTitle:'shop',
        path:'/',
        active: true, 
    });
}