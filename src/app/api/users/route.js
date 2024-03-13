import User from '../../lib/models/users';

export async function GET(req, res) {
  const users = await User.findAll();
  res.json(users);
}
