import Database from './queries';

console.log('create table', process.env.NODE_ENV);

const newTables = Database.createTables();

export default newTables;
