// console.log(salarios);

// ***Analisis para una persona***

// Funcion que devuelve a una persona eespecifica dentro del array de salarios o base de registros que tenemos
function encontrarPersona(nombrePersona) {
  return salarios.find(person => person.name === nombrePersona);
}

// Funcion que calcula la mediana de los salarios que ha tenido una persona
function medianaPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  const salarios = trabajos.map(trabajo => trabajo.salario);
  const mediana = PlatziMath.calculateMedian(salarios);

  return mediana;
}

// Funcion que calcula la proyeccion salarial de una persona tomando como base los salarios registrados y el
// la mediana de dichos aumentos 
function proyeccionPersonal(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  const salarios = trabajos.map(trabajo => trabajo.salario);
  const porcentajesCrecimiento = [];

  for (let i = 1; i <salarios.length; i++) {
    const salarioAnterior = salarios[i - 1];
    const salarioActural = salarios[i];
    const crecimientoSalario = salarioActural - salarioAnterior;
    const porcentaje = crecimientoSalario / salarioAnterior;
    porcentajesCrecimiento.push(porcentaje);
  }

  const medianaCrecimiento = PlatziMath.calculateMedian(porcentajesCrecimiento); 
  const ultimoSalario = salarios[salarios.length - 1];
  const aumento = ultimoSalario * medianaCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;

  return nuevoSalario;  
}

// ***Analisis empresarial***

// Esta funcion devuelve un array con todas las personas que han trabajado en una empresa
function filtrarPorEmpresa(nombreEmpresa) {
  const listaPersonasEmpresas = [];

  salarios.forEach(person => {
    person.trabajos.forEach(trabajo => {
      if (trabajo.empresa === nombreEmpresa) {
        if (!listaPersonasEmpresas.some(item => item.name === person.name)) {
          listaPersonasEmpresas.push(person);
        }
      }
    })
  })
  
  return listaPersonasEmpresas;

}

//Este es un objeto que contiene a las empresas junto con los años que ha dado salarios y dichos salarios
const empresas = {};
for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }

    if (!empresas[trabajo.empresa] [trabajo.year]) {
      empresas[trabajo.empresa] [trabajo.year] = [];
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

console.log(empresas)

// Funcion que toma al objeto empresas y verificar si contiene una empresa y un cierto año, de ser asi
// nos devuelve la mediana de salarios del año en cuestion
function medianaEmpresaYear(nombreEmpresa, year) {
  if (!empresas[nombreEmpresa]) {
    return 'Empresa no se encuentra en el registro';
  }
  if (!empresas[nombreEmpresa][year]) {
    return 'La empresa no cuenta con registros del año solicitado';
  }

  return PlatziMath.calculateMedian(empresas[nombreEmpresa][year]);
}

// Funcion que calcula la proyeccion salarial por empresa
function proyeccionEmpresa(nombreEmpresa) {
  let porcentajesCrecimiento = [];

  const empresaYears = Object.keys(empresas[nombreEmpresa]);
  const listaMedianaYears = empresaYears.map((year) => {
    return medianaEmpresaYear(nombreEmpresa, year);
  })

  for (let i = 1; i < listaMedianaYears.length; i++) {
    const salarioAnterior = listaMedianaYears[i - 1];
    const salarioActural = listaMedianaYears[i];
    const crecimientoSalario = salarioActural - salarioAnterior;
    const porcentaje = crecimientoSalario / salarioAnterior;
    porcentajesCrecimiento.push(porcentaje);
  }

  const medianaEmpresa = PlatziMath.calculateMedian(porcentajesCrecimiento);
  const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
  const aumento = ultimaMediana * medianaEmpresa;
  const nuevoMediana = ultimaMediana + aumento;

  return nuevoMediana;
}

// ***Analisis general***

// Funcion que calcula la mediana de salarios general, de todas las personas del registro SALARIOS
function medianaGeneral() {
  const listaMedianaPersonal = salarios.map((persona) => medianaPorPersona(persona.name));
  const mediana = PlatziMath.calculateMedian(listaMedianaPersonal);

  return mediana;
}

// Funcion que calcula la mediana de salarios del top 10% del registro SALARIOS, es decir, el 10% con la 
// mediana más alta
function medianaTop10() {
  const listaMedianaPersonal = salarios.map((persona) => medianaPorPersona(persona.name));
  listaMedianaPersonal.sort((a, b) => b - a);

  const cantidad = Math.floor(listaMedianaPersonal.length * .10);
  const medianaTop10 = [];
  for (let i = 0; i < cantidad; i++) {
    medianaTop10.push(listaMedianaPersonal[i]);
  }

  const medianaTop = PlatziMath.calculateMedian(medianaTop10);
  return medianaTop;
}