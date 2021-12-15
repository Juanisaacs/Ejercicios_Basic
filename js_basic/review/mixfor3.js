let movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
let movieCategories = [];

for (let movie of movies) { /*for of de la variable movies*/
  for (let category of movie.categories) { /* otro for para buscar en categories*/
    if (!movieCategories.includes(category)) { /* si la encuentra que incluya la variable category*/
      movieCategories.push(category); /* que empuje la cateries la variable category*/
    }
  }
}

console.log(movieCategories);
//comedia, aventura, accion , thriller, animacion