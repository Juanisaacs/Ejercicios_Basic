let popularToys = [];
let toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
for (let toy of toys) { /*for of  ( singular of plural*/
    if (toy.sellCount > 15) { /*busca numero superior de 15 de toyn en sellCount */
      popularToys.push(toy); /*añade*/
    }
  }
  
  console.log(popularToys);
  //Action woman , El gato felix