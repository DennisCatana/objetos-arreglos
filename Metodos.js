'use strict';

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'Alice' }
];

// Buscar un usuario por ID
const userId = 3;
const foundUser = users.find(user => user.id === userId);

console.log(foundUser);