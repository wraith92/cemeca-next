// components/recent-societe.jsx

import { DataTable } from "@/components/ui/custom/data-table";
import { useEffect, useState } from "react";


const RecentSociete = ({ updateTrigger }) => {
  const [societes, setSocietes] = useState([]);

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

   useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data due to updateTrigger change:", updateTrigger);
      const response = await fetch("/api/societes");
      const data = await response.json();
      console.log("Data fetched:", data);
      setSocietes(data);
    };
    fetchData();
  }, [updateTrigger]);
  
  return (
    <div>
      <h1>Recent Societes</h1>
      <DataTable data={societes} columns={columns} />
    </div>
  );
}

export default RecentSociete;
