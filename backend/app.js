const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const data = require('./data');
const bodyParser = require('body-parser');
const productRoute = require('./routes/productRoute');

app.use(bodyParser.json());

// app.use('/api/products/', productRoute);

app.get('/api/products', (req,res) => {
    res.send(data);
});

app.get('/api/products/:id', (req,res) => {
    const id = req.params.id;
    const dataid = data.find(item => item.id === parseInt(id));
    if(dataid){
        res.status(200).send(dataid);
    }else{
        res.status(404).send({msg: "product not found"});
    }
});

// app.get("/api/products/:id", (req, res) => {
//     const productId = req.params.id;

//     const product = data.products.find(item => item.id === parseInt(productId));
//     if (product) {
//         res.send(product);
//     } else {
//         res.status(404).send({ msg: "products not found." });
//     }

// });


// mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true  }, () => 
//     console.log("connected to DB!")
// );

// app.get('/',(req,res) => {
//     res.send(data);
// });

app.listen(5000);