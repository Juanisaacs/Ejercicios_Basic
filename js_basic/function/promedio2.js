let mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

    function averageWord(param) {
        let sum = 0;
        for (let i = 0; i < param.length; i++) {
          if ( typeof param[i] === "string") {
            sum += param[i].length;
          }
        }
        return console.log(sum / param.length);
}
averageWord(mixedElements);

// averageword = 2.77777777777 ( el typeof  lo saque en los resueltos : se que es una variable que hace que no se especique el dato