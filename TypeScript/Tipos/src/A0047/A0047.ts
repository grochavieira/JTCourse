export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador += 1;
  }

  pop(): T | void {
    if (this.estaVazia()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha<number>();
pilha.push(5);
pilha.push(3);
pilha.push(6);
pilha.push(7);
pilha.push(37);
const elemento1 = pilha.pop();
pilha.mostrarPilha();

while (!pilha.estaVazia()) {
  console.log(pilha.pop());
}

// const pessoa1 = new Pessoa('Guilherme', 30);
// const pessoa2 = new Pessoa(['Guilherme'], 20);
// const pessoa3 = new Pessoa<string, number>('Guilherme', 20);
