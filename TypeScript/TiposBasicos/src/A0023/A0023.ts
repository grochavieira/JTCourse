class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem de aluno';
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente';
  }
}

const aluno = new Aluno('Guilherme', 'Rocha', 18, 'pdofkidfjpod');
const cliente = new Aluno('Guilherme', 'Rocha', 18, 'pdofkidfjpod');
