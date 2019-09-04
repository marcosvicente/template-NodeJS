const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
    email: 'marcosvicentesiqueira@gmail.com',
    name: 'Marcos Vicente',
    password_hash: '123'
});

module.exports = routes;
