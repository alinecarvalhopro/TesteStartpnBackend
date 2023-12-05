const { Router } = require('express');

const ControllerUser = require('./app/controllers/ControllerUser');
// const ensureAuthMiddleware = require('./app/middleware/ensureAuthMiddleware').ensureAuthMiddleware;

const routes = Router();

const controllerUser = new ControllerUser()

routes.post('/users', (request, response) => {
    controllerUser.createUser(request, response)
});
// routes.post('/users', controllerUser.createUser);

module.exports = routes;

// routes.post('/login', ensureAuthMiddleware, ControllerUser.login);
// routes.get('/users/:userId', ControllerUser.getUserById);