// server/actions/getSocietes.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getSocietes() {
   const societes = await prisma.societe.findMany();
   return societes;
}

export const columns = [
   {
      header: "SIRET",
      accessorKey: "siret",
   },
   {
      header: "Nom de la société",
      accessorKey: "nom_soc",
   },
   {
      header: "SIREN",
      accessorKey: "siren",
   },
   {
      header: "Adresse",
      accessorKey: "adresse_local",
   }
];
