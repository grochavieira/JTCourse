function handleSubmit() {
  const form = document.querySelector(".form");

  function receiveEventForm(event) {
    event.preventDefault();

    const weightInput = document.querySelector("#weight");
    const heightInput = document.querySelector("#height");

    weight = Number(weightInput.value);
    height = Number(heightInput.value);

    if (!weight) {
      setResult("Peso inválido", false);
      return;
    }

    if (!height) {
      setResult("Altura inválida", false);
      return;
    }

    const imc = calculateIMC(weight, height);
    const level = getIMCLevel(imc);
    const message = `Seu IMC é ${imc} => ${level}`;
    setResult(message, true);
  }

  function calculateIMC(weight, height) {
    const imc = weight / (height * height);
    return imc.toFixed(2);
  }

  function getIMCLevel(imc) {
    const level = [
      "Abaixo do peso",
      "Peso normal",
      "Sobrepeso",
      "Obesidade grau 1",
      "Obesidade grau 2",
      "Obesidade grau 3",
    ];

    if (imc >= 39.9) return level[5];
    if (imc >= 34.9) return level[4];
    if (imc >= 29.9) return level[3];
    if (imc >= 24.9) return level[2];
    if (imc >= 18.5) return level[1];
    if (imc < 18.5) return level[0];
  }

  function createParagraph() {
    const p = document.createElement("p");
    return p;
  }

  function setResult(message, isInputValid) {
    const resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = "";
    const p = createParagraph();

    p.innerHTML = message;

    if (isInputValid) {
      p.classList.add("correct-result");
    } else {
      p.classList.add("wrong-result");
    }

    resultDiv.appendChild(p);
  }

  form.addEventListener("submit", receiveEventForm);
}

handleSubmit();
