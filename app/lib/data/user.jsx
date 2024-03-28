
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
      try {
          let users = await prisma.user.findMany({
              include: {
                  roles: true // Inclure les rôles associés à chaque utilisateur
              }
          });
  
          // Modifier chaque utilisateur pour inclure une chaîne des noms de rôles
          users = users.map(user => ({
              ...user,
              roleNames: user.roles.map(role => role.name).join(', ') // Ajouter la propriété roleNames
          }));
  
          console.log('Users fetched successfully:', users);
  
          return users;
      } catch (error) {
          console.error('Error fetching users:', error);
          throw error;
      } finally {
          await prisma.$disconnect();
      }
  }
  