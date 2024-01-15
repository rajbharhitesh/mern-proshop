import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Hinata Hyuga',
    email: 'hinata@hinata.com',
    password: bcrypt.hashSync('hinata123', 10),
    isAdmin: true,
  },
  {
    name: 'Mikasa Ackerman',
    email: 'mikasa@mikasa.com',
    password: bcrypt.hashSync('mikasa123', 10),
  },
  {
    name: 'Mirajane Strauss',
    email: 'mirajane@mirajane.com',
    password: bcrypt.hashSync('mirajane123', 10),
  },
];

export default users;
