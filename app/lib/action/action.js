"use server";

import prisma from "../prisma";
import { auth } from "../../auth";


function convertToISODate(dateStr) {
   const [day, month, year] = dateStr.split('/');
   return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
 }
 
 export const addAction = async (formData) => {
   const user = await auth();
 
   // Convert FormData to an object using Array.from and then to an object
   const entries = Array.from(formData.entries());
   const data = Object.fromEntries(entries);
 
   const {
     date,
     description,
     nom_interlocuteur,
     type,
     nom_societe,
     validation,
     besoin,
     montant,
     statut,
     id_soc
   } = data;
 
   console.log(data);
 
   try {
     // Créer l'action ajouter l'id de l'utilisateur connecté
     const action = await prisma.action.create({
       data: {
         date_action: new Date(convertToISODate(date)),
         description,
         nom_interlocuteur,
         type_action: type,
         nom_societe,
         validation,
         besoin,
         montant,
         credit_cop: statut,
         id_soc: Number(id_soc),
         id_utili: Number(user.user.id),
       },
     });
 
     // Répondre avec succès
     console.log("Action créé avec succès!", action);
     return { message: "Action créé avec succès!", action };
   } catch (err) {
     console.error(err);
     return { message: "Une erreur est survenue lors de la création de l'action." };
   } finally {
     await prisma.$disconnect();
   }
 };