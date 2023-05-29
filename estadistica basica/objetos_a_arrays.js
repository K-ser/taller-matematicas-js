// En este desafío debes convertir las llaves y valores de un objeto en propiedades (id y name) de un objeto 
// dentro de un array.

const obj = {
  123: 'Juanito Alcachofa',
  456: 'Juanita Alcaparra',
};

function solution(obj) {
  const array = Object.entries(obj)
  console.log(array);

  const result = [];
  array.forEach(data => {
    result.push({
      id: data[0],
      name: data[1],
    })
  })

  return result;
}

solution(obj);