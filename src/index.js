const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require ('./routes');
const app = express();



mongoose.connect('mongodb+srv://jotapas:9i8uZ.w6V_f.K#d@cluster0.micot.mongodb.net/myForm?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useCreateIndex: true
});

app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('3000', () => {
    console.log('servidor rodando na porta 3000');
});