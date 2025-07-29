/*let fistName = "Alessandra";
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

let decrescente = 9;
while (decrescente >= 1) {
  console.log(decrescente);
  decrescente -= 2;
}

let word = prompt("holii");
console.log(word.length);

let input;
do {
  input = prompt("Inserisci una parola almeno di 5 lettere");
} while (input.length < 5);
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


let votazioni = ["0", "1", "2", "3", "4", "5"];
console.log(votazioni);

let somma = 0;

for (let i = 0; i < votazioni.length; i++) {
  somma += parseInt(votazioni[i]);
}

console.log("La somma è:", somma);

for (let reverse = votazioni.length - 1; reverse >= 0; reverse--) {
  console.log(votazioni[reverse]);
}

let parole = [];
for (let i = 0; i < 5; i++) {
  let parola = prompt("Inserisci massimo 5 parole");
  parole.push(parola);
}
for (let i = 0; i < parole.length; i++) {
  if (parole[i].length % 2 !== 0) {
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
  console.log(chiave + ":" + person[chiave]);
}



function outerFunction(x, initialValue) {
  let result = initialValue;

  function innerFunction(y) {
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
    increment() {
      count++;
      return count;
    },
    decrement() {
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

Object.entries(student).forEach(([chiave, valore]) => {
  console.log(`${chiave}: ${valore}`);
});

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number * 2);
});

let squaredNumbers = numbers.map(function (number) {
  return number * number;
})

console.log(squaredNumbers);

let students = [
  { name: "Clara", grade: 55 },
  { name: "Ale", grade: 65 },
  { name: "Marco", grade: 30 }
];

let passedStudents = students.filter(student => student.grade >= 60);
let failedStudent = students.find(student => student.grade < 60);

console.log(passedStudents);
console.log(failedStudent);


let expenses = [25, 21, 13, 7, 33];
let total = expenses.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log("Totale spese:", total);

let words = ["banana", "apple", "cherry", "date"];
words.sort();

console.log(expenses, words);

class Automobile {
  constructor(marca, modello, anno) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = 0;
  }

  #contatoreChiamate = 0;

  #contatoreAggiungiChilometri = 0;


  #incrementaContatore() {
    this.#contatoreChiamate++;
  }

  descrizione() {
    this.#incrementaContatore();
    return `La mia ${this.marca} ${this.modello} è del ${this.anno}.`
  }

  mostraContatoreChiamate() {
    return this.#contatoreAggiungiChilometri;
  }

  mostraNumeroDescrizione() {
    return this.#contatoreChiamate;
  }

  aggiungiChilometri(km) {
    this.chilometraggio += km;
    this.#incrementaContatore();
    this.#contatoreAggiungiChilometri++;
  }

  mostraChilometraggio() {
    return this.chilometraggio;
  }

  #calcolaEtà() {
    let annoAttuale = new Date().getFullYear();
    return annoAttuale - this.anno;
  }

  mostraEtà() {
    let età = this.#calcolaEtà();
    console.log(`La mia auto ha ${età} anni.`);
  }

  _controllaChilometri() {
    if (this.chilometraggio > 100000) {
      alert(`Attenzione a non superarli`);
      return `Sono troppi km`
    } else {
      return `Chilometraggio nella norma`;
    }
  }

  static confrontaChilometraggio(auto1, auto2) {
    if (auto1.chilometraggio > auto2.chilometraggio) {
      return `${auto1.marca} ${auto1.modello} ha più chilometri (${auto1.chilometraggio} km).`;
    } else if (auto2.chilometraggio > auto1.chilometraggio) {
      return `${auto2.marca} ${auto2.modello} ha più chilometri (${auto2.chilometraggio} km).`;
    } else {
      return `Hanno lo stesso chilometraggio`;
    }
  }

  get chilometraggioAttuale() {
    return `Chilometraggio attuale: ${this.chilometraggio}`;
  }

  set nuovoChilometraggio(nuovoValore) {
    if (nuovoValore >= this.chilometraggio) {
      console.log(`Nuovo valore chilometraggio`);
      this.chilometraggio = nuovoValore;
    } else {
      console.log(`errore`);
    }
  }

  static verificaIstanza(obj, classe) {
    if (obj instanceof classe) {
      return `obj è un'istanza di ${classe.name}`;
    } else {
      return `obj non è un'istanza di  ${classe.name}`;
    }
  }
}

Automobile.prototype.saluta = function () {
  return `Ehi sono una ${this.marca} ${this.modello}.`;
}

class Elettrica extends Automobile {
  constructor(marca, modello, anno, autonomia) {
    super(marca, modello, anno);
    this.autonomia = autonomia;
  }

  descrizione() {
    let avviso = this._controllaChilometri();
    if (avviso === `Sono troppi km`) {
      console.log(avviso);
    }

    return `La mia ${this.marca} ${this.modello} è del ${this.anno} e ha ${this.autonomia} km di autonomia.`;
  }

  ricarica(km) {
    this.autonomia += km;
  }
}

class Camion extends Automobile {
  constructor(marca, modello, anno, caricoMassimo,) {
    super(marca, modello, anno);
    this.caricoMassimo = caricoMassimo;
    this.caricoAttuale = 0;
  }

  descrizione() {
    return `La mia ${this.marca} ${this.modello} è del ${this.anno} e il suo carico massimo è ${this.caricoMassimo} mentre adesso trasporta fino a ${this.caricoAttuale} kg.`
  }

  carica(kg) {
    if (this.caricoAttuale + kg <= this.caricoMassimo) {
      this.caricoAttuale += kg;
      console.log(`${this.caricoAttuale}`);
    } else {
      console.log(`Superi il carico massimo di ${this.caricoMassimo}`);
    }
  }
}

let macchina = new Automobile("Renault", "Clio", 2015);
console.log(macchina.descrizione());

macchina.aggiungiChilometri(200);
console.log(macchina.mostraChilometraggio());

let elettrica = new Elettrica("Renault", "Clio", 2015, 150);
console.log(elettrica.descrizione());

elettrica.ricarica(50);
console.log(elettrica.descrizione());

console.log(macchina.saluta());
console.log(elettrica.saluta());

macchina.mostraEtà();

macchina.aggiungiChilometri(135000);
console.log(macchina._controllaChilometri());

elettrica.aggiungiChilometri(150)
console.log(Automobile.confrontaChilometraggio(macchina, elettrica));

console.log(`Numero di chiamate ${macchina.mostraNumeroDescrizione()} volte`);

console.log(macchina.mostraNumeroDescrizione());

console.log(macchina.mostraContatoreChiamate());

console.log(macchina.chilometraggioAttuale);

macchina.nuovoChilometraggio = 200000;

let camion = new Camion("Mercedes", "Actros", 2022, 12000);
console.log(camion.descrizione());
camion.carica(3000);
console.log(camion.descrizione());

let car = new Automobile("Fiat", "Panda", 2010);
let coche = new Elettrica("Kia", "Picanto", 2024, 250);
console.log(car instanceof Automobile);
console.log(coche instanceof Elettrica);

console.log(Automobile.verificaIstanza(camion, Camion));
console.log(Automobile.verificaIstanza(elettrica, Elettrica));*/

