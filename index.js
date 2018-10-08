const express =require('express');
const jsonGraphqlExpress =require ('json-graphql-server');
const datafake = require('./db');

const app = express();
const data = datafake;
app.use('/', jsonGraphqlExpress.default(data));
app.listen(process.env.PORT || 5000);