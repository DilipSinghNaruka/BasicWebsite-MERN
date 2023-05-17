const mongoose = require("mongoose");
const db = process.env.DATABASE;

mongoose
  .connect(db)
  .then(() => {
    console.log(`db is connected`);
  })
  .catch(() => {
    `db is not connected`;
  });
