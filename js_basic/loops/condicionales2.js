let alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
for (let i = 0; i < alumns.length; i++) {
    let alumn =[]
    alumn = alumns[i];
  
    let approvedCount = 0;
    approvedCount = alumn.T1 ? approvedCount + 1 : approvedCount;
    approvedCount = alumn.T2 ? approvedCount + 1 : approvedCount;
    approvedCount = alumn.T3 ? approvedCount + 1 : approvedCount;
    alumn.isApproved = approvedCount >= 2 ? true : false;
  }
  
  console.log(alumns);

  // No lo he consegui hacer pon el ejemplo pero estar sin hacer lo siento
  //pepe viruela
  //lucia Aranda
  //raquel Benito
