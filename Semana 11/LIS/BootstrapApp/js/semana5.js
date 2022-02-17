let frase = "Olá, mundo.";
let complemento = "Bem-vindo a minha aplicação em JS."

let resultado = frase + " | " + complemento;
resultado = `${frase} | ${complemento}`;

console.log(resultado); //Olá, mundo. Bem-vindo a minha aplicação em JS.

// Tamanho da lista
let tamanho = frase.length;
console.log(tamanho);

// Exibir da primeira ao última letra da frase em linhas separadas.
let i = 0;
while (i < tamanho) {
  let letra = frase[i];
  console.log(letra);
  i++;
}

// Exibir da última até a primeira letra da frase em linhas separadas.
let j = tamanho - 1;
while (j >= 0) {
  let letra = frase[j];
  console.log(letra);
  j--;
}

// Existe posição da string caso seja encontrada em outras string. Retorna -1 caso não seja encontrada.
let posicao = frase.indexOf("mundo");
console.log(posicao);

if (posicao != -1) {
  console.log("Essa palavra está contida na frase!");
} else {
  console.log("Não está contida em frase!");
}

let recorte = frase.slice(0, 4);
console.log(recorte);

let novafrase = recorte + " Maria!";
console.log(novafrase);

// replace
// split
// trim