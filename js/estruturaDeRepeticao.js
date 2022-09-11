// Estrutura de repetição while

let num = 0;
while (num < 10) {
  document.write(num + '<br />');

  if (num === 5) {
    continue;
  }

  if (num === 9) {
    break;
  }

  num++;
}

// Estrutura de repetição do while

let numero = 11;
do {
  document.write(numero + '<br />');

  if (numero === 5) {
    continue;
  }

  if (numero === 9) {
    break;
  }
} while (numero < 10);

// Estrutura de repetição for

for (let index = 0; index < numero; index++) {
  const element = array[index];
}

for (let i = 10; i < 0; i--) {
  document.write(i + '<br />');
}

// Percorredo arrays numeros

let lista_numeros = Array();

lista_numeros[0] = 12;
lista_numeros[1] = 40;
lista_numeros[2] = 3;
lista_numeros[3] = 7;
lista_numeros[4] = 19;
lista_numeros[5] = 1;

let contador = 0;
while (contador < lista_numeros.length) {
  let qtd = lista_numeros[contador];
  document.write(qtd + '<br />');
  contador++;
}

do {
  let qtd = lista_numeros[contador];
  document.write(qtd + '<br />');
  contador++;
} while (contador < lista_numeros.length);

for (let i = 0; i < lista_numeros.length; i++) {
  const element = lista_numeros[i];
}

// Percorredo arrays de string e vários dados
let lista_frutas = [];

lista_frutas[1] = 'Banana';
lista_frutas[2] = 'Maçã';
lista_frutas[3] = 'Morango';
lista_frutas[4] = 'Uva';

// forEach and for in
for (let s in lista_frutas) {
  document.write(s);
}

// não é brigatório passar para a função todos os parâmetros
lista_frutas.forEach(function (valor, indice, array) {
  // lógica
  document.write('Valor: ' + valor + '<br />'); // mostra somente o valor
  document.write('Índice: ' + indice + '<br />'); // mostra somente o índice
  document.write('Array: ' + array + '<br />'); // mostra todos os elementos do array
});

// Laços encadeados

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    document.write(`{i} x {j} = {(i * j)} <br />`);
  }
}

// Técnica de wraper

let f = function (valor, indice) {
  document.write(valor + ' ' + indice);
};
lista_frutas.forEach(f);
