
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import RecentSocietes from '../../components/societe/liste-societe';





//afficher la liste des sociétés


const ListeSociete = () => {
   return (
      <>
        <h2 className="text-3xl font-bold tracking-tight my-4">Société</h2>
         <div className="flex-1 space-y-4">
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-7">
               <Card className="lg:col-span-7">
               <CardHeader>
                  <CardTitle>Sociétés récentes</CardTitle>
               </CardHeader>
               <CardContent>
                  <RecentSocietes/>
               </CardContent>
               </Card>
            </div>
         </div>
      </>
   );
}

export default ListeSociete;
