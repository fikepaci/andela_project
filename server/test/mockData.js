const newuser = {
  email: 'paci@gmail.com',
  firstname: 'nicolas',
  lastname: 'aimable',
  password: 'fikepaci20',
  address: 'kigali,kicukiro',
  bio: 'i like learning',
  occupation: 'student',
  expertise: '5years',
};

const generalusers = {
  email: 'pacifique@gmail.com',
  firstname: 'brian',
  lastname: 'james',
  password: 'kicukiro2',
  address: 'kigali,kist',
  bio: 'i like knowing new things',
  occupation: 'developer',
  expertise: '2years',
};

const admin = {
  email: 'johdndoe@gmail.com',
};
const signedUser = {
  email: newuser.email,
};
const newUserCredentials = {
  email: generalusers.email,
};

export {
  newuser, admin, generalusers, signedUser, newUserCredentials,
};
