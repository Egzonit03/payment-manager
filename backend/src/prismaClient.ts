// Import the PrismaClient class from the Prisma library to interact with the database
import { PrismaClient } from "@prisma/client";

// Instantiate PrismaClient to establish a connection to the database
const prisma = new PrismaClient();

// Export the Prisma client instance to be reused throughout the application
export default prisma;