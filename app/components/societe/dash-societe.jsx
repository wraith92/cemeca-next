import React from 'react';
import { DataTable } from "@/components/ui/custom/data-table";
import { getSocietes } from "../../lib/data/societe";



// Define the columns with specific type information
const columns = [
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
   },
];

export const RecentSociete = async () => {
   const societe = await getSocietes();
   return <DataTable columns={columns} data={societe} />;
}
