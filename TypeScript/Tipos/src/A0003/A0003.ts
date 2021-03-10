function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Guilherme',
  sobrenome: 'Rocha',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Guilherme', 'Rocha', 'Vieira');
pessoa.exibirNome();
