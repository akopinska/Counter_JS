let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");

add.addEventListener("click", function () {
  let number = document.querySelector("#number");
  let result = Number(number.innerText) + 1;

  number.innerText = result;
});

subtract.addEventListener("click", function () {
  let number = document.querySelector("#number");
  let result = Number(number.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  number.innerText = result;
});
