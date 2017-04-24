/**
 * Created by ori on 4/13/2017.
 */
var connectionProvider = require('./../connection/mySqlConnectionProvider.js');
var tableName = 'users';
var ModelClass = require('./Model');
ModelClass.Model.setTable(tableName);
var usersModel = {
    getAllUsers : function(callback) {
        ModelClass.Model.getAll(callback);
    },
    insertUser : function(email, callback) {
        var sqlStatement = "INSERT INTO " + tableName + " (email) VAULES (" + email + ")" ;
        ModelClass.Model.insert(sqlStatement,callback);
    },
    createUsersTable : function() {
        var connection = connectionProvider.mysqlConnectionProvider.getSqlConnection();
        var obj = {
            err : 0 ,
            errMessage : ''
        };
        var sqlStatement = "CREATE TABLE IF NOT EXISTS " + tableName + " (" +
            "`id` int(10) unsigned NOT NULL AUTO_INCREMENT," +
            "`email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL," +
            "PRIMARY KEY (`id`)," +
            "UNIQUE KEY `unique` (`email`)" +
            ") ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"
        if(connection) {
            connection.query(sqlStatement, function(err, result) {
                if (err) {
                    console.log(err);
                    obj.err = 1;
                    obj.errMessage = err;
                } else {
                    if(!result.warningCount) {
                        console.log(result);
                        console.log(tableName + ' Table created')
                    }
                };
            })
        }
        connectionProvider.mysqlConnectionProvider.closeSqlConnection(connection);
    }
};

exports.getAllUsers = usersModel.getAllUsers;
exports.createUsersTable = usersModel.createUsersTable;
