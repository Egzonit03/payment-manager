import fastify from 'fastify';
import cors from '@fastify/cors';

const app = fastify();
app.register(cors);

app.get('/', async (request, reply) => {
    reply.send({message: 'Payment Manager Backend is running!'});
});

const start = async () => {
    try {
        await app.listen({ port: 5000});
        console.log('Server is running at http://localhost:5000');
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();