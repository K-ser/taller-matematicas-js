const lado = 4;

function calcular(mult) {
  let count = 0;

  return{
    perimtro(lado){
      count++;
      return lado * mult;
    },
    area(lado){
      count++;
      return lado * lado;
    },
    operations() {
      return count;
    }
  }
}

const result = calcular(2);
console.log(result.perimtro(lado))
console.log(result.perimtro(5))
result.area(lado);
console.log(result.operations())