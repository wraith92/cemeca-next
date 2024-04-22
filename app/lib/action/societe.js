"use server";

import prisma from "../prisma";
import { auth } from "../../auth";






export const addSociete = async (formData) => {
  const user = await auth()
 
  // Convert FormData to an object using Array.from and then to an object
  const entries = Array.from(formData.entries());
  const data = Object.fromEntries(entries);

  const { siret, nom_soc, siren, adresse_local } = data;
  const siretFormatted = siret.replace(/\s/g, ''); 
  const sirenFormatted = siren.replace(/\s/g, '');



  try {
    // Vérifier si la société existe déjà
    let existingSociete = await prisma.societe.findUnique({
      where: {
        siret: siretFormatted,
      },
    });

    if (existingSociete) {
      return { message: "La société existe déjà!" };
    }

    // Créer la société ajouter l'id de l'utilisateur connecté
    const societe = await prisma.societe.create({
      data: {
        id_utili: Number(user.user.id),
        siret: siretFormatted,
        nom_soc,
        siren: sirenFormatted,
        adresse_local,
      },
    });

    // Répondre avec succès
    console.log("Société créée avec succès!", societe);
    return { message: "Société créée avec succès!", societe };
  } catch (err) {
    console.error(err);
    return { message: "Une erreur est survenue lors de la création de la société." };
  } finally {
    await prisma.$disconnect();
  }
};




 
 // Mettre à jour une société
 export const updateSociete = async (id, formData) => {
   try {
     const societe = await prisma.societe.update({
       where: { id: Number(id) },
       data: formData,
     });
     console.log("Société mise à jour avec succès!", societe);
     return { message: "Société mise à jour avec succès!", societe };
   } catch (err) {
     console.error(err);
     return { message: "Une erreur est survenue lors de la mise à jour de la société." };
   } finally {
     await prisma.$disconnect();
   }
 };
 
 // Supprimer une société
 export const deleteSociete = async (id) => {
   try {
     await prisma.societe.delete({
       where: { id: Number(id) },
     });
     console.log("Société supprimée avec succès!");
     return { message: "Société supprimée avec succès!" };
   } catch (err) {
     console.error(err);
     return { message: "Une erreur est survenue lors de la suppression de la société." };
   } finally {
     await prisma.$disconnect();
   }
 };
 