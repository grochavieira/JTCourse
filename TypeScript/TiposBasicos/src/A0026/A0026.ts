class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  set cpf(valor: string) {
    this._cpf = valor;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pesso = new Pessoa('Guilherme', 'Rocha', 18, 'pdofkidfjpod');
pesso.cpf = 'sdkgjjhdo';
console.log(pesso.cpf);
