import { hashPassword, comparePasswords } from './security.js'

const password = "KaleabDev@625";
const hashedPassword = await hashPassword(password);
const distortedPassword = "KaleabDev@625";

const passwordCorrectHashed = await comparePasswords(password, hashedPassword);
const passwordCorrectDistorted = await comparePasswords(password, distortedPassword);

console.log(`
    Original Password: ${password}
    Distorted (Wrongly Hashed) Password: ${distortedPassword}

    Hashed Password: ${hashedPassword}
    Is the password correctly hashed: ${passwordCorrectHashed ? "Yes" : "No"}
    Does it reject distorted password: ${passwordCorrectDistorted ? "No" : "Yes"}
    `)