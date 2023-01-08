function generator (){
    let arr = [];
    for (i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * 20 - 10);
        
      }
document.write("Массив: " + arr + "<br>");

let min = arr[0];
let max = arr[0];
let middle = 0;
let sum = arr[0];
let multiply = arr[0];
 
for (i=0; i < arr.length-1; i++){
if (min>arr[i+1]) {min = arr[i+1];}
if (max<arr[i+1]) {max = arr[i+1];}
sum = sum + arr[i+1];
multiply = multiply * arr[i+1];
}

document.write("Минимум: " + min + "<br>");
document.write("Максимум: " + max + "<br>");
document.write("Среднее арифметическое: " + sum/10 + "<br>");
document.write("Сумма: " + sum + "<br>");
document.write("Произведение чисел: " + multiply + "<br>");
}