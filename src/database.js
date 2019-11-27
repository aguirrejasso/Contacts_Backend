var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "bvbtzpoqavlbsscfxjx4-mysql.services.clever-cloud.com",
  user: "un7sty5i2d3becy4",
  password: "R0MmvODqpAaOHr026Jjf",
  database: "bvbtzpoqavlbsscfxjx4"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;

