let avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let findLongest =param[0]
  for (let i = 0; i < param.length; i++) {
      if (param [i].length > findLongest.length)
      {
          findLongest = param[i];
      }
  }
  return console.log( findLongestWord);
}
findLongestWord(avengers);