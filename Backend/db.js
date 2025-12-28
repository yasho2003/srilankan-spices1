import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: "srilankan-spices"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed ❌");
    console.log(err);   
    return;
  }
  console.log("MySQL connected ✅");
});
