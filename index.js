const express =require('express');
const jsonGraphqlExpress =require ('json-graphql-server');
const datafake = require('./db');

const PORT = 8000;
const app = express();
const data = datafake;
app.use('/', jsonGraphqlExpress.default(data));
app.listen(PORT);