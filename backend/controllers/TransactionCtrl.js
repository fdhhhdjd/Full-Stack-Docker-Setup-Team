const Money = require("../models/Money");
const REDIS = require("../configs/Redis");
const TransactionCtrl = {
  UserTransaction: async (req, res, next) => {
    try {
      const { userId, amount } = req.body;
      REDIS.get("product");
      const rs = await Money.create({ userId, amount });
      res.status(200).json({
        status: 200,
        msg: "success",
        data: rs,
      });
    } catch (error) {
      console.log(error);
      res.status(503).json({
        status: 503,
        msg: "error",
        error,
      });
    }
  },
};
module.exports = TransactionCtrl;
