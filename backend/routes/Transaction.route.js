const TransactionCtrl = require("../controllers/TransactionCtrl");
const router = require("express").Router();

router.post("/transaction/user", TransactionCtrl.UserTransaction);

module.exports = router;
