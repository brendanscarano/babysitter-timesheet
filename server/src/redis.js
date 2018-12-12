const Redis = require("ioredis");

const redis =
  process.env.NODE_ENV === "production"
    ? new Redis(process.env.REDIS_URL)
    : new Redis();

module.exports = { redis }