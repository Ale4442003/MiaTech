const paragraph = document.getElementById("text");
const paragraph2 = document.querySelector(".text2");
const myText = document.getElementById("description");
document.cookie = "username=Alessandra; expires=Fri, 30 Aug 2024 12:00:00 UTC; path=/";
console.log("Create a cookie", document.cookie);
let cookie = document.cookie;
console.log("cookie", cookie);
document.cookie = "username=Alessandra; expires=Fri, 30 Aug 1900 12:00:00 UTC; path=/";
console.log("Delete cookie", document.cookie);

const list = document.createElement("ul");

const user = document.createElement("li");
user.innerText = "First user";
const user2 = document.createElement("li");
user2.innerText = "Second user";
const user3 = document.createElement("li");
user3.innerText = "Third user";
const user4 = document.createElement("li");
user4.innerText = "Fourth user";
const user5 = document.createElement("li");
user5.innerText = "Fifth user";
const user6 = document.createElement("li");
user6.innerText = "Sixth user";
const user7 = document.createElement("li");
user7.innerText = "Seventh user";
const user8 = document.createElement("li");
user8.innerText = "Eighth user";

list.append(user, user2, user3, user4, user5, user6, user7, user8);
document.body.append(list);

console.log(paragraph);
console.log(paragraph2);
console.log(myText);

myText.innerHTML = "This is a new paragraph using innerHTML with a botton <button>Click</button>";
myText.style.backgroundColor = "yellow";
myText.style.fontSize = "35px"