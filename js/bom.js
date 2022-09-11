// (BOM) Browser Object Model

let janela;

function abrirPopUp() {
  janela = window.open(
    'http://www.google.com',
    'nova_janela',
    'width=200',
    'height=100'
  );
}

function fecharPopUp() {
  janela.close();
}

// Object Screen
let altura = window.screen.availHeight;
let largura = window.screen.availWidth;

document.write(
  '<br />Altura do navegador é' +
    altura +
    ' <br /> Largura do navegador é ' +
    largura
);

// BOM Location
function localGoogle() {
  window.location.href = 'http://www.google.com';
}

// BOM Timing

setTimeout(function () {
  document.write('Teste');
}, 2000);

setInterval(function () {
  document.write('Teste <br />');
}, 2000);

let i = 5;

let x = setInterval(function () {
  document.write(i);
  i--;

  if (i === 0) {
    //window.location.reload();
    clearInterval(x);
  }
}, 1000);
