var idades = [18, 20, 21];

// var pessoas = [{}, {}, {}...]
var pessoas = [
  {
    "nome": "João da Silva",
    "nascimento": "19/08/2021",
    "altura": ".50",
    "email": "js@gmail.com"
  },
  {
    "nome": "Maria da Silva",
    "nascimento": "19/08/2021",
    "altura": ".50",
    "email": "js@gmail.com"
  }
];

for (let elemento of pessoas) {
  console.log(elemento.nome);
}

var carro = {
  "cor": "preto",
  "ano": "2020",
  "marca": "ford",
  "modelo": "ka"
};

console.log(carro.cor);
console.log(carro.ano);
// ano + 1
var resultado = parseInt(carro.ano) + 1;
console.log(resultado);


var erro = {
  "status":"fail",
  "message":"SSL unavailable for this endpoint, order a key at https"
};
console.log(JSON.stringify(erro));


var pessoa = '{"idade": 10}';
pessoa = JSON.parse(pessoa);
console.log(pessoa);