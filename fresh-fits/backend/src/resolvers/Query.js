const { forwardTo } = require("prisma-binding"),
  Query = {
    items: forwardTo("db")
  };

module.exports = Query;
