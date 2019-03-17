const { GraphQLServer } = require('graphql-yoga');
const session = require('express-session');
const connectRedis = require('connect-redis');
const { prisma } = require('./generated/prisma-client');
const { resolvers } = require('./resolvers');
const { permissions } = require('./permissions');
const { redisSessionPrefix } = require('./constants');
const client = require('./redis').redis;
const Stripe = require('stripe');

const { STRIPE_SECRET, SESSION_SECRET, FRONTEND_HOST } = process.env;
const stripe = new Stripe(STRIPE_SECRET);

const RedisStore = connectRedis(session);

const server = new GraphQLServer({
	typeDefs: 'src/schema.graphql',
	resolvers,
	middlewares: [ permissions ],
	context: ({ request, response }) => {
		return {
			req: request,
			res: response,
			url: request ? request.protocol + '://' + request.get('host') : '',
			session: request ? request.session : undefined,
			prisma,
			stripe,
			redis: client
		};
	}
});

server.express.use(
	session({
		store: new RedisStore({
			client,
			prefix: redisSessionPrefix
		}),
		name: 'qid',
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
		}
	})
);

server.start(
	{
		cors: {
			origin: [ FRONTEND_HOST, /http:\/\/localhost:+?/ ],
			credentials: true
		}
	},
	() => console.log('Server is running on http://localhost:4000')
);
