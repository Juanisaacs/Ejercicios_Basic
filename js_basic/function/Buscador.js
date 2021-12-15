let nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function name1(parametro , value) {
        for (let i = 0; i < parametro.length; i++) {
          if (parametro[i] === value) {
          return console.log(true, i);
          }
        }
        return console.log(false);
    
  }
  finderName(name1, "isaac");
  // false 