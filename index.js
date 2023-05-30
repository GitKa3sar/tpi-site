//DOM
const form = document.querySelector("form");
const submit = document.querySelector("#btn_sub");

 

form.addEventListener("submit", (e) => {
  e.preventDefault();
    let score = 0;

  const answers = document.querySelectorAll("input[type='radio']:checked");

  answers.forEach((element) => {
    console.log(element.name + " " + element.value);
    score += element.value;

  });
  console.log(score);
});
