import Database from './queries';

const { admin } = process.env;
const newAdmin = JSON.parse(admin);

const createAdmin = async () => {
  const conn = Database.databaseConnection();
  const result = await conn.query(`INSERT into users (email, firstname, lastname, password, address, bio, occupation, expertise, type) VALUES (
      '${newAdmin.email}',
      '${newAdmin.firstname}',
      '${newAdmin.lastname}',
      '${newAdmin.password}',
      '${newAdmin.address}',
      '${newAdmin.bio}',
      '${newAdmin.occupation}',
      '${newAdmin.expertise}',
      '${newAdmin.type}') on conflict (email) do nothing returning *`);
  await conn.end();
  return result;
};

createAdmin();
