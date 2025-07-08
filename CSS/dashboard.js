let fistName = "Alessandra";
console.log(fistName);

const cap = 24100;
console.log(cap);

let number = 5;
console.log(number);
number = 22;
console.log(number);

let number2 = 20;
{
    let number2 = 25;
    console.log(number2);
}
console.log(number2);

let outside = 21;
{
    let inside = 9;
    console.log(inside);
    console.log(outside);
}
//console.log(inside);
console.log(outside);


for (let numero = 0; numero <= 20; numero += 2) {
    console.log(numero);
}

let  decrescente = 9;
while (decrescente >= 1) {
    console.log (decrescente);
    decrescente -= 2;
}

let word = prompt("holii");