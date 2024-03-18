
import { PrismaClient } from '@prisma/client';

export const getUser = async (id) => {
   const prisma = new PrismaClient();
   const user = await prisma.user.findUnique({
      where: {
         id: Number(id),
      },
   });
   await prisma.$disconnect();
   return user;
   }
export const getUsers = async () => {
   const prisma = new PrismaClient();
   const users = await prisma.user.findMany();
   await prisma.$disconnect();
   return users;
   }