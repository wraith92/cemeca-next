"use server";

import prisma from "../prisma";
import { auth } from "../../auth";


export const addAction = async (formData) => {
   
      const user = await auth()
      
      // Convert FormData to an object using Array.from and then to an object
      const entries = Array.from(formData.entries());
      const data = Object.fromEntries(entries);
      
      const { date_action ,description, nom_interlocuteur ,type_action,nom_societe,date_rdv ,validation,besoin } = data;
      
      console.log(data);

      try {
         // Créer l'action ajouter l'id de l'utilisateur connecté
         const action = await prisma.action.create({
            data: {
            date_action,
            description,
            nom_interlocuteur,
            type_action,
            nom_societe,
            date_rdv,
            validation,
            besoin,
            id_utili: Number(user.user.id),
            },
         });
      
         // Répondre avec succès
         console.log("Action créé avec succès!", action);
         return { message: "Action créé avec succès!", action };
      }
      catch (err) {
         console.error(err);
         return { message: "Une erreur est survenue lors de la création de l'action." };
      } finally {
         await prisma.$disconnect();
      }
      }