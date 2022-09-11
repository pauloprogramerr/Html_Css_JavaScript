function arraysTest() {
  // formas de declarar os arrays
  let lista_frutas = Array('Banana', 'Maçã', 'Morango', 'Uva');
  // ou
  lista_frutas1 = [];
  lista_frutas1[1] = 'Banana';
  lista_frutas1[2] = 'Maçã';
  lista_frutas1[3] = 'Morango';
  lista_frutas1[4] = 'Uva';

  // arrays multidimensionais
  let listaDeCoisas = Array();
  listaDeCoisas['frutas'] = Array();
  listaDeCoisas['pessoas'] = Array();

  listaDeCoisas['frutas'][0] = 'Banana';
  listaDeCoisas['frutas'][1] = 'Maçã';
  listaDeCoisas['frutas'][2] = 'Morango';
  listaDeCoisas['frutas'][3] = 'Uva';

  listaDeCoisas['pessoas'][0] = 'João';
  listaDeCoisas['pessoas'][1] = 'Jose';
  listaDeCoisas['pessoas'][2] = 'Maria';

  document.write(listaDeCoisas['frutas'][0]);
  document.write(listaDeCoisas['pessoas'][0]);
}

function calculaArea(largura, comprimento) {
  let area = largura * comprimento;

  return area;
}

// sem retorno
function calculaAreaTerreno(largura, comprimento) {
  let area = largura * comprimento;

  document.write(area);
}

function eventosMouseTeclado() {
  /* Eventos
	. onclick - acionado no clique do mouse
	. ondblclick - adiconado no duplo click do mouse
	. onmousedown - adicionado no clique co mouse (soltando ou não o botão) 
	. onmouseover - adicionado quando o cursor sobrepõe o elemento da página
	. onmouseout - adicionado quando o cursor sai da area de um elemento da página
	. onmouseup - 

 */

  /* Eventos
	. onkeydown - no momento em que a tecla é pressionada (soltando ou não)
	. onkeypress - no momento em que uma tecla é pressionada (soltando-a ou não), porém não captura todas as teclas, como por exemplo alt, ctrl, esc, shift, etc...
	. onkeyup - no momento em que a tecla é liberada.
 */

  /* Eventos
	. onload - quando a página finaliza o carregamento.
	. onresize - quando a página ou frame é redimensionado.
	. onscroll - 
 */

  /* Eventos
	. onfocus - quando o elemento recebe o foco do cursor
	. onblur - quando o elemento perde o foco do cursor
	. onchange - quando e estado do elemento é modificado
 */

  alert('Seja bem vindo!');
}

let funcaoAnonimas = function (nome) {
  document.write('Ola ' + nome + ' , tudo bem?');
};
funcaoAnonimas();

function manipularDatas() {
  let data = new Date();

  document.write(
    data.getDate() + '/' + getMonth() + 1 + '/' + data.getFullYear()
  );
}

console.lo(document.body);

console.lo(document.body.childNodes);

console.lo(document.body.childNodes[1]);

console.lo(document.body.childNodes[1].childNodes[1]);

console.lo(document.body.childNodes[1].childNodes[1].innertext);

// forma mais fácil de encontrar um elemento.
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementById('algum id'));
console.log(document.getElementsByClassName('algum classe'));

// encontrando elemento por query
console.log(document.querySelector('#algum-is'));

// alterando o Dom
let span = document.createElement('span');
let el = document.querySelector('h1');
let pai = el.parentNode;
pai.appendChild(span);

let span1 = document.createElement('span');
let el1 = document.querySelector('h1');
let pai1 = el1.parentNode;
pai.insertBefore(span1, el1);

// Alterando a Dom com replaceChild

let newHeading = document.createElement('h1');
newHeading.textContent = 'Novo texto';
let oldHeading = document.getElementById('old-heading');
let pai3 = oldHeading.parentNode;
pai3.replaceChild(newHeading, oldHeading);

let texto = document.createTextNode('Este é o texto');
let p1 = document.getElementById('p-sem-texto');

p1.appendChild(texto);

// Modificando e lendo atributos
let url = document.getElementById('link');
console.log(url.getAttribute('href'));

url.setAttribute('href', 'www.horadecodar.com.br');
console.log(url.getAttribute('href'));

// verificando altura e largura do elemento
let elTeste = document.getElementById('titulo');

console.log(elTeste.offsetWidth);
console.log(elTeste.offsetHeight);
console.log(elTeste.clientHeight);

// posição do elemento na tela
console.log(elTeste.getBoundingClientRect());

// Estilizando com js
let p = document.getElementById('algum-p');
console.log(p.style);
p.style.color = 'red';

// Seleciona varios elementos com query

let todosPs = document.querySelectorAll('p');
console.log(todosPs);
console.log(count(todosPs));

// Como criar evento
let btn1 = document.querySelector('#btn');

btn1.addEventListener('click', () => {
  console.log('clicou');
});

// removendo eventos
let btn = document.querySelector('#btn');
function msg() {
  console.log('Clicou');
}
btn.addEventListener('clicou', msg);

setTimeout(function () {
  btn.removeEventListener('click', msg);
}, 3000);

// Ações default
let a = document.querySelector('a');

a.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('clicou mas não mudou de link');
});

// Eventos de tecla

window.addEventListener('keydown', function (e) {
  if (e.key == 'v') {
    console.log('você apertoua letra v');
  }
});

window.addEventListener('keyup', function (e) {
  if (e.key == 'Enter') {
    console.log('Soltou o enter');
  }
});

// Eventos mouse
btn = document.querySelector('#btn1');

btn.addEventListener('mousedown', function () {
  console.log('Apertou o botao');
});

btn.addEventListener('mouseup', function () {
  console.log('Soltou o botao');
});

btn2 = document.querySelector('#btn2');
btn2.addEventListener('dbclick', function () {
  console.log('clicou duas vezes');
});

btn2.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  console.log('Botão direito');
});

// movimento do mouse
window.addEventListener('mousemove', function (e) {
  console.log(e.x);
  console.log(e.y);
});

// Eventos por scroll
window.addEventListener('scroll', function (e) {
  if (window.pageYOffset > 100) {
    console.log('Chegou na posição');
  }
});

//Evento por foco

let input = document.querySelector('input');

input.addEventListener('focus', function () {
  console.log('foco no input');
});

input.addEventListener('blur', function () {
  console.log('perdeu o foco');
});

// Evento de carregamento
window.addEventListener('beforeunload', function (e) {
  event.returnValue = null;
});

// debounce
window.addEventListener('mousemove', function () {
  clearTimeout(timeout);
  timeout = setTimeout(() => console.log('Debounce!'), 500);
});
