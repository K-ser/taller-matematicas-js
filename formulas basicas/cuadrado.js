//Calcular el perimetro y la base de un cuadrado
//Con saber un lado del cuadrado, podemos realizar ambas operaciones, para el perimetro sumamos el lado 
//4 veces y para la base elevamos el lado al cuadrado (lado * lado)

console.group('Square');
const sideSquare = 5;

const perimeterSquare = sideSquare * 4;
const areaSquare = sideSquare * sideSquare;

console.log({
  sideSquare,
  perimeterSquare,
  areaSquare
})

function squareCalculations(lado) {
  return {
    perimeter: lado * 4,
    area: lado * lado,
  }
}
console.log(squareCalculations(sideSquare));
console.groupEnd();

console.group('Triangle');
const sideATriangle = 6;
const sideBTriangle = 6;
const baseTriangle = 4;
const heightTriangle = 5.5;

const perimeterTriangle = sideATriangle + sideBTriangle + baseTriangle;
const areaTriangle = (baseTriangle * heightTriangle) / 2;

console.log({
  sideATriangle,
  sideBTriangle,
  baseTriangle,
  heightTriangle,
  perimeterTriangle,
  areaTriangle,
})

function triangleCalculations(ladoA, LadoB, base, altura) {
  return {
    perimeter: ladoA + LadoB + base,
    area: (base * altura) / 2,
  }
}

console.log(triangleCalculations(sideATriangle, sideBTriangle, baseTriangle, heightTriangle));
console.groupEnd();