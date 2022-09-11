//Formas que consequimos manipular o índice

let lista_frutas = Array();
let lista_frutas2 = [];

lista_frutas[1] = 'Banana';
lista_frutas[2] = 'Maçã';
lista_frutas[3] = 'Morango';
lista_frutas[4] = 'Uva';

// Forma que não podemos manipular o índice

let lista_frutas3 = Array('Banana', 'Maçã', 'Morango', 'Uva');
let lista_frutas4 = ['Banana', 'Maçã', 'Morango', 'Uva'];

// Array multidimensional
let lista_coisas = Array();

lista_coisas['frutas'] = Array();

lista_coisas['frutas'][0] = 'Banana';
lista_coisas['frutas'][1] = 'Maçã';
lista_coisas['frutas'][2] = 'Morango';
lista_coisas['frutas'][3] = 'Uva';

let lista_coisas1 = Array();
lista_coisas1['frutas'] = Array('Banana', 'Maçã', 'Morango', 'Uva');

lista_coisas1['pessoas'] = [];
lista_coisas1['pessoas']['a'] = 'João';
lista_coisas1['pessoas']['b'] = 'Jose';
lista_coisas1['pessoas']['c'] = 'Maria';

// Incluir elementos no final de um array
lista_frutas.push('Goiaba');

// Incluir elementos no início de um array
lista_frutas.unshift('Laranja');

// Excluir elementos no final do array
lista_frutas.pop();

// Excluir elementos no início do array
lista_frutas.shift();

// pesquisar elementos dentro do array
lista_frutas.indexOf('Morango');

// Ordenação alphanumeric de elementos
lista_frutas.sort();

// Ordenação numeric de elementos
let lista_numeros = Array();

lista_numeros[0] = 12;
lista_numeros[1] = 40;
lista_numeros[2] = 3;
lista_numeros[3] = 7;
lista_numeros[4] = 19;
lista_numeros[5] = 1;

lista_numeros.sort(ordenarNumeros);

function ordenarNumeros(a, b) {
  return a - b;
}
