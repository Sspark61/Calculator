let equation = "";
let total = "";
let display = document.querySelector(".display");
let result = document.querySelector(".result");
let backspace = document.querySelector("#backspace");
let digits = document.querySelectorAll("#numbers");
let ops = document.querySelectorAll("#operator");
let allclear = document.querySelector("#clear");
let equal = document.querySelector("#equal");
let dot = document.querySelector("#dot");
let point = true;

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

function operate(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      let left = i - 1,
        right = i + 1,
        val1 = 0,
        val2 = 0,
        factor = 1;

      while (str[left] !== "+" && str[left] !== "-" && left !== -1) {
        val1 += str[left] * factor;
        factor *= 10;
        left--;
      }
      while (
        str[right] !== "+" &&
        str[right] !== "-" &&
        str[right] !== "/" &&
        str[right] !== "x" &&
        right !== str.length
      ) {
        val2 += str[right] * 1;
        val2 *= 10;
        right++;
      }
      val2 /= 10;
      let ans = mult(val1, val2);
      str = str.replace(`${val1}x${val2}`, `${ans}`);
      i = 0;
    } else if (str[i] === "/") {
      let left = i - 1,
        right = i + 1;
      let val1 = 0,
        val2 = 0,
        factor = 1;

      while (str[left] !== "+" && str[left] !== "-" && left !== -1) {
        val1 += str[left] * factor;
        factor *= 10;
        left--;
      }

      while (
        str[right] !== "+" &&
        str[right] !== "-" &&
        str[right] !== "x" &&
        str[right] !== "/" &&
        right !== str.length
      ) {
        val2 += str[right] * 1;
        val2 *= 10;
        right++;
      }
      val2 /= 10;
      let ans = divide(val1, val2);
      str = str.replace(`${val1}/${val2}`, `${ans}`);
      i = 0;
    }
  }
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "+") {
      let left = i - 1,
        right = i + 1;
      let val1 = 0,
        val2 = 0,
        factor = 1;

      while (left !== -1) {
        val1 += str[left] * factor;
        factor *= 10;
        left--;
      }
      console.log(val1);
      while (str[right] !== "+" && str[right] !== "-" && right !== str.length) {
        val2 += str[right] * 1;
        val2 *= 10;
        right++;
      }
      val2 /= 10;
      console.log(val2);
      let ans = add(val1, val2);
      str = str.replace(`${val1}+${val2}`, `${ans}`);
      i = 0;
      console.log(str);
    } else if (str[i] === "-") {
      let left = i - 1,
        right = i + 1;
      let val1 = 0,
        val2 = 0,
        factor = 1;

      while (left !== -1) {
        val1 += str[left] * factor;
        factor *= 10;
        left--;
      }
      console.log(val1);
      while (str[right] !== "+" && str[right] !== "-" && right !== str.length) {
        val2 += str[right] * 1;
        val2 *= 10;
        right++;
      }
      val2 /= 10;
      console.log(val2);
      let ans = subtract(val1, val2);
      str = str.replace(`${val1}-${val2}`, `${ans}`);
      i = 0;
      console.log(str);
    }
  }
  return str;
}

allclear.addEventListener("click", () => {
  equation = "";
  total = "";
  display.innerHTML = equation;
  result.innerHTML = total;
  point = true;
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

dot.addEventListener("click", () => {
  if (point) {
    equation += dot.innerHTML;
    display.innerHTML = equation;
    point = false;
  }
});

ops.forEach((op) => {
  op.addEventListener("click", () => {
    equation += op.innerHTML;
    display.innerHTML = equation;
    point = true;
  });
});

equal.addEventListener("click", () => {
  let ans = operate(equation);
  ans = Number(ans);
  if (ans === Math.floor(ans)) {
    result.innerHTML = ans;
  } else {
    result.innerHTML = ans.toFixed(6);
  }
  point = true;
});
