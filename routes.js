const routes = require('express').Router();
const { User } = require('./app/models');
User.create({
    name: 'Marcos',
    email: 'marcosvicentesiqueira@gmail.com',
    password_hash: '123'
})
module.exports = routes;
