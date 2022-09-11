function calcular(tipo, valor) {
  if (tipo === 'acao') {
    if (valor === 'C') {
      // limpar o visor de resultado
      document.getElementById('resultado').valor = '';
    }
    if (
      valor === '+' ||
      valor === '-' ||
      valor === '*' ||
      valor === '/' ||
      valor === '.'
    ) {
      document.getElementById('resultado').value += valor;
    }
    if (valor === '=') {
      let valor_campo = eval(document.getElementById('resultado').value);
      document.getElementById('resultado').value = valor_campo;
    }
  } else if (tipo === 'valor') {
    document.getElementById('resultado').value += valor;
  }
}
