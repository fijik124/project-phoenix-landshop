import { PrismaClient } from "@prisma/client";

// Global is used to prevent multiple instances in development (Next.js HMR)
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;