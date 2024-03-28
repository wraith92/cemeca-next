import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

import { Input } from "@/components/ui/input"
import { addUser } from '../../lib/action/user';
import Submit from '../../../components/Loading';
import { RecentUsers } from '../../components/recent-users';


const AddUser = () => {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight my-4">Dashboard </h2>
      <div className="flex-1 space-y-4">
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-7">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Add User</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={addUser} className="form-control">
                {/* Champs de formulaire */}
                <div className="mb-4">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <Input
                    type="text"
                    name="username"
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
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <Input
                    type="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="label">
                    <span className="label-text">Role</span>
                  </label>
                  <select
                    name="roleId"
                    className="select select-bordered"
                    required
                  >
                    <option disabled value="">Choose a role</option>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                    {/* Ajouter d'autres rôles selon les besoins */}
                  </select>
                </div>
                <div className='flex justify-center'>
                  <Submit title="Add" />
                </div>

              </form>
            </CardContent>
          </Card>
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Recent Users</CardTitle>
              <CardDescription>
                Liste des commerciaux
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentUsers />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AddUser;
