// Vamos a calcular el promedio de maneras distintas
const quantities = [3, 6, 8, 10, 18];

// Solucion sin metodos de array
function average(arr) {
  let average = 0;

  for (let item of arr) {
    average += item;
  }
  return average / arr.length;
}

console.log(average(quantities));