const express = require('express');
const testRoutes = require('./test_routes');
const categoryRouter = require('./category_routes');
const bookRouter = require('./book_routes');

const routes = express.Router();

routes.use(testRoutes);
routes.use(categoryRouter);
routes.use(bookRouter);

module.exports = routes;
