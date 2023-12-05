const { Router } = require('express');

const ControllerUser = require('./app/controllers/ControllerUser');

const ensureAuthMiddleware = require('./app/middleware/ensureAuthMiddleware').ensureAuthMiddleware;

const routes = Router();

const controllerUser = new ControllerUser()

routes.post('/users', (request, response) => {
    controllerUser.createUser(request, response)
});

routes.get('/users/:id', (request, response) => {
    controllerUser.getUserById(request, response)
});

routes.post('/login', (request, response) => {
  ensureAuthMiddleware, controllerUser.login(request, response)
});

module.exports = routes;