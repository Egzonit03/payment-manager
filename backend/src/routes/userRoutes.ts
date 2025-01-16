import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import bcrypt from 'bcrypt';
import prisma from '../prismaClient.js';
import { RegisterRequest, LoginRequest } from './types.js';
import jwt from '@fastify/jwt';
import { error } from 'console';

export default async function userRoutes(fastify: FastifyInstance) {

    fastify.get('/', async(request, reply) => {
        return reply.send({message: 'Welcome to the Payment Manager Platform!'});
    });

    //This is the Registration Route
    fastify.post('/register',
        async(request: FastifyRequest<RegisterRequest>, reply: FastifyReply) => {
            const {username, email, password, confirmPassword} = request.body;

            //Here we define input validations
            if(!username || !email || !password || !confirmPassword) {
                return reply.status(400).send({error: 'All fields are required!'});
            }

            //We check if the passwords match
            if(password !== confirmPassword) {
                return reply.status(400).send({error: 'Passwords do not match!'});
            }

            //We check if the user exists already
            const existingUser = await prisma.user.findUnique({where: {email}});
            if(existingUser) {
                return reply.status(400).send({error: 'Email is already in use!'});
            }

            //We hash the password to make it secure
            const hashedPassword = await bcrypt.hash(password, 10);

            //Then we create a new user in the database
            const newUser = await prisma.user.create({
                data: {username, email, password: hashedPassword},
            });

            //After all the steps have been completed successfully, we send a success respond without exposing the password
            const {password: _, ...userWithoutPassoword} = newUser;
            return reply.status(201).send({succes: true, user: userWithoutPassoword});
        }
    );

    //This is the Login Route
    fastify.post('/login', 
        async(request: FastifyRequest<LoginRequest>, reply: FastifyReply) => {
            const {email, password} = request.body;

            //Here we define input validations
            if(!email || !password) {
                return reply.status(400).send({error: 'Email and password are required!'});
            }

            //Find the user by email
            const user = await prisma.user.findUnique({where: {email}});
            if(!user) {
                return reply.status(401).send({error: 'Invalid email or password'});
            }

            //Check if the password is correct, if it is the same with that one which the user used when Signed Up for the first time
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if(!isPasswordCorrect) {
                return reply.status(401).send({error: 'Invalid email or password'});
            }

            //Generate a JWT token using fastify-jwt, once loged in successfully
            const token = fastify.jwt.sign({id: user.id, email: user.email});

            //Finally we send the token back to the user as a response
            return reply.send({success: true, token});
        }
    );
}