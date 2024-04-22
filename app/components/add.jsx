import { addSociete } from '../lib/action/societe';
import {Input} from "../../components/ui/input"
import {Button} from "../../components/ui/button";
import Submit from "../../components/loading";

const AddTodo = ({ formData ,onSubmitSuccess }) => {


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Ensure you create FormData here
  
    const success = await addSociete(formData); // Now passing FormData directly
    if (success) {
      onSubmitSuccess(); // Assuming you have this function passed as prop
    }
  };
  
     
  if (!formData) return null;

  return (
    <form onSubmit={handleSubmit} className="form-control">
      {/* Champs de formulaire remplis avec les données de formData */}
      <div className="mb-4">
        <label className="label">
          <span className="label-text">SIRET</span>
        </label>
        <Input
          type="text"
          name="siret"
          value={formData.siege.siret_formate}
          className="input input-bordered"
          required
        />
      </div>
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Nom de la société</span>
        </label>
        <Input
          type="text"
          name="nom_soc"
          value={formData.nom_entreprise}
          className="input input-bordered"
          required
        />
      </div>
      <div className="mb-4">
        <label className="label">
          <span className="label-text">SIREN</span>
        </label>
        <Input
          type="text"
          name="siren"
          value={formData.siren_formate}
          className="input input-bordered"
          required
        />
      </div>
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Adresse</span>
        </label>
        <Input
          type="text"
          name="adresse_local"
          value={formData.siege.adresse_ligne_1}
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

export default AddTodo;
