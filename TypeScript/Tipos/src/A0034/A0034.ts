interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

interface TipoPessoa extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  public nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa = {
  nome: 'Gui',
  sobrenome: 'Rocha',
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
};

const pessoa = new Pessoa('Guilherme', 'Rocha');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto);
