const blogRoute = require("./blogRoute");

module.exports = function(app) {
    app.use('/api/blog', blogRoute);
}