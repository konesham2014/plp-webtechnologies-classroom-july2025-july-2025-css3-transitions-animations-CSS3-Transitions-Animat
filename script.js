/*part 1 variables, conditionals, basic logic, DOM output*/

//a simple greeting generator that shows how variables and conditionals work.
const greetBtn = document.getElementById("greetBtn");
const greetOutput = document.getElementById("greetOutput");

greetBtn.addEventListener("click", () => {
  const username = document.getElementById("nameInput").value.trim();

  //basic validation using conditionals
  if (username === "") {
    greetOutput.textContent = "Please enter your name first.";
    return;
  }

  //using a conditional and variable to decide the message
  let message;
  if (username.length < 4) {
    message = `Hi ${username}, nice short name!`;
  } else {
    message = `Hello ${username}, welcome back!`;
  }

  greetOutput.textContent = message;
});

//tiny math example to demonstrate operators and DOM output
const sumBtn = document.getElementById("sumBtn");
const sumOutput = document.getElementById("sumOutput");

sumBtn.addEventListener("click", () => {
  const a = Number(document.getElementById("numA").value);
  const b = Number(document.getElementById("numB").value);

  if (isNaN(a) || isNaN(b)) {
    sumOutput.textContent = "Please enter valid numbers.";
    return;
  }

  const result = a + b;
  sumOutput.textContent = `Result: ${result}`;
});



/*part 2 functions with parameters, scope and return values*/

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGBColor() {
  const r = randomInRange(0, 255);
  const g = randomInRange(0, 255);
  const b = randomInRange(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

//DOM interactions using functions
const randBtn = document.getElementById("randBtn");
const randOutput = document.getElementById("randOutput");
const colorizeBtn = document.getElementById("colorizeBtn");
const colorBox = document.getElementById("colorBox");

randBtn.addEventListener("click", () => {
  const min = Number(document.getElementById("minInput").value);
  const max = Number(document.getElementById("maxInput").value);
  randOutput.textContent = randomInRange(min, max);
});

colorizeBtn.addEventListener("click", () => {
  colorBox.style.background = randomRGBColor();
});



/*part 3 triggering CSS animations with JS*/

//animate boxes
const interactiveBox = document.getElementById("interactiveBox");
const interactiveRotatingBox = document.getElementById("interactiveRotatingBox");
const animateTriggerBtn = document.getElementById("animateTriggerBtn");

animateTriggerBtn.addEventListener("click", () => {
  interactiveBox.classList.toggle("active");
  interactiveRotatingBox.classList.toggle("active");
});

//flip card
const jsFlipBtn = document.getElementById("jsFlipBtn");
const jsCard = document.querySelector(".js-card");

jsFlipBtn.addEventListener("click", () => {
  jsCard.classList.toggle("flip");
});

//rotating element
const rotator = document.getElementById("rotator");
const rotateToggleBtn = document.getElementById("rotateToggleBtn");
let rotating = false;

rotateToggleBtn.addEventListener("click", () => {
  rotating = !rotating;
  rotator.classList.toggle("rotating", rotating);
  rotateToggleBtn.textContent = rotating ? "Stop rotation" : "Start rotation";
});

//modal interaction
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const modalClose = modal.querySelector(".modal-close");
const modalAction = document.getElementById("modalAction");

openModalBtn.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "false");
});

modalClose.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "true");
});

modalAction.addEventListener("click", () => {
  alert("Modal action triggered!");
});
