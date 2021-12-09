const character = {name: 'Jack Sparrow', age: 25 };


//cambiar el age 25
let firstName = 'Join ';
let lastName = 'snow';
const age = 24;
console.log("soy "+ firstName + lastName + " tengo " + age + " años y me gustan los lobos");

// soy join snow, tengo 24 años y me gustaclen los lobos.

const toy1 = { name : "Buss myYear", price: 19};
const toy2 = { name: "Rallo mcking", price: 29};
console.log("la suma de ambos juguetes "+ toy1.name + " y " + toy2.name + " es: " + (toy1.price + toy2.price));

    //La suma de ambos juguetes BussmyYear y Rallo mcking es: 48

    let globalBasePrice = 10000;
    const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
    const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
    globalBasePrice = 25000;
    car1.finalPrice = globalBasePrice + car1.basePrice;
    car2.finalPrice = globalBasePrice + car2.basePrice;
    console.log(car1.finalPrice, car2.finalPrice);
    //car1.finalprice= 75000, car2.finalprice= 95000