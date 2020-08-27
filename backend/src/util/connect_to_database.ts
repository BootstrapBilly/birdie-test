const mysql = require("mysql2")//import mysql 

const pool = mysql.createPool({ //create the connection pool to connect to the db

    host: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
    user: "test-read",
    database: "birdietest",
    password: "xnxPp6QfZbCYkY8"
  
  })

export default pool.promise()