let values = [1, 2, 3, 4, 5];
let [first, , third] = values;

console.log(first);
console.log(third);

const fruits = ['apple', 'banana', 'cherry'];
const [x, y, z, a = 'kiwi', b = 'watermelon'] = fruits;

console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log(b);

const profile = {
  firstName: 'Marco',
  lastName: 'Rossi',
  age: 21
};

const { firstName, lastName, age } = profile;

console.log(firstName);
console.log(lastName);
console.log(age);

const { firstName: nome, lastName: cognome, age: età } = profile;
console.log(nome);
console.log(cognome);
console.log(età);

const game = {
  title: 'The Legend of Zelda',
};

const { title, platform = 'Nintendo Switch', releaseYear = 2017 } = game;

console.log(title);
console.log(platform);
console.log(releaseYear);

const items = [1, 2, 3, 4, 5];
const copy = [...items];

console.log(items);
console.log(copy);

items[4] = 50;

console.log(items);
console.log(copy);

const elements1 = [10, 20, 30, 40, 50];
const elements2 = [60, 70, 80, 90, 100];
const combined = [...elements1, ...elements2];

console.log(combined);

const harryPotterBook = {
  author: 'J.K. Rowling',
  series: 'Harry Potter',
  book: 'Harry Potter and the Philosopher\'s Stone',
}

