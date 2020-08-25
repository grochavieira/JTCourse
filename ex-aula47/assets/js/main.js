function clock() {
  const relogio = document.querySelector(".relogio");
  let seconds = 0;
  let timer;
  function createTimeInSeconds(second) {
    const data = new Date(second * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      timer = setInterval(function () {
        relogio.innerHTML = createTimeInSeconds(seconds);
        seconds++;
      }, 10);
    }

    if (el.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    }

    if (el.classList.contains("zerar")) {
      clearInterval(timer);
      seconds = 0;
      relogio.innerHTML = "00:00:00";
    }
  });
}

clock();
