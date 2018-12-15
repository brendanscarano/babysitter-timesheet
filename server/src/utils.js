const { verify } = require('jsonwebtoken')
const { Redis } = require("ioredis");
const { userSessionIdPrefix, redisSessionPrefix } = require("./constants");

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

function getUserId(context) {
  const { userId } = context.session;
  if(userId) {
    return userId;
  }
}

const removeAllUsersSessions = async (userId, redis) => {
  const sessionIds = await redis.lrange(
    `${userSessionIdPrefix}${userId}`,
    0,
    -1
  );

  const promises = [];
  
  for (let i = 0; i < sessionIds.length; i += 1) {
    promises.push(redis.del(`${redisSessionPrefix}${sessionIds[i]}`));
  }
  await Promise.all(promises);
};


module.exports = {
  getUserId,
  removeAllUsersSessions
}
