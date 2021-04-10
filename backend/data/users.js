import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jahangir Alam',
    email: 'jahangir.devs@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Saikat Chandra',
    email: 'saikat@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;

