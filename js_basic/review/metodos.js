
let insectos1 = findArrayIndex(
    ["Caracol", "Mosquito", "Salamandra", "Ajolote"],
    "Ajolote"
  );
  console.log(insectos1);
  
let insectos2 = findArrayIndex(
    ["Caracol", "Mosquito", "Salamandra", "Ajolote"],
    "Mosquito"
  );
  console.log(insectos2);


  function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      let obj = array[i];
      if (obj === text) {
        return i;
      }
    }
  }
  //3,1
