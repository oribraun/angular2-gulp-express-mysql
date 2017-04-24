/**
 * Created by ori on 4/13/2017.
 */

var usersModel = require('../mysql/models/usersModel.js');
exports.getAllUsers = function(req, res) {
    usersModel.createUsersTable();
    usersModel.getAllUsers(function(data) {
        res.json({ data: data });
    })
}
