/**
 * Add all each router and their routes to an app at once
 * @param {object} app - an Express app
 */
const addAllRoutes = (app) => {
    app.use('/users', require('./users'));
};

module.exports = addAllRoutes;
