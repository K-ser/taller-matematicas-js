// La moda es el elemento que más veces se repite en una lista, esto puede aplicarse más allá de solo numeros

function claculateModa(list) {
  const countList = {};

  //Contamos cuantas veces hay un elemento en la lista
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (!countList[element]) {
      countList[element] = 1;
    } else {
      countList[element] += 1;
    }
  }

  // Convertimos en objeto que contiene el conteo en un array para ordenarlo y extraer la moda
  let arrayLista = Object.entries(countList).sort((a, b) => b[1] - a[1]);
  const moda = arrayLista[0][0];
  
  return `La moda de nuestra lista es ${moda}`;
}

console.log(claculateModa([1,2,3,2,4,3]))