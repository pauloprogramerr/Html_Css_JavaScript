/*
    funções e tratamentos de erros (try=tente catch=pegar)
*/

function soma() {
  let resultado = 0;
  for (let i in arguments) {
    resultado += arguments[i];
    //document.write(arguments[i]);
  }
  return resultado;
}

document.write(soma(7, 5, 3.2));

// tratamento de erros try catch

let video = Array();

video[1] = Array();
video[1]['nome'] = 'Fullmetal Alchemist';
video[1]['categoria'] = 'Anime';

function getVideo(video) {
  // Try, Catch and finaly

  try {
    console.log(video[0]['nome']);
  } catch (e) {
    tratartError(e);
    throw new Error('Houve um error, estamos trabalhando nisso agora.');
  } finally {
    console.log('Sempre passa aqui');
  }
}

function tratartError(erro) {
  // registra o erro no servidor
  console.log(erro);
}

getVideo(video);
