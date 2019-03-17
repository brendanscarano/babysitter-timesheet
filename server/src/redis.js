const Redis = require("ioredis");
const { NODE_ENV, REDIS_URL } = process.env;

const redis =
  NODE_ENV === "production"
    ? new Redis(`redis://:@${REDIS_URL}:6379/1`)
    : new Redis({
      port: 6379,
      host: "127.0.0.1",
      db: 0
    });

module.exports = { redis };
