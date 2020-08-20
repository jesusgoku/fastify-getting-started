import fastify from 'fastify';
import fastifyHelmet from 'fastify-helmet';
import fastifyCors from 'fastify-cors';

import routes from './routes';
import { LOG_ENABLED, LOG_LEVEL } from './config';

const app = fastify({ logger: LOG_ENABLED && { level: LOG_LEVEL } });

app.register(fastifyHelmet);
app.register(fastifyCors);

app.register(routes, { prefix: '/' });

export default app;
