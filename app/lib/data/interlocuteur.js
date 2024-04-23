import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getInterlocuteurs() {
   const interlocuteurs = await prisma.interlocuteur.findMany();
   return interlocuteurs;
}

export const columns = [
   {
      header: "Nom",
      accessorKey: "nom",
   },
   {
      header: "Prénom",
      accessorKey: "prenom",
   },
   {
      header: "Email",
      accessorKey: "email",
   },
   {
      header: "Téléphone",
      accessorKey: "tel",
   },
   {
      header: "Société",
      accessorKey: "societeId",
   }
];
