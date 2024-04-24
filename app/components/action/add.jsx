"use client";
import {addAction} from '../../lib/action/action';
import { getSocietes } from '../../lib/data/societe';
import {Input} from "../../../components/ui/input"
import {Button} from "../../../components/ui/button";
import Submit from "../../../components/loading";
import { useEffect, useState } from 'react';
import CustomAsyncSelect from "../../components/interlocuteur/AsyncSelect";

const Actions = ({formData ,onSubmitSuccess}) => {
   const [selectedSociete, setSelectedSociete] = useState(null); 

   const handleSubmit = async (event) => {
     event.preventDefault();
     const formData = new FormData(event.target);
 
     // Append the selected société ID to formData if it is selected
     if (selectedSociete) {
         formData.append('id_soc', selectedSociete.value);
     }
 
     const success = await addAction(formData); // Pass formData directly, now including selected societeId
     if (success) {
         onSubmitSuccess(); // Call success callback if provided
     }
 };
 
   const handleSelectChange = (selectedOption) => {
     console.log('Selected Société:', selectedOption);
     setSelectedSociete(selectedOption);
    
    
   };
   
  
   
   return (

      <form onSubmit={handleSubmit} className="form-control">

      <label htmlFor="societe">Société:</label>
      <CustomAsyncSelect onChange={handleSelectChange} />
      {/* Champs de formulaire remplis avec les données de formData */}
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <Input
          type="text"
          name="description"
          value={formData.description}
          className="input input-bordered"
          required
        />
      </div>
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <Input
          type="text"
          name="date"
          value={formData.date}
          className="input input-bordered"
          required
        />
      </div>
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Montant</span>
        </label>
        <Input
          type="text"
          name="montant"
          value={formData.montant}
          className="input input-bordered"
          required
        />
      </div>
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Type</span>
        </label>
        <Input
          type="text"
          name="type"
          value={formData.type}
          className="input input-bordered"
          required
        />
      </div>
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Statut</span>
        </label>
        <Input
          type="text"
          name="statut"
          value={formData.statut}
          className="input input-bordered"
          required
        />
      </div>

      <div className="flex justify-center">
         <Submit title="Ajouter" />
      </div>


      </form>
   );
}

export default Actions;
