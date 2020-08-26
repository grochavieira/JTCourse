function createCalculator() {
  return {
    display: document.querySelector(".display"),

    initialize() {
      this.buttonsClick();
      this.pressEnter();
    },

    pressEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.calculate();
        }
      });
    },

    calculate() {
      let calculation = this.display.value;

      try {
        calculation = eval(calculation);

        if (!calculation) {
          alert("Conta inválida");
          return;
        }

        this.display.value = String(calculation);
      } catch (e) {
        alert("Conta inválida");
        console.log(e);
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    buttonsClick() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnToDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.deleteOne();
        }

        if (el.classList.contains("btn-eq")) {
          this.calculate();
        }
      });
    },

    btnToDisplay(value) {
      this.display.value += value;
    },
  };
}

const calculator = createCalculator();
calculator.initialize();