const copybook = { ...harryPotterBook, year: 1997 };

console.log(copybook);
console.log(harryPotterBook);

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 4, 6));
console.log(sum(10, 10));
console.log(sum(5, 10, 15, 20));
console.log(sum());

const data = [5, 10, 15, 20, 25, 30];
const [first1, second, ...rest] = data;

console.log(first1);
console.log(second);
console.log(rest);

const person = {
  name1: 'Giulia',
  surname: 'Rossi',
  age: 35,
  job: 'teacher'
}

const { name1, surname, ...restanti } = person

console.log(name1);
console.log(surname);
console.log(restanti);

const persona = {
  nome: "Alessandra",
  età: 21,
  hobby: ["lettura", "musica", "javascript"],
};

const json = JSON.stringify(persona);
console.log(json);

const oggetto = JSON.parse(json);
console.log(oggetto);

const testo = '[{"nome": "Gaia", "età": 21}, {"nome": "Davide", "età": 23}]'
const oggetto1 = JSON.parse(testo);

console.log(oggetto1);

oggetto1.push({ nome: "Sara", età: 22 });

const json1 = JSON.stringify(oggetto1);
console.log(json1);

const name3 = "Sophia";
const cognome3 = "Bianchi";
console.log(`ciao, mi chiamo ${name3} ${cognome3}.`);

const nombre = `Nicole`;
const apellido = `Romano`;
const edad = 25;
const ciudad = `Milano`;
const vecina = `Sono ${nombre} ${apellido}, 
ho ${edad} 
e vivo a ${ciudad} da sola.`;

console.log(vecina);

function Profilo(user) {
  return `Mi chiamo ${user.nome3} ${user.cognome3}, 
ho ${user.età3} 
e vivo a ${user.città3} da sola.`
}

const userEx = {
  nome3: "Nicole",
  cognome3: "Romano",
  età3: 25,
  città3: "Milano"
}

const descrizione = Profilo(userEx);
console.log(descrizione);

const numero = 57;
const frase = "Oggi è il mio compleanno";
const animali = ["gatto", "cane", "coniglio", "pesce", "criceto"];
const colori = {
  "giallo + rosso": "arancione",
  "giallo + blu": "verde",
  "rosso + blu": "viola"
};

console.log(numero);
console.log(frase);
console.log(animali);
console.log(colori);

const esito = "errore";

if (esito === "errore") {
  console.error("errore: si è verificato un problema");
} else if (esito === "avviso") {
  console.warn("Avviso: non funzionare.");
} else {
  console.log("Nessun problema rilevato.");
}

const regioni = [
  { regione: "Lombardia", capoluogo: "Milano" },
  { regione: "Lazio", capoluogo: "Roma" },
  { regione: "Sicilia", capoluogo: "Palermo" }
];

console.table(regioni);

console.group("Regioni italiane");

regioni.forEach(r => {
  console.log(`Regione: ${r.regione}`);
  console.log(`capoluogo: ${r.capoluogo}`);
  console.log("---");
});

console.groupEnd();

function timer() {
  console.log('Che ore sono?');
}

setTimeout(timer, 3000);

/*function repeat () {
  console.log('Hello world');
}
setInterval(repeat, 2000);

function message () {
  console.log('Loop massimo 5 volte');
}
let time = setInterval(message, 1000);

setTimeout(() => {
  clearInterval(time);
  console.log('stop');
}, 5000);
*/
try {
  let dividend = 12;
  let divisor = 10;
  if (divisor === 0) {
    throw new Error("errore se il dividìsore è 0");
  }

  let result = dividend/divisor;
  console.log("Risultato:" + result);

} catch(err) {
  console.log('Errore trovato:' + err.message);
}

function value(stringa) {
  try {
    if (typeof stringa !== 'string') {
      throw new TypeError("Deve essere una stringa");
    } 

    let result = stringa.length;
    console.log("risultato", result);

  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Errore di tipo:", error.message);
    } else {
      console.log("Errore generico:", error.message);
    }
  }
}

value("Alessandra");
value(2025);

let ab = 10;
let bc = 20;

