// components/recent-societe.jsx
"use client"
import { DataTable } from "@/components/ui/custom/data-table";
import { useEffect, useState } from "react";


const RecentSociete = ({ updateTrigger }) => {
   const [societes, setSocietes] = useState([]);
 
   useEffect(() => {
      const fetchSocietes = async () => {
        try {
          const response = await fetch('/api/societes');
          const data = await response.json();
  
          // Traitement des données pour ajouter une nouvelle clé "interlocuteurNomComplet"
          const newData = data.map(societe => {
            const interlocuteursNomComplet = societe.interlocuteurs.map(interlocuteur => `${interlocuteur.nom}`).join(', ');
            return {
              ...societe,
              interlocuteurNomComplet: interlocuteursNomComplet
            };
          });
  
          setSocietes(newData);
        } catch (error) {
          console.error('Erreur lors de la récupération des sociétés :', error);
        }
      };
      fetchSocietes();
    }, [updateTrigger]);
 
   const columns = [
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
     {
      header: "Interlocuteur",
      accessorKey: "interlocuteurNomComplet",
    }
    
    
    
    
   ];
 
   return <DataTable data={societes} columns={columns} />;
 };
 
 export default RecentSociete;