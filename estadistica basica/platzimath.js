const PlatziMath = {};

// funcion que nos dice si una lista es par o no
PlatziMath.isPar = function isPar(list) {
  return !(list.length % 2);
}

PlatziMath.calculateAverage = function calculateAverage(arr) {
  const average = arr.reduce((acc, item) => acc + item, 0);

  return average / arr.length;
};

PlatziMath.calculateMedian = function calculateMedian(listDes) {
  const list = listDes.sort((a, b) => a - b);
  const isListPar = PlatziMath.isPar(list);
    
  if (isListPar) {
    const index = (list.length / 2) - 1;
    return PlatziMath.calculateAverage([list[index], list[index + 1]]);
  } else {
    const index = Math.floor(list.length / 2);
    console.log(list[index]);
    return list[index];
  }
}

PlatziMath.calculateModa = function claculateModa(list) {
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

console.log(PlatziMath);