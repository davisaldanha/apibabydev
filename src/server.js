require('dotenv').config({path:'variaveis.env'});

const express = require('express');
const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
const routes = require('./routes');


server.use('/api', routes);
server.use(cors());


server.listen(process.env.PORT, ()=>{
    console.log(`Listening on port http://localhost:${process.env.PORT}`);
});