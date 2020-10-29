const express = require('express');
const path =require('path');

const adminRoutes= require('../controllers/products');

const routes = express.Router();


routes.get('/add-product' , adminRoutes.getAddProduct);

routes.post('/add-product',adminRoutes.postAddProduct);

exports.routes = routes ;
