const { Router } = require('express');

const ControllerUser = require('./app/controllers/ControllerUser');
const ControllerCategory = require('./app/controllers/ControllerCategory');
const ControllerPlaybook = require('./app/controllers/ControllerPlaybook');

const ensureAuthMiddleware = require('./app/middleware/ensureAuthMiddleware').ensureAuthMiddleware;

const routes = Router();

const controllerUser = new ControllerUser()
const controllerCategory = new ControllerCategory();
const controllerPlaybook = new ControllerPlaybook();

// Users
routes.post('/users', (request, response) => {
    controllerUser.createUser(request, response)
});

routes.get('/users/:id', (request, response) => {
    controllerUser.getUserById(request, response)
});

routes.post('/login', (request, response) => {
    ensureAuthMiddleware, controllerUser.login(request, response)
});

// Categories
routes.post('/categories', (request, response) => {
    controllerCategory.createCategory(request, response);
});

routes.get('/categories/:id', (request, response) => {
    controllerCategory.getCategoryById(request, response);
});

routes.get('/categories', (request, response) => {
    controllerCategory.getAllCategories(request, response);
});

// Playbooks 
routes.post('/playbooks', (request, response) => {
    controllerPlaybook.createPlaybook(request, response);
});

routes.get('/playbooks/:id', (request, response) => {
    controllerCategory.getCategoryById(request, response);
});

routes.get('/users/:userId/playbooks', (request, response) => {
    controllerPlaybook.getPlaybooksByUser(request, response);
});

routes.patch('/playbooks/:id', (request, response) => {
    controllerPlaybook.updatePlaybook(request, response);
});

module.exports = routes;