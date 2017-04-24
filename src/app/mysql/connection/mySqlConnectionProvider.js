/**
 * Created by ori on 4/13/2017.
 */

var mysql = require('mysql');
var mySqlConnectionString = require('./mySqlConnectionString.js')
var mysqlConnectionProvider = {
    getSqlConnection : function() {
        var connection = mysql.createConnection(mySqlConnectionString.mySqlConnection.connectionString.development);
        connection.connect(function(error) {
           if(error) {
               throw error;
           }
           console.log("mysql connection success");
        });
        // connection.end();
        return connection;
    },
    closeSqlConnection : function(currentConnection) {
        currentConnection.end(function(error) {
            if(error) {
                throw error;
            }
            console.log('mysql connection closed');
        });
        return currentConnection;
    }
};

module.exports.mysqlConnectionProvider = mysqlConnectionProvider;