// En este desafío vas a recibir un array de objetos. Cada objeto representa a un usuario. Debes encontrar al 
// usuario con cierto ID y retornar su nombre. En caso de no existir, debes retornar false.

function solution(users, id) {
  const user = users.find(item => item.id === id);

  if (user) {
    return user.name;
  } else {
    return false;
  }
}