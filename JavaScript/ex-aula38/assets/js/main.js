const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const bodyStyles = getComputedStyle(document.body);
const backgroundColorBody = bodyStyles.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "#fff";
}
