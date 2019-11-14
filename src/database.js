const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'correos'
});

mysqlConnection.connect(function (err){
    if(error){
        console.log(err.message);
        return;
    }else{
        console.log('Database is connected');
    }
})

module.exports = mysqlConnection;

