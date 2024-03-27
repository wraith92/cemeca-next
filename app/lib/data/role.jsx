import { PrismaClient } from '@prisma/client';
export const getRoles = async () => {
   const prisma = new PrismaClient();
   const roles = await prisma.role.findMany();
   await prisma.$disconnect();
   return roles;
   }
export const getRole = async (id) => {
   const prisma = new PrismaClient();
   const role = await prisma.role.findUnique({
      where: {
         id: Number(id),
      },
   });
   await prisma.$disconnect();
   return role;
   }
