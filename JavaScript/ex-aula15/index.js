const numero = Number(prompt("Digite um número qualquer"));
const tagNumero = document.getElementById("texto-numero");
tagNumero.innerHTML = `${numero}`;

const tagDiv = document.getElementById("texto");
tagDiv.innerHTML += `<p> Raiz Quadrada: ${Math.sqrt(numero)}</p>`;
tagDiv.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
tagDiv.innerHTML += `<p> É NaN: ${Number.isNaN(numero)} </p>`;
tagDiv.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)}</p>`;
tagDiv.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numero)}</p>`;
tagDiv.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}</p>`;
