import { addInterlocuteur } from '../../lib/action/interlocuteur';
import { getSocietes } from '../../lib/data/societe';
import {Input} from "../../../components/ui/input"
import {Button} from "../../../components/ui/button";
import Submit from "../../../components/loading";
import CustomAsyncSelect from "../../components/interlocuteur/AsyncSelect";
import { useState } from 'react';

const AddInterlocuteur = ({ formData ,onSubmitSuccess }) => {
  const [selectedSociete, setSelectedSociete] = useState(null); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Append the selected société ID to formData if it is selected
    if (selectedSociete) {
        formData.append('societeId', selectedSociete.value);
    }

    const success = await addInterlocuteur(formData); // Pass formData directly, now including selected societeId
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
      {/* Champs de formulaire remplis avec les données de formData */}
      <label htmlFor="societe">Select Société:</label>
      <CustomAsyncSelect onChange={handleSelectChange} />
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Nom</span>
        </label>
        <Input
          type="text"
          name="nom"
          value={formData.nom}
          className="input input-bordered"
          required
        />
      </div>
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Prénom</span>
        </label>
        <Input
          type="text"
          name="prenom"
          value={formData.prenom}
          className="input input-bordered"
          required
        />
      </div>

      <div className="mb-4">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          className="input input-bordered"
          required
        />
      </div>
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Téléphone</span>
        </label>
        <Input
          type="text"
          name="tel"
          value={formData.tel}
          className="input input-bordered"
          required
        />
      </div>
      
      
      

      {/* Ajouter d'autres champs selon les besoins */}
      <div className="flex justify-center">
        <Submit title="Ajouter" />
      </div>
    </form>
  );
};

export default AddInterlocuteur;
