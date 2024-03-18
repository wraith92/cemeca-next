
"use client";
import CircularProgress from '@mui/material/CircularProgress';
import { useFormStatus } from 'react-dom';

const Submit = () =>{

   const { pending } = useFormStatus();
   return (
     <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit" 
      disabled={pending}>
       {pending ?  <CircularProgress color="inherit" />  : "Submit"}
     </button>
   );
 }

 export default Submit;