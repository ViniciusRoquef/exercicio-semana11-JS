// Importa os arquivos através da tag "from" nomeando-os após o import, podendo ser chamado por todo o algoritmo
import itens from './model/dataset.js';
import foodsModel from './model/foods.js';

//Carrega os itens de foodsModel
foodsModel.load(itens);
// Declaração da variável foods e atribuindo a ela os elementos carregados de foofsModel
let foods = foodsModel.readAll();

// Declaração da função initFoodsCard
function initFoodsCard () {
  //Laço de repetição for pegando a variável de item
  for (let item of foods) {
    //declaração da constante view atribuindo a ela o item da função createFoodCardItem
    const view = createFoodCardItem(item);
    // Declaração da variável itensCardapio e atribuindo a ela tudo que for colocado na tag de id "itens-cardapio" pelo método getElementById
    let itensCardapio = document.getElementById("itens-cardapio");
    itensCardapio.insertAdjacentHTML('beforeend', view);
  }
}
// Declaração da função createFoodCardItem com item como parâmetro principal
function createFoodCardItem (item) {
    //declaração da variável constante view passando dentro o corpo de um algorítmo em HTML para passar os principais parâmetros de item a serem mostrados em tela, que são: a imagem na linha 25, o nome do item (linha 28) e a descrição desse item (linha 29)
    const view = `<div class="col-3 card my-1 mx-1 py-1">
                    <img src="${item.imagem}" class="card-img-top" alt="...">
  
                    <div class="card-body">
                      <h5 class="card-title">${item.nome}</h5>
                      <p class="card-text">${item.descricao}</p>
                      <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                  </div>`;
    // retorna a constante view
    return view;
}


// Captar o evento de submissão do formulário e adicionar o item no cartão (card).
// const foodForm = document.querySelector('#foodForm');
const foodForm = document.getElementById("foodForm");
// quando submeter a função onsubmit, ele vai atribuir o event a ela.
foodForm.onsubmit = function (event) {
  // Previnir que o modal fique abrindo e fechando em loop.
  // serve para prevenir o comportamento padrão de um event.
  event.preventDefault();
  // Criação de uma nova comida que é armazenada na variável newFood, que por ser uma variável let, pode ser alterada a qualquer momento no algorítmo, fazendo com que você possa cadastrar diversas vezes
  let newFood = Object.fromEntries(new FormData(foodForm));
  //Criação
  foodsModel.create(newFood);
  //Declaração da constante foodCard, para criação de um novo item
  const foodCard = createFoodCardItem(newFood);
  //A itensCardapio armazena todos os itens do cardápio puxando pelo método getElementById, pelo id "itens-cardapio"
  let itensCardapio = document.getElementById("itens-cardapio");
  //Insere itens no cardápio.
  itensCardapio.insertAdjacentHTML('beforeend', foodCard);
}
//inicializa a função initFoodsCard()
initFoodsCard();