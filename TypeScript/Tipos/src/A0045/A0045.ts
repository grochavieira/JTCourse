interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 12,
  sobrenome: 15,
  idade: 30,
};

console.log(aluno, aluno2);
