import { prisma } from './prisma.js';

async function testDatabaseConnection() {
    try {
        await prisma.$connect();
        console.log('Database connection successful!');
    } catch (error) {
        console.error('Database connection failed:', error);
    } finally {
        await prisma.$disconnect();
    }
}

testDatabaseConnection();