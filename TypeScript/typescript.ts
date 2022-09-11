class Pessoa {
  nome: string;
  constructor(pessoa: string) {
    this.nome = pessoa;
  }

  exibirNome() {
    return `Ola meu nome é ${this.nome}`;
  }
}

let objPessoa = new Pessoa('Pauladas');
console.log(objPessoa.exibirNome());

/* tipos de dados 

  - Number - Boolean - String
  - Array - tuple - Enum
  - Any - Void - Null
  - Undefined - Never - Object
*/

//JS ESS

var numero = 12;
var valor = true;
var texto = 'Pauladas';
var array = [2, 3, 'pauladas', 5, true, 7];
var nomeUndefined;

// TypeScript, o tipo tem que está explícito

let num: number = 12;
let val: boolean = false;
let text: string = 'Pauladas';
let semTipoDefinido: any = 23; // Any sem um tipo que seja definido
semTipoDefinido = true; // aceita qualquer valor ou tipo de dado
semTipoDefinido = 'Pauladas';

let array2: number[] = [33, 4, 5, 6];
let array3: Array<string> = ['a', 'b', 'c', 'd'];
let array4: any[] = ['pauladas', 5, true, 7];
let nomeUndefined2: undefined;
let nomeNull: null = null;
