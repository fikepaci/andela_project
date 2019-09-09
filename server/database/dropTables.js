import Database from './queries';

console.log('DROP TABLES');

const dropTable = async () => {
  const conn = Database.databaseConnection();
  const result = await conn.query(`
    DROP TABLE IF EXISTS users CASCADE;
    DROP TABLE IF EXISTS sessions CASCADE;
    DROP TABLE IF EXISTS reviews CASCADE;
  `);
  await conn.end();
  return result;
};

dropTable();
