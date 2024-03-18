import { addUser } from '../app/lib/action/user';

const AddUser = () => {

  return (
    <div className="p-4">
      <form action={addUser} className="form-control w-full max-w-xs">
        {/* Champs de formulaire */}
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Username</span>
          </label>      
          <input
            type="text"
            name="username"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>

        <div className="mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>

        <div className="mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>

    

        <div className="mb-4">
          <label className="label">
            <span className="label-text">Role</span>
          </label>
          <select
            name="roleId"
            className="select select-bordered w-full max-w-xs"
            required
          >
            <option disabled value="">Choose a role</option>
            <option value="1">Admin</option>
            <option value="2">User</option>
            {/* Ajouter d'autres rôles selon les besoins */}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
