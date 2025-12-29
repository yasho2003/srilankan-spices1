import mysql from "mysql2";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "srilankan-spices",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db.getConnection((err, connection) => {
  if (err) {
    console.log("Database connection failed ❌");
    console.log(err);
  } else {
    console.log("MySQL connected via Pool ✅");
    connection.release();
  }
});
