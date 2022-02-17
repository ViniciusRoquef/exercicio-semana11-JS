let numero1 = 1; // parseInt(prompt("Digite o valor 1: "));
    let numero2 = 1; // parseInt(prompt("Digite o valor 2: "));

    let operador = "+"; // prompt("Digite o operador: ");

    let resultado = 0;

    if (operador == "+") {
      resultado = numero1 + numero2;
    } else if (operador == "-") {
      resultado = numero1 - numero2;
    } else if (operador == "*") {
      resultado = numero1 * numero2;
    } else {
      resultado = numero1 / numero2;
    }

    console.log(resultado);

    let estudantes = ["João", "Maria", "José"];

    for (let estudante of estudantes) {
      console.log(estudante);
    }

    for (let indice in estudantes) {
      console.log(indice);
      console.log(estudantes[indice]);
    }

    for (let i = 0; i < estudantes.length; i++) {
      console.log(estudantes[i]);
    }

    // def somar():
    //  comandos...
    var somar = function (valor1, valor2) {
      let resultado = valor1 + valor2;
      return resultado;
    }

    const subtrair = function (valor1, valor2) {
      let resultado = valor1 - valor2;
      return resultado;
    }

    r = somar(2, 3);


    var moleculas = [
      "Hydrogen",
      "Helium",
      "Lithium",
      "Beryl­lium"
    ];

    const tamanho = (lista) => lista.length;

    const quadrado = (numero) => numero ** 2;

    let t = tamanho(moleculas);