
import AddUser from '../components/AddUser';
import { auth } from './auth';

const Home = async () => {

  

  const { user } = await auth();
  const role = user.roles[0];
 




  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <AddUser />
    <h1 className="text-4xl font-bold text-center">{role}</h1>

    </main>



  );
}

export default Home;
