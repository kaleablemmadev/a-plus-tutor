import jwt from 'jsonwebtoken';
import { signAccessToken } from './jwt.js';

const token = signAccessToken({
    sub: 'test-user-123',
    role: 'TUTOR'
});

console.log('Token created:', Boolean(token));

try {
    jwt.verify(token + 'tampered', process.env.JWT_SECRET!);
    console.log('ERROR: Tampered token was accepted!');
} catch {
    console.log('Tampered token rejected.');
}