let numbers = [12, 21, 38, 5, 45, 37, 6];
function average(parametro) {
  let promedio = 0;
  for (let i = 0; i < parametro.length; i++) {
       promedio = parametro[i];      
  }
  return console.log(promedio / parametro.length);
}
average(numbers);
// Promedio es : 0.8571428571428571