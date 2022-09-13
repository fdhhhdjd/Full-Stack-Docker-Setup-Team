const dotenv = require("dotenv");
const express = require("express");
const ConnectDB = require("./configs/Mongodb.js");
ConnectDB();
require("./configs/Postgres.js");

dotenv.config({ path: ".env" });
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: ".env" });
}
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  return res.status(200).json({
    status: "200",
    message: "WellCome To Tai Heo ^-^ 123 ",
  });
});

const TransactionCtrlRoute = require("./routes/Transaction.route");
app.use("/api", TransactionCtrlRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server is listening on port:http://localhost:${PORT}`)
);
