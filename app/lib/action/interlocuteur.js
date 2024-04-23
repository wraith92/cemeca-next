"use server";

import prisma from "../prisma";
import { auth } from "../../auth";


export const addInterlocuteur = async (formData) => {

   const user = await auth()
    
   // Convert FormData to an object using Array.from and then to an object
   const entries = Array.from(formData.entries());
   const data = Object.fromEntries(entries);
   
   const { nom, prenom, email, tel ,societeId } = data;

   console.log(data);
   
   try {
      // Créer l'interlocuteur ajouter l'id de l'utilisateur connecté
      const interlocuteur = await prisma.interlocuteur.create({
         data: {
         nom,
         prenom,
         email,
         telephone: tel,
         societeId: Number(societeId),
         id_utili: Number(user.user.id),
         },
      });
   
      // Répondre avec succès
      console.log("Interlocuteur créé avec succès!", interlocuteur);
      return { message: "Interlocuteur créé avec succès!", interlocuteur };
   } catch (err) {
      console.error(err);
      return { message: "Une erreur est survenue lors de la création de l'interlocuteur." };
   } finally {
      await prisma.$disconnect();
   }
   }
   
export const deleteInterlocuteur = async (id) => {
   try {
      // Supprimer l'interlocuteur
      await prisma.interlocuteur.delete({
         where: {
         id,
         },
      });
   
      // Répondre avec succès
      console.log("Interlocuteur supprimé avec succès!");
      return { message: "Interlocuteur supprimé avec succès!" };
   } catch (err) {
      console.error(err);
      return { message: "Une erreur est survenue lors de la suppression de l'interlocuteur." };
   } finally {
      await prisma.$disconnect();
   }
   }

export const updateInterlocuteur = async (formData) => {

   const user = await auth()
    
   // Convert FormData to an object using Array.from and then to an object
   const entries = Array.from(formData.entries());
   const data = Object.fromEntries(entries);
   
   const { id, nom, prenom, email, tel, societeId } = data;
   
   try {
      // Mettre à jour l'interlocuteur
      const interlocuteur = await prisma.interlocuteur.update({
         where: {
         id,
         },
         data: {
         id_utili: Number(user.user.id),
         societeId,
         nom,
         prenom,
         email,
         tel,
         },
      });
   
      // Répondre avec succès
      console.log("Interlocuteur mis à jour avec succès!", interlocuteur);
      return { message: "Interlocuteur mis à jour avec succès!", interlocuteur };
   } catch (err) {
      console.error(err);
      return { message: "Une erreur est survenue lors de la mise à jour de l'interlocuteur." };
   } finally {
      await prisma.$disconnect();
   }
   }