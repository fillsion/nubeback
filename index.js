

const connection = require('./databaseConnection')
const http = require('http');
var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());

const hostname = '0.0.0.0';
const port = 3000;

app.listen(3000)

app.get('/products', function (req, res, next) {
  res.json(products)
})

const products = [
  {product_id: 1, product_name:"vulture",product_description: "breve"},
  {product_id: 2, product_name:"vulture2",product_description: "breve2"},
  {product_id: 3, product_name:"vulture3",product_description: "breve3"},
  {product_id: 4, product_name:"vulture4",product_description: "breve4"},

]




connection.query('select * from user', 
function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  })


  

