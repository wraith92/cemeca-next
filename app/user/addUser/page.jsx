import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { addUser } from '../../lib/action/user';

const AddUser = () => {
  return (
    <div className="p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Ajouter un utilisateur</CardTitle>
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

            <Button type="submit" variant="outline" size="sm">
              Add User
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddUser;
