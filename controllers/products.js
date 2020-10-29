const products = [];

exports.getAddProduct =(req,res)=>{
    res.render('add-product',{
        pageTitle: 'add product',
        path:'/admin/add-product',
        active:true
    })
}

exports.postAddProduct =(req,res)=>{
    products.push({title : req.body.title, description:req.body.description , price:req.body.price});
    console.log(products);
    res.redirect('/');

}

exports.getProducts = (req,res)=>{ 
    res.render('shop',{
        prods: products ,
        pageTitle:'shop',
        path:'/',
        active: true, 
    });
}