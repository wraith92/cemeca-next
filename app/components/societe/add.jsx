import { addSociete } from '../../lib/action/societe';
import {Input} from "../../../components/ui/input"
import {Button} from "../../../components/ui/button";
import Submit from "../../../components/loading";
import jsPDF from 'jspdf';

const Actions = ({ formData, onSubmitSuccess }) => {
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
      generatePDF(formData); // Generate PDF after successful submission
      onSubmitSuccess(); // Call success callback if provided
    }
  };

  const handleSelectChange = (selectedOption) => {
    console.log('Selected Société:', selectedOption);
    setSelectedSociete(selectedOption);
  };

  const generatePDF = (data) => {
    const doc = new jsPDF();
    doc.text('Action Information', 10, 10);
    doc.text(`Description: ${data.get('description')}`, 10, 20);
    doc.text(`Date: ${data.get('date')}`, 10, 30);
    doc.text(`Montant: ${data.get('montant')}`, 10, 40);
    doc.text(`Type: ${data.get('type')}`, 10, 50);
    doc.text(`Statut: ${data.get('statut')}`, 10, 60);
    // Ajouter d'autres champs selon les besoins
    doc.save('action_info.pdf');
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
          defaultValue={formData.description}
          className="input input-bordered"
          required
        />
      </div>
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <Input
          type="date"
          name="date"
          defaultValue={formData.date}
          className="input input-bordered"
          required
        />
      </div>
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Montant</span>
        </label>
        <Input
          type="number"
          name="montant"
          defaultValue={formData.montant}
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
          defaultValue={formData.type}
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
          defaultValue={formData.statut}
          className="input input-bordered"
          required
        />
      </div>

      <div className="flex justify-center">
        <Submit title="Ajouter" />
      </div>
    </form>
  );
};

export default Actions;