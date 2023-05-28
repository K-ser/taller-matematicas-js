//Vamos a calcular la altura de un triangulo isoseles, este triangulo tiene que tener dos lados iguales y la
//base de distinto tamaño. La formula a imprementar es h = raiz cuadrada( a^2 - b^2/4)

function heightTriangleIsoseles(ladoA, ladoB, base) {
  if (ladoA !== ladoB) {
    throw new Error('Este no es un triangulo isoseles');
  } 
  let height = Math.sqrt((ladoA ** 2) - (base ** 2) / 4);

  return Number(height.toFixed(2));
}

console.log(heightTriangleIsoseles(6,6,8));
console.log(heightTriangleIsoseles(12,12,10));
console.log(heightTriangleIsoseles(9,9,8));

// Aqui vamos a calcular la altura de una triangulo escaleno, todos sus lados son distintos, vamos a 
//devolver false en caso de que no se cumplan las condiciones. 
//La formula es h = 2/base raiz(s(s-a)(s-b)(s-c))

function heightTriangleEscaleno(lado1, lado2, lado3) {
  if (lado1 === lado2) {
    return false;
  }

  //Se toma a lado! como la base
  let semiPerimetro = (lado1 + lado2 + lado3) / 2;

  let height = (2 / lado1) * Math.sqrt(semiPerimetro * (semiPerimetro - lado1) * (semiPerimetro - lado2) *
  (semiPerimetro - lado3));

  return Number(height.toFixed(0))
}