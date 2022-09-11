// recupera altura e largura
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 20;

let criaMoscaTempo = 1500;

let nivel = window.location.search;
nivel = nivel.replace('?', '');

if (nivel === 'normal') {
  // 1500
  criaMoscaTempo = 1500;
} else if (nivel === 'dificil') {
  // 1000
  criaMoscaTempo = 1000;
} else if (nivel === 'chucknorris') {
  // 750
  criaMoscaTempo = 750;
}

// tornar o palco dinâmico
function ajustarTamanhoPalco() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

ajustarTamanhoPalco();

let cronometro = setInterval(function () {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criarMosca);
    window.location.href = 'vitoria.html';
  } else {
    document.getElementById('cronometro').innerHTML = tempo;
  }
}, 1000);

function posicaoRandomica() {
  // remover a mosca caso exista
  if (document.getElementById('mosca')) {
    document.getElementById('mosca').remove();

    // Mudando a lógica

    if (vidas > 5) {
      window.location.href = 'fim_de_jogo.html';
    } else {
      document.getElementById('v' + vidas).src = '../img/coracao_vazio.png';
      vidas++;
    }
  }

  let positionX = Math.floor(Math.random() * largura) - 90;
  let positionY = Math.floor(Math.random() * altura) - 90;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  // criar elemento html

  let mosca = document.createElement('img');
  mosca.src = '../img/mosca.png';
  mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
  mosca.style.left = positionX + 'px';
  mosca.style.top = positionY + 'px';
  mosca.style.position = 'absolute';
  mosca.id = 'mosca';

  mosca.onclick = function () {
    // remover elemento
    this.remove();
  };

  document.body.appendChild(mosca);
}

// tamando da mosca
function tamanhoAleatorio() {
  let classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return 'mosca1';
    case 1:
      return 'mosca2';
    case 2:
      return 'mosca3';
  }
}

// Mudando o lado da mosca
function ladoAleatorio() {
  let classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return 'ladoA';
    case 1:
      return 'ladoB';
  }
}

function iniciarJogo() {
  let nivel = document.getElementById('nivel').value;

  if (nivel === '') {
    alert('Selecione um nível para iniciar o jogo');
    return false;
  }
  window.location.href = 'mata-mosquito.html';
}
