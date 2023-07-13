import mysql from 'mysql2';

const con = mysql.createConnection({
    host: 'localhost',
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
});

export function connect() {
    con.connect(function (err) {
        console.log("your port : " + process.env.PORT);
        if (err) throw err;
        console.log("Connected!");
    });
}
