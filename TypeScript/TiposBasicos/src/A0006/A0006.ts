// Tuple
const dadosCliente: readonly [number, string] = [1, 'Guilherme'];
const dadosCliente2: [number, string, string] = [1, 'Guilherme', 'Rocha'];
const dadosCliente3: [number, string, string?] = [1, 'Guilherme'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Guilherme'];

// dadosCliente[0] = 55;
// dadosCliente[1] = 'Daniel';
// dadosCliente.pop();

// readonly
// const array1: readonly string[] = ["Guilherme", "Rocha"];
// const array2: ReadonlyArray<string> = ["Guilherme", "Rocha"];

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
