// ----> Exercícios 1 <---- //

function xRunning() {
  let xRun = ["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
  for (let i = 0; i < xRun.length; i++) {
    if (xRun[i] == "-") {
      xRun[i] = "x";
      xRun[i - 1] = "-";
    }
    console.log(xRun);
  }
}

// ----> Exercício 2 <---- //

function vowelsCounter(lista) {
  let numVogal = 0;
  let array = [];
  for (let i = 0; i < lista.length; i++) {
    numVogal = 0;
    for (let j = 0; j < lista[i].length; j++) {
      if (
        lista[i][j] === "a" ||
        lista[i][j] === "e" ||
        lista[i][j] === "i" ||
        lista[i][j] === "o" ||
        lista[i][j] === "u"
      ) {
        numVogal++;
      }
    }
    array.push(numVogal);
  }
  return array;
}

// ----> Exercício 3 <---- //

function stringTripletGroup(string) {
  let letra = "";
  let array = [];
  let cont = 0;
  for (let i = 0; i < string.length; i++) {
    if (cont < 3) {
      letra += string[i];
      cont++;
    } else if (cont == 3) {
      array.push(letra);
      cont = 0;
      letra = "";
      letra += string[i];
      cont++;
    } 
    if (i == string.length-1) {
      array.push (letra + " ");
    }
  }
  console.log(array);
}

// ----> Exercício 4 <---- //

function dominantPet(pet) {
  let cat = 0;
  let dog = 0;
  for (let i = 0; i < pet.length; i++) {
    if (pet[i].toLowerCase() === "cat") {
      cat++;
    } else {
      dog++;
    }
  }
  if (cat > dog) {
    return "CAT!";
  } else if (cat < dog) {
    return "DOG!";
  } else {
    return "DRAW!";
  }
}

// ----> Exercício 5 <---- //

function divisibleList(lista, numero) {
  let num = 0;
  let array = [];
  for (let i = 0; i < lista.length; i++) {
    num = 0;
    if (lista[i] % numero == 0) {
      num += lista[i];
      array.push(num);
    }
  }
  return array;
}

// ----> Exercício 6 <---- //

function trustMeOrNot(bool, numero) {
  let array = [];
  for (let i = 0; i < numero; i++) {
    array.push(bool);
  }
  return array;
}

// ----> Exercício 7 <---- //

function changeLampStatus(lista) {
  let array = [];
  for (let i = 0; i < lista.length; i++) {
    array.push(!lista[i]);
  }
  return array;
}

// ----> Exercício 8 <---- //

function gradeAverage(lista) {
  let valor = 0;
  let soma = 0;
  let array = [];
  for (let i = 0; i < lista.length; i++) {
    valor += lista[i];
    soma += valor;
    array.push(valor);
    valor = 0;
  }
  return `A média das notas é: ${(soma / lista.length).toFixed(2)}`;
}

// ----> Exercícios 9 <---- //

function canvasDeliveriesPercentage(lista) {
  let valor = 0;
  let soma = 0;
  let array = [];
  for (let i = 0; i < lista.length; i++) {
    valor += lista[i];
    soma += valor;
    array.push(valor);
    valor = 0;
  }
  return `A porcentagem total de entregas atingida é: ${soma.toFixed(2)}%`;
}

// ----> Exercício 10 <---- //

function shouldIGo(lista) {
  let array = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] == "r" || lista[i] == "R") {
      array.push("Stop!");
    } else if (lista[i] == "y" || lista[i] == "Y") {
      array.push("Attention!");
    } else {
      array.push("Go!");
    }
  }
  return array;
}
