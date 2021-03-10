// Array<T> - T[]
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

function topUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const conca = concatenaString('a', 'b', 'c');
const upper = topUpperCase('a', 'b', 'c');
console.log(result);
console.log(conca);
console.log(upper);
