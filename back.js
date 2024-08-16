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
let operror = true;
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
        val1,
        val2,
        temp1 = "",
        temp2 = "";

      while (str[left] !== "+" && str[left] !== "-" && left !== -1) {
        left--;
      }
      temp1 = str.substring(left + 1, i);
      val1 = Number(temp1);

      while (
        str[right] !== "+" &&
        str[right] !== "-" &&
        str[right] !== "/" &&
        str[right] !== "x" &&
        right !== str.length
      ) {
        right++;
      }
      temp2 = str.substring(i + 1, right);
      val2 = Number(temp2);

      let ans = mult(val1, val2);
      str = str.replace(`${temp1}`, `${val1}`);
      str = str.replace(`${temp2}`, `${val2}`);
      str = str.replace(`${val1}x${val2}`, `${ans}`);
      i = 0;
    } else if (str[i] === "/") {
      let left = i - 1,
        right = i + 1,
        val1 = "",
        val2 = "",
        temp1 = "",
        temp2 = "";

      while (str[left] !== "+" && str[left] !== "-" && left !== -1) {
        left--;
      }
      temp1 = str.substring(left + 1, i);
      val1 = Number(temp1);

      while (
        str[right] !== "+" &&
        str[right] !== "-" &&
        str[right] !== "x" &&
        str[right] !== "/" &&
        right !== str.length
      ) {
        right++;
      }
      temp2 = str.substring(i + 1, right);
      val2 = Number(temp2);
      if (val2 === 0) {
        return "undefined";
      }

      let ans = divide(val1, val2);
      str = str.replace(`${temp1}`, `${val1}`);
      str = str.replace(`${temp2}`, `${val2}`);
      str = str.replace(`${val1}/${val2}`, `${ans}`);
      i = 0;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "+") {
      let left = i - 1,
        right = i + 1,
        val1 = "",
        val2 = "",
        temp1 = "",
        temp2 = "";

      while (left !== -1) {
        left--;
      }
      temp1 = str.substring(left + 1, i);
      val1 = Number(temp1);

      while (str[right] !== "+" && str[right] !== "-" && right !== str.length) {
        right++;
      }
      temp2 = str.substring(i + 1, right);
      val2 = Number(temp2);

      let ans = add(val1, val2);
      str = str.replace(`${temp1}`, `${val1}`);
      str = str.replace(`${temp2}`, `${val2}`);
      str = str.replace(`${val1}+${val2}`, `${ans}`);
      i = 0;
    } else if (str[i] === "-") {
      let left = i - 1,
        right = i + 1,
        val1 = "",
        val2 = "",
        temp1 = "",
        temp2 = "";

      while (left !== -1) {
        left--;
      }
      temp1 = str.substring(left + 1, i);
      val1 = Number(temp1);

      while (str[right] !== "+" && str[right] !== "-" && right !== str.length) {
        right++;
      }
      temp2 = str.substring(i + 1, right);
      val2 = Number(temp2);

      let ans = subtract(val1, val2);
      str = str.replace(`${temp1}`, `${val1}`);
      str = str.replace(`${temp2}`, `${val2}`);
      str = str.replace(`${val1}-${val2}`, `${ans}`);
      i = 0;
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
  operror = true;
});

backspace.addEventListener("click", () => {
  equation = equation.slice(0, -1);
  display.innerHTML = equation;
});

digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    equation += digit.innerHTML;
    display.innerHTML = equation;
    operror = true;
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
    if (operror) {
      equation += op.innerHTML;
      display.innerHTML = equation;
      point = true;
      operror = false;
    }
  });
});

equal.addEventListener("click", () => {
  let ans = operate(equation);
  if (ans === "undefined") {
    result.innerHTML = ans;
    operror = false;
  } else {
    ans = Number(ans);
    if (ans === Math.floor(ans)) {
      result.innerHTML = ans;
    } else {
      result.innerHTML = ans.toFixed(6);
    }
  }
  point = true;
  equation = result.innerHTML;
});
