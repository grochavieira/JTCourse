const h1 = document.querySelector(".container h1");

const data = new Date();

function getDayOfTheWeek(weekDay) {
  console.log(weekDay);
  const weeksOfTheDay = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];

  return weeksOfTheDay[weekDay];
}

function getMonth(month) {
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  return months[month];
}

function addZeroToLeft(num) {
  return num >= 10 ? num : `0${num}`;
}

h1.innerHTML = ` ${getDayOfTheWeek(
  data.getDay()
)}, ${data.getDate()} de ${getMonth(
  data.getMonth()
)} de ${data.getFullYear()} <br/> ${addZeroToLeft(
  data.getHours()
)}:${addZeroToLeft(data.getMinutes())}`;

// const h1 = document.querySelector(".container h1");
// const data = new Date();

// const options = {
//   dateStyle: "full",
//   timeStyle: "short",
// };

// h1.innerHTML = data.toLocaleDateString("pt-BR", options);
