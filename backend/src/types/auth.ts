import type { Role } from "../generated/prisma/enums.js";

export interface AuthPayload {
    sub: string;
    role: Role;
    iat: number;
    exp: number;
}