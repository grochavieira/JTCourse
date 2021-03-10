interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Guilherme',
  sobrenome: 'Rocha',
  enderecos: ['Av. Brasil'],
  idade: 15,
};

console.log(pessoa);
