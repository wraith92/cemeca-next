// components/recent-societe.jsx
"use client"
import { DataTable } from "@/components/ui/custom/data-table";
import { useEffect, useState } from "react";


const RecentAction = ({ updateTrigger }) => {

  const [actions, setActions] = useState([]);

  useEffect(() => {
    const fetchActions = async () => {
      const response = await fetch('/api/action');
      const data = await response.json();
      setActions(data);
    };
    fetchActions();
  }
    , [updateTrigger]);

  const columns = [
    {
      header: "Description",
      accessorKey: "description",
    },
    {
      header: "Société",
      accessorKey: "societe.nom_soc",
    },
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Montant",  
      accessorKey: "montant",
    },
    {
      header: "Type",  
      accessorKey: "type",
    },
    {
      header: "Statut",  
      accessorKey: "statut",
    }
    
  ];

  return (
    <DataTable data={actions} columns={columns} />
  );
}


export default RecentAction;