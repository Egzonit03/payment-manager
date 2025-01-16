// Import Fastify's JWT plugin for authentication support
import '@fastify/jwt';

// Extend Fastify's JWT types to include a custom user type
declare module '@fastify/jwt' {
    interface FastifyJWT {
        // Here we define the structure of the JWT payload, ensuring 'id' is a number and 'email' is a string
        payload: { id: number; email: string }; 

        /* Here we define the structure of 'user' that will be attached to the Fastify request object,
        enabling us to access user details (like 'id' and 'email') after successful authentication */
        user: { id: number; email: string };
    }
}