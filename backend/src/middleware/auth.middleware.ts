import 'dotenv/config';
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Role } from '../generated/prisma/client.js';
import type { AuthPayload } from '../types/auth.js';

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
    throw new Error('JWT_SECRET environment variable is not set.');
}

export const authenticateToken = (
    req: Request, res: Response, next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            code: "UNAUTHORIZED",
            message: "Authentication token is required."
        });
    }

    const token = authHeader.slice(7);

    if (!token) {
        return res.status(401).json({
            code: 'UNAUTHORIZED',
            message: 'Authentication token is required.'
        })
    }

    try {
        const payload = jwt.verify(token, jwtSecret, {
            algorithms: ['HS256']
        });

        if (
            typeof payload === 'string' ||
            typeof payload.sub !== 'string' ||
            typeof payload.iat !== 'number' ||
            typeof payload.exp !== 'number' ||
            !Object.values(Role).includes(payload.role as Role)
        ) {
            return res.status(401).json({
                code: 'UNAUTHORIZED',
                message: 'Invalid authentication token.',
            });
        }

        res.locals.auth = payload as AuthPayload;

        return next();
    } catch {
        return res.status(401).json({
            code: 'UNAUTHORIZED',
            message: 'Invalid or expired authentication token.',
        });
    }
}