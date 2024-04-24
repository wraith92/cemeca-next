import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAction() {
   const actions = await prisma.action.findMany();
   return actions;
}

//recuprer le nombre d'action si user sinon toutes les actions

export async function getNumberAction(id_utili, role) {
   let actions;
   if (role === 'cemeca') {
      actions = await prisma.action.findMany({
         where: {
            id_utili: id_utili,
         },
      });
   } else {
      actions = await prisma.action.findMany();
   }
   // Retourner le nombre d'actions récupérées
   return actions.length;
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
