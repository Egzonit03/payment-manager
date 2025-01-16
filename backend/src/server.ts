import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const fastify = Fastify({ logger: true});

fastify.register(cors, {
    origin: '*',
});

fastify.register(jwt, {
    secret: process.env.JWT_SECRET || 'your-secret-key',
});

fastify.register(userRoutes, {prefix: '/api/users'});

const startServer = async () => {
    try {
        const port = parseInt(process.env.PORT || '3000', 10);
        const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';
        await fastify.listen({port, host});
        console.log(`Server is running on http://${host}:${port}`);
    }
    catch(err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

startServer();