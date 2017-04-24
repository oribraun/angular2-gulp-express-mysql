/**
 * Created by ori on 4/13/2017.
 */

var mySqlConnectionString = {
    connectionString : {
        development : {
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'angular2'
        },
        test : {
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'angular2'
        },
        production : {
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'angular2'
        }
    }
};

exports.mySqlConnection = mySqlConnectionString;
