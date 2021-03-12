namespace MeuNamespace {
  const nome = 'Luiz';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('Luiz');
  console.log(pessoa);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Guilherme';
  }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Guilherme');
console.log(pessoaDoNamespace);
