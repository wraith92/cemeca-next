// components/recent-societe.jsx
"use client"
import { DataTable } from "@/components/ui/custom/data-table";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsPencil, BsPlus,BsTrash } from 'react-icons/bs';

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
      cell: (rowData) => {
        // Vérification des interlocuteurs existants
        const interlocuteurs = rowData.row.original.interlocuteurs;
        if (interlocuteurs && interlocuteurs.length > 0) {
          // Si des interlocuteurs existent, afficher le nom et le bouton Modifier
          return (
            <div>
              <span>{rowData.row.original.interlocuteurNomComplet} </span> 
              <Link href={`/interlocuteur/modifier/${interlocuteurs[0].id}`} passHref>
                <Button className="mr-1 border border-blue-500 rounded-md p-2" variant="primary"> <BsPencil /></Button>
              </Link>
            </div>
          );
        } else {
          // Si aucun interlocuteur n'existe, afficher le bouton Ajouter
          return (
            <div>
              <Button  className="mr-1 border border-blue-500 rounded-md p-2" variant="success"><BsPlus /></Button>
            </div>
          );
        }
      }
    },
     // Ajoutez une colonne pour les actions (modifier, supprimer)
     {
      header: "Actions",
      cell: (rowData) => (
        <div>
          {/* Bouton Ajouter */}
          <Link href={`/interlocuteur/modifier/${rowData.row.original.id}`} passHref>
          <button  className="mr-2 border border-green-500 rounded-md p-1"><BsPlus /></button>
         </Link>
          {/* Bouton Modifier */}
          <Link href={`/interlocuteur/modifier/${rowData.row.original.id}`} passHref>
            <button className="mr-2 border border-blue-500 rounded-md p-1"><BsPencil /></button>
          </Link>
          {/* Bouton Supprimer */}
          <Link href={`/interlocuteur/modifier/${rowData.row.original.id}`} passHref>
          <button onClick={() => handleDeleteInterlocuteur(rowData.row.original.id)} className="mr-2 border border-red-500 rounded-md p-1"><BsTrash /></button>
          </Link>
        </div>
      ) 
    }
   ];
 
   return <DataTable data={societes} columns={columns} />;
 };
 
 export default RecentSociete;
