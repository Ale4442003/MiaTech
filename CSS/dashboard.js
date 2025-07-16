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
console.log(word.length);

let input;
do {
    input = prompt ("Inserisci una parola almeno di 5 lettere");
} while (input.length<5);
console.log("Hai inserito", input);

let numero = 10;
if (numero > 5) {
    console.log("La variabile è maggiore di 5");
} else {
    console.log("La variabile è minore di 5");
}

let score = parseInt(prompt("Inserisci un numero da 0 a 100"));
if (score >= 90 && score <= 100) {
  console.log("voto ottimo");
} else if (score >= 70 && score <= 89) {
  console.log("voto buono");
} else if (score >= 60 && score <= 69) {
  console.log("voto sufficiente");
} else if (score <= 59) {
  console.log("voto insufficiente");
}


let score1 = parseInt(prompt("Inserisci il tuo punteggio (0-100)"));
let voto;

switch (true) {
  case (score1 >= 90 && score1 <= 100):
    voto = "voto ottimo";
    break;
  case (score1 >= 70 && score1 <= 89):
    voto = "voto buono";
    break;
  case (score1 >= 60 && score1 <= 69):
    voto = "voto sufficiente";
    break;
  case (score1 <= 59):
    voto = "voto insufficiente";
    break;
  default:
    voto = "Punteggio non valido";
}

console.log(voto);


let votazioni = ["0", "1", "2", "3","4", "5"];
console.log(votazioni);

let somma = 0;

for (let i = 0; i < votazioni.length; i++) {
  somma += parseInt(votazioni[i]); 
}

console.log("La somma è:", somma);

for (let reverse = votazioni.length - 1; reverse >= 0; reverse--) {
  console.log(votazioni[reverse]);
}

let parole =[];
for (let i = 0; i < 5; i++) {
  let parola = prompt("Inserisci massimo 5 parole");
  parole.push(parola);
}
for (let i = 0; i < parole.length; i++) {
  if (parole[i].length % 2 !==0) {
    console.log(parole[i]);
  }
}

let person = {
  name: "Alessandra",
  age: 21,
  city: "Bergamo"
}

console.log(person);
console.log(person.age);

person.age = 22;

console.log(person.age);

person.job = "secretary";

console.log(person.job);

for (let chiave in person) {
  console.log (chiave + ":" + person [chiave]);
  }



function outerFunction(x, initialValue) {
  let result= initialValue;

  function innerFunction(y){
    result = result + y;
    return result;
  }
  return innerFunction;
}
let sum = outerFunction(4, 4); 
console.log(sum(2));
console.log(sum(2));


function createCounter() {
  let count = 0;

  return {
    increment () {
      count++;
      return count;
    },
    decrement () {
      count--;
      return count;
    }
  };
}


let counter = createCounter();
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 


let student = {
  name: "Alessandra",
  age: "21",
  grade: "A",
  school: "Harvard"
}

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

Object.entries(student).forEach(([chiave, valore])=>{
  console.log(`${chiave}: ${valore}`);
});

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number * 2);
});

let squaredNumbers = numbers.map(function(number) {
  return number * number;
})

console.log(squaredNumbers);

let students =  [
  { name: "Clara", grade: 55 },
  { name: "Ale", grade: 65 },
  { name: "Marco", grade: 30 }
];

let passedStudents = students.filter(student => student.grade >= 60);
let failedStudent = students.find(student => student.grade < 60);

console.log(passedStudents);
console.log(failedStudent);


let expenses =[25, 21, 13, 7, 33];
let total = expenses.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log("Totale spese:", total); 

let words = ["banana", "apple", "cherry", "date"];
words.sort(); 

console.log(expenses, words);

class Automobile {
  constructor (marca, modello, anno) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
  }

  descrizione() {
    return `Questa macchina è una ${this.marca} ${this.modello} del ${this.anno}.`;
  }
}

let Kia = new Automobile("Kia", "Picanto", "2024");
console.log(Kia.descrizione());