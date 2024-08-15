let equation = "";
let total = "";
let display = document.querySelector(".display");
let result = document.querySelector(".result");
let backspace = document.querySelector("#backspace");
let digits = document.querySelectorAll("#numbers");
let ops = document.querySelectorAll("#operator");
let allclear = document.querySelector("#clear");
let equal = document.querySelector("#equal");

function add(dgt1, dgt2) {
  sum = dgt1 + dgt2;
  return sum;
}

function subtract(dgt1, dgt2) {
  diff = dgt1 - dgt2;
  return diff;
}

function mult(dgt1, dgt2) {
  res = dgt1 * dgt2;
  return res;
}

function divide(dgt1, dgt2) {
  rem = dgt1 / dgt2;
  return rem;
}

function operate(str){
    
}

allclear.addEventListener("click", () => {
  equation = "";
  total = "";
  display.innerHTML = equation;
  result.innerHTML = total;
});

backspace.addEventListener("click", () => {
  equation = equation.slice(0, -1);
  display.innerHTML = equation;
});

digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    equation += digit.innerHTML;
    display.innerHTML = equation;
  });
});

ops.forEach((op) => {
  op.addEventListener("click", () => {
    equation += op.innerHTML;
    display.innerHTML = equation;
  });
});

equal.addEventListener("click" , () => {
    let ans = operate(equation);
    result.innerHTML = ans;
})
