var user = require('./UserActions');
var activity = require('./ActivityActions');
var actions = {};
Object.assign(actions, user, activity);
module.exports = actions;