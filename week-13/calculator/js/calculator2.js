let b = "";

function showNumber(a) {
  if (a == "c") {
    b = "";
    a = "";
  }

  if (a == 0 && b == "") {
    b = b;
  } else {
    b = b + a;
  }
  document.querySelector("textarea").value = b;
}

function outputResult() {
  let output = +eval(b);
  document.querySelector("textarea").value = output;
}
