"use server";
import { auth } from '../../auth';

export async function getUser() {
   const result = await auth();
   // Vérifiez si result est null avant de déstructurer
   if (!result) {
       return null; // Retourne null si auth() retourne null
   }
   const { user } = result; // Maintenant, cela est sûr car on a vérifié result
   return user;
}