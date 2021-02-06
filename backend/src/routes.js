const express = require("express");
const routes = express.Router();

const RegisterController = require('./controllers/RegisterController');


routes.get('/registers', RegisterController.index);
routes.post('/registers', RegisterController.create);
routes.delete('/registers/:id', RegisterController.delete);
routes.put("/registers/:id", RegisterController.updateRegister);

module.exports = routes;