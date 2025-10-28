import { PrismaClient } from '../generated/prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
export default prisma