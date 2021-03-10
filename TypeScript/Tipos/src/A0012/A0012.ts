let x = 10;

const y = 10;
let a = 100 as const;

const pessoa = {
  nome: 'Guilherme' as const,
  sobrenome: 'Miranda' as const,
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));
