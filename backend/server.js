import express from "express";
import data from "./data.js";

const app = express();

const cors = require("cors")

const genericError = "Sorry, something went wrong!"

app.use(express.json())

const whitelist = ["http://localhost:3001"] //Change to the port in which react app is running
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}
app.use(cors(corsOptions))


app.get('/home', (req, res) => {
    res.send(data.products)
});
app.get('/home/contact', (req, res) => {
    
});

app.get('/home/products/:categorySlug/:slug', (req, res) => {
    const product = data.products.find((x) => x.slug === req.params.slug);
    if(product) {
        res.send(product);
    }
    else {
        res.status(404).send({ message: 'Product Not Found a'});
    }
});



app.get('/home/products/:categorySlug', (req, res) => {
    const products = data.products.filter((x) => (x.categorySlug) === req.params.categorySlug);
    if (products) {
        res.send(products);
        console.log(products.length)
    }
    else {
        res.status(404).send({ message: 'Product Not Found y' });
    }
});

app.get('/home/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params._id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found e' });
    }
});


const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`serve at http://localhost:${port}`);
});