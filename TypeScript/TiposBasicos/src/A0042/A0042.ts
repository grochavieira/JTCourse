type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? '1-Ixi, não existe data.');
console.log(undefined ?? '2-Ixi, não existe data.');
console.log(null ?? '3-Ixi, não existe data.');
console.log(false ?? '3-Ixi, não existe data.');
console.log(0 ?? '4-Ixi, não existe data.');
console.log('' ?? '5-Ixi, não existe data.');
