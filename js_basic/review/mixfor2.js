let users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

const volumeInfo = { totalVolume: 0, totalvolumenes: 0 };  /* se crea una constante con 2 objetos*/

for (let user of users) { /*for of para la variabel users*/
  for (let key in user.favoritesSounds) { /* se hace un for of y se crea un bucle key con user.favoritesSaunds*/
    const favoriteSound = user.favoritesSounds[key]; /* se crea una contaste que se igual a user.favoritesSaund con el array key*/
    volumeInfo.totalVolume += favoriteSound.volume; /* por cada vuelta hace que sume*/
    volumeInfo.totalvolumenes++; 
  }
}

console.log(
  "El volumen medio de los sonidos favoritos es de: " +
    volumeInfo.totalVolume / volumeInfo.totalvolumenes
);

//El volumen medio de los sonidos favoritos es de: 57.25