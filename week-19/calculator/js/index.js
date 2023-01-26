class calculator {
  static sum(a, b) {
    return alert(Number(a) + Number(b));
  }
  static sub(a, b) {
    return alert(a - b);
  }
  static multi(a, b) {
    return alert(a * b);
  }
  static division(a, b) {
    if (b == 0) alert("На ноль делить нельзя!");
  else {
    return alert(a / b);}
  }
}

function arithmetic(c) {

    let a = document.getElementById("first_value").value;
    let b = document.getElementById("second_value").value;


  if (c == "+") calculator.sum(a, b);
  if (c == "-") calculator.sub(a, b);
  if (c == "*") calculator.multi(a, b);
  if (c == "/") calculator.division(a, b);
}
