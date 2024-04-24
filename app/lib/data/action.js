import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAction() {
   const actions = await prisma.action.findMany();
   return actions;
}

export const columns = [
   {
      header: "Date de l'action",
      accessorKey: "date_action",
   },
   {
      header: "Description",
      accessorKey: "description",
   },
   {
      header: "Nom de l'interlocuteur",
      accessorKey: "nom_interlocuteur",
   },
   {
      header: "Type d'action",
      accessorKey: "type_action",
   },
   {
      header: "Nom de la société",
      accessorKey: "nom_societe",
   },
   {
      header: "Date du RDV",
      accessorKey: "date_rdv",
   },
   {
      header: "Validation",
      accessorKey: "validation",
   },
   {
      header: "Besoin",
      accessorKey: "besoin",
   },
   {
      header: "Utilisateur",
      accessorKey: "id_utili",
   }
];
