const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(parametro) {
    let cont = {};
    for (let i = 0; i < parametro.length; i++) {
      if (parametro[i] in cont) {
        cont[parametro[i]]++;
      } else {
        cont[parametro[i]] = 1;
      }
    }
    return console.log(cont);
  }
  repeatCounter(counterWords);
  //cont: 4, repeat:1, eat:1, sleep: 2, enjoy:2, upgrade:1