/**
 * Created by ori on 4/13/2017.
 */
var connectionProvider = require('./../connection/mySqlConnectionProvider.js');
var tableName = '';
var Model = {
    getAll : function(callback) {
        var connection = connectionProvider.mysqlConnectionProvider.getSqlConnection();
        var obj = {
            err : 0 ,
            errMessage : ''
        };
        var users = [];
        var sqlStatement = "SELECT * FROM " + tableName;
        if(connection) {
            connection.query(sqlStatement, function(err, rows, fields) {
                if (err) {
                    obj.err = 1;
                    obj.errMessage = err;
                } else {
                    rows.forEach(function (row) {
                        users.push(row);
                    })
                }
                obj.users = users;
                callback(obj);
            })
        }
        connectionProvider.mysqlConnectionProvider.closeSqlConnection(connection);
    },
    insert : function(sqlStatement, callback) {
        var connection = connectionProvider.mysqlConnectionProvider.getSqlConnection();
        var obj = {
            err : 0 ,
            errMessage : ''
        };
        if(connection) {
            connection.query(sqlStatement, function(err, rows, fields) {
                if (err) {
                    obj.err = 1;
                    obj.errMessage = err;
                }
                callback(obj);
            })
        }
        connectionProvider.mysqlConnectionProvider.closeSqlConnection(connection);
    },
    update : function(sqlStatement, callback) {
        var connection = connectionProvider.mysqlConnectionProvider.getSqlConnection();
        var obj = {
            err : 0 ,
            errMessage : ''
        };
        if(connection) {
            connection.query(sqlStatement, function(err, rows, fields) {
                if (err) {
                    obj.err = 1;
                    obj.errMessage = err;
                }
                callback(obj);
            })
        }
        connectionProvider.mysqlConnectionProvider.closeSqlConnection(connection);
    },
    delete : function(sqlStatement,callback) {
        var connection = connectionProvider.mysqlConnectionProvider.getSqlConnection();
        var obj = {
            err : 0 ,
            errMessage : ''
        };
        if(connection) {
            connection.query(sqlStatement, function(err, rows, fields) {
                if (err) {
                    obj.err = 1;
                    obj.errMessage = err;
                }
                callback(obj);
            })
        }
        connectionProvider.mysqlConnectionProvider.closeSqlConnection(connection);
    },
    setTable: function(table) {
        tableName = table;
    },
    // create : function() {
    //     var connection = connectionProvider.mysqlConnectionProvider.getSqlConnection();
    //     var obj = {
    //         err : 0 ,
    //         errMessage : ''
    //     };
    //     var sqlStatement = "CREATE TABLE IF NOT EXISTS " + tableName + " (" +
    //         "`id` int(10) unsigned NOT NULL AUTO_INCREMENT," +
    //         "`email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL," +
    //         "PRIMARY KEY (`id`)," +
    //         "UNIQUE KEY `unique` (`email`)" +
    //         ") ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"
    //     if(connection) {
    //         connection.query(sqlStatement, function(err, result) {
    //             if (err) {
    //                 console.log(err);
    //                 obj.err = 1;
    //                 obj.errMessage = err;
    //             } else {
    //                 if(!result.warningCount) {
    //                     console.log(result);
    //                     console.log(tableName + ' Table created')
    //                 }
    //             };
    //         })
    //     }
    //     connectionProvider.mysqlConnectionProvider.closeSqlConnection(connection);
    // }
};

exports.Model = Model;
