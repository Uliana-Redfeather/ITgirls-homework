function arithmetic (c) {
let a = document.getElementById('first_value').value;
let b = document.getElementById('second_value').value;
if (c == '+')
sum (a,b)
if (c == '-')
sub (a,b)
if (c == '*')
multi (a,b)
if (c == '/')
division (a,b)
    
}

function sum (a,b) {
    alert (Number(a) + Number(b));
    }

function sub (a,b) {
    alert (a - b);
    }

function multi (a,b) {
    alert (a * b);
    }

function division (a,b) {
    alert (a / b);
    }