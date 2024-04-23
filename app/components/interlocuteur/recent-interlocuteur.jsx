// components/recent-societe.jsx
"use client"
import { DataTable } from "@/components/ui/custom/data-table";
import { useEffect, useState } from "react";


const RecentInterlocuteur = ({ updateTrigger }) => {

  const [interlocuteurs, setInterlocuteurs] = useState([]);

  useEffect(() => {
    const fetchInterlocuteurs = async () => {
      const response = await fetch('/api/interlocuteur');
      const data = await response.json();
      setInterlocuteurs(data);
    };
    fetchInterlocuteurs();
  }
    , [updateTrigger]);

  const columns = [
    {
      header: "Nom",
      accessorKey: "nom",
    },
    {
      header: "Société",
      accessorKey: "societe.nom_soc",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Téléphone",  
      accessorKey: "telephone",
    }
    
  ];

  return (
    <DataTable data={interlocuteurs} columns={columns} />
  );
}


export default RecentInterlocuteur;
