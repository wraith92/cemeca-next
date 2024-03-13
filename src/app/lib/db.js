import { Sequelize } from 'sequelize';

// Assurez-vous que DATABASE_URL est défini dans vos variables d'environnement
const sequelize = new Sequelize(
  
  
  {
    host: process.env.DB_HOST,
    database:process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: "mysql",
    dialectModule: require('mysql2'),
    benchmark: true,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données établie avec succès.');
    await sequelize.sync({ force: true });
  } catch (error) {
    console.error('Impossible de se connecter à la base de données:', error);
  }
}
)();
export default sequelize;