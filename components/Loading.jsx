
"use client";
import CircularProgress from '@mui/material/CircularProgress';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

const Submit = ({title}) =>{

   const { pending } = useFormStatus();
   return (
     <Button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit" 
      variant="outline" 
      size="sm"
      disabled={pending}>
       {pending ?  <CircularProgress color="inherit" />  : title}
     </Button>
   );
 }

 export default Submit;