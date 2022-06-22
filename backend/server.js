import express from "express";
import mysql from "mysql";
import data from "./data.js";
import { Sequelize } from "sequelize";

const app = express();

const sequelize = new Sequelize('nursery', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});
//try {
   // await sequelize.authenticate();
   // console.log('Connection has been established successfully.');
//} catch (error) {
  //  console.error('Unable to connect to the database:', error);
//}
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    insecureAuth: true,
    database: "nursery"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/home', (req, res) => {
   con.query("SELECT * FROM PRODUCTS;", (err, results, fields) => {
       if (err) throw err;
        res.send(results);
    });
});

//app.get('/home', (req, res) => {
  //  res.send(data.products)
//});
app.get('/home/contact', (req, res) => {

});

app.get('/home/products/:categorySlug/:slug', (req, res) => {
  //  con.query("SELECT * FROM PRODUCTS WHERE slug = '" + req.param('slug') + "';", (err, results, fields) => {
      //  if (err) throw err;
       // res.send(results);
   // });
  
    const product = data.products.find((x) => x.slug === req.params.slug);
    if (product) {
       res.send(product);
    }
   else {
       res.status(404).send({ message: 'Product Not Found a' });
    }
});

app.post('/home/users/signup', (req, res) => {
    con.query("INSERT INTO user (name, email, password) VALUES ('" + req.name + "', '" + req.email + "', '" + req.password + "');", (err, results, fields) => {
        if (err) throw err;
        res.send({
            name: data.name,
            email: data.email,
            password: data.password,
        });
    });
});

app.get('/home/products/:categorySlug', (req, res) => {
    con.query("SELECT * FROM PRODUCTS WHERE categorySlug = '" + req.param('categorySlug') + "';", (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
});

app.get('/home/products/:id', (req, res) => {
    con.query("SELECT * FROM PRODUCTS WHERE id= '" + req.param('id') + "';", (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
    //} else {
     //   res.status(404).send({ message: 'Product Not Found e' });
   // }
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});