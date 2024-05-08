const express = require('express');
const router = require('./src/routes/api');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const app = new express;
app.use(cors());
app.use(helmet());
app.use(express.json({limit : '20mb'}));
app.use(express.urlencoded({extended : true}));
const limiter = rateLimit({windowMs: 15 * 60 * 1000, max:3000});
app.use(limiter);
dotenv.config();

// database init
const mongooDbUrl = process.env.MONGOOSE_URL;
const OPTION = {user: process.env.DB_USER, pass: process.env.DB_PASSWORD, autoIndex:true}
mongoose.connect(mongooDbUrl, OPTION).then((res) => {
    console.log('database connected');
}).catch((err) => {
    console.log('database not connected', err);
});

app.use('/api', router);

app.use("*", (req, res) => {
    res.status(404).json({data:"not found"});
});

module.exports = app;