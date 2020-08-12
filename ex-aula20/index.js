const dataList = [];

function handleSubmit() {
  const form = document.querySelector(".form");

  function receiveEventForm(event) {
    event.preventDefault();

    const name = form.querySelector(".name");
    const age = form.querySelector(".age");
    const weight = form.querySelector(".weight");
    const height = form.querySelector(".height");

    const object = {
      name: name.value,
      age: age.value,
      weight: weight.value,
      height: height.value,
    };

    dataList.push(object);

    console.log(dataList);

    const divTag = document.querySelector("#data-list");
    divTag.innerHTML = "";
    for (let i = 0; i < dataList.length; i++) {
      divTag.innerHTML += `${dataList[i].name} ${dataList[i].age} ${dataList[i].weight} ${dataList[i].height} <br/>`;
    }
  }

  form.addEventListener("submit", receiveEventForm);
}

handleSubmit();
