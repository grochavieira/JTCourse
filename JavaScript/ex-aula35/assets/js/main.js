const elements = [
  { tag: "p", text: "Frase 1" },
  { tag: "div", text: "Frase 2" },
  { tag: "footer", text: "Frase 3" },
  { tag: "section", text: "Frase 4" },
];

const div = document.querySelector(".container div");

for (let i = 0; i < elements.length; i++) {
  const { tag, text } = elements[i];
  const element = document.createElement(tag);
  element.innerHTML = text;
  div.appendChild(element);
}