try {
  if (ab >= bc) {
    const result = ab + bc;
    console.log('Risultato ' + result);
  } else {
    throw new Error("Numeri maggiori");
  }
} catch(error) {
  console.log(error.message);
} finally {
  console.log("operazione completata");
}

function calcola(callback) {
  const a = 15;
  const b = 20;
  const risultato = a + b;
  console.log(risultato);
  callback();
}

function result() {
  console.log("Callback");
}

calcola(result);

function multiplication(callback) {
  const a = 5;
  const b = 3;
  const result = a * b;
  console.log(result);
   callback(result);
}

function stamp(valore) {
  console.log("Callback", valore);
}

multiplication(stamp);

function funzione1(callback) {
  console.log("Domani inizia la scuola");
  callback();
}

function funzione2() {
  console.log("Non è vero, inizia settimana prossima");
}

funzione1(funzione2);

function promise() {
  return new Promise((resolve, reject) => {
    const condition = true;
    setTimeout(() => {
      if (condition) {
          resolve("Promise accettata");
      } else {
          reject("Promise rifiutata");
      }
    }, 2000);
  })
}

promise()
.then((message) => {
  console.log("accettata", message);
})
.catch((error) => {
  console.log("Rifiutata", error);
})

function myPromise() {
  return new Promise((resolve, reject) => {
    const condition = false;
    setTimeout(() => {
     if (condition) {
          resolve(" Tutto ok");
      } else {
          reject("Errore");
      }
    }, 2000);
  })
}

myPromise()
.then((message) => {
    console.log("Tutto ok:", message);
  })
  .catch((error) => {
    console.log("Errore:", error);
  })
  .finally(() => {
    console.log("Operazione completata");
  });

  function number() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(3);
      }, 1000);
    })
  }

  number()
  .then((num) => {
    return num * 2;
  })
  .then((num) => {
    return num + 3;
  })
  .then((result) => {
    console.log("Risultato", result);
  })

  function value() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(10);
      }, 1000);
    })
  }

  value()
  .then((num) => {
    if (num % 2 === 0) {
      return num * 2;
    } else {
      return num + 1;
    }
  })

  .then((result) => {
    console.log("Risultato", result);
  });

function chaningPromise() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    console.log("Numero", random);

    if (random > 0.3) {
      resolve(random);
    } else {
      reject("Numero basso!");
    }
  });
}

chaningPromise()
  .then((number) => {
    console.log("Numero ricevuto:", number);
    return number * 3; 
  })
  .then((newNumbers) => {
    console.log("Numero moltiplicato:", newNumbers);
    return newNumbers + 1;
  })
  .then((finalResult) => {
    console.log("Risultato finale:", finalResult);
  })
  .catch((err) => {
    console.error("Errore nella promessa:", err);
  });

  let myPromessa = new Promise(( resolve, reject) => {
    reject("messaggio errore");
  });

  myPromessa 
    .catch(error => {
      console.log(error);
    });

  let item = new Promise((resolve, reject) => {
  const condition = true;
  if (condition === true) {
    resolve("Risolto");
  } else {
    reject("Errore");
  }
});

item
  .then(result => {
    console.log(result); 
  })
  .catch(error => {
    console.log(error);
  });

 let randomPromise = new Promise((resolve, reject) => {
  const result = Math.random();
  if (result > 0.5) {
    resolve(result);
  } else {
    reject("Numero troppo basso");
  }
});

randomPromise
.then(result => {
  console.log("Tutto apposto", result);
})
.catch(error => {
  console.error("Errore", error);
})

function ritardo1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("1 secondo");
    }, 1000);
  })
  }

  function ritardo2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("2 secondi");
      }, 2000);
    })
  }

  Promise.all([ritardo1(), ritardo2()])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })

 function verifica1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("1 sec");
    }, 1000);
  })
  }

  function verifica2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("2 sec");
      }, 2000);
    })
  }

  Promise.race([verifica1(), verifica2()])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })

  function promise1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Prima");
      }, 3000);
    })
  }

  function promise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Seconda");
      }, 5000);
    })
  }

  function promise3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Terza");
      }, 7000);
    })
  }

  Promise.allSettled([promise1(), promise2(), promise3()])
  .then((result) => {
    console.log(result);
  })