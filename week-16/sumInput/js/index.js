let arr = [];
function sumInput() {
  arr.sort(function (a, b) {
    return a - b;
  });
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i] * 1;
    document.write(arr[i] + "<br>");
  }
  document.write("Сумма = ", sum);
}
function add() {
  arr.push(document.getElementById("input").value);
  document.getElementById("input").value = "";
}
