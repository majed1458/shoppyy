const { json } = require('body-parser');
const { error } = require('console');
const fs = require('fs');
const path = require('path');
const file = require('../helpers/path');
module.exports = class Product {
    constructor(title , description , price){
        this.title=title
        this.description=description ;
        this.price=price ;
    }
    save(){
        const p=path.join(file ,'data','products.json');
        fs.readFile(p ,(error, fileData)=>{
            let products=[];
            if(!error){
                products=JSON.parse(fileData);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),(err)=>{
                console.log(error);
            })
        })
    }
    static fetchAllProducts(){
        return products ;
    }
}