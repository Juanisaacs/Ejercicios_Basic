let duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(parametro) { /* creamos la funcion*/
    let duplicado = [];                  /* se crea un array*/
    for (let i = 0; i < parametro.length; i++) { /* hacemos un for con un  if NOT para que diga lo contrario*/
      if (!duplicado.includes(parametro[i])) {
        duplicado.push(parametro[i]); /* si la encuentra  duplicado lo borra*/
      }
    }
    return console.log(duplicado);
  }
  removeDuplicates(duplicates);
  // se borra pasta 