import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
}, {});

export default User;