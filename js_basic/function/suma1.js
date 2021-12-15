let numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(parametro) { /* se crea la funcia con sumALL  con un parametro*/
    let sum = 0;
  for (let i = 0; i < parametro.length; i++) { /* se crea un bucle con for que sumara el parametro*/
    sum += parametro[i];
  }
  return console.log(sum);
}

sumAll(numbers);
// sumALL = 151