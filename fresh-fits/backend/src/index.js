require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const db = require("./db"),
  server = createServer();

/*
 * TODO: USE EXPRESS MIDDLEWARE TO HANDLE COOKIES (JWT)
 * TODO:  USE EXPRESS MIDDLEWARE TO POPULATE CURRENT USER.
 */

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(
      `Server kicking new flavor in your ear at http:/localhost:${deets.port}`
    );
  }
);
