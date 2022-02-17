function createList(quantidadeItens, mensagem) {
  
  let i = 0;
  let ul = document.querySelector("ol");  

  while (i < quantidadeItens) {

    // Criar elemento
    var li = document.createElement('li');
    var texto  = document.createTextNode(mensagem);
    li.appendChild(texto);

    ul.appendChild(li);

    i++;
  }
  // for (let i; i < quantidadeItens; i++){}
}

let qtdItens = parseInt(prompt("Quantos itens serão exibidos?"));
let mensagem = prompt("Qual a mensagem?");

createList(qtdItens, mensagem);