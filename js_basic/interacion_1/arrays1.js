let avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log (avengers[0]);
//hulk
let avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers1 [0] ="IRON-MAN";
console.log(avengers1);
//he cambiado el const por el let y cambiado el nombre a evengers1
let avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers2.length);
// salen 3 =>0, 1,2,3
let rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);
// 5 personajes y summer
let rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters1.pop();
console.log(rickAndMortyCharacters1);
// se elimino a Lapiz lopez
let rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.splice(1,1);
console.log(rickAndMortyCharacters2);
// se elimino a Beth
