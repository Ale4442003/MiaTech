const paragraph = document.getElementById("text");
const paragraph2 = document.querySelector(".text2");
const myText = document.getElementById("description");
const list = document.createElement("ul");
const user = document.createElement("li");
user.innerText = "First user";
const user2 = document.createElement("li");
user2.innerText = "Second user";
const user3 = document.createElement("li");
user3.innerText = "Third user";

list.append(user, user2, user3);
document.body.append(list);

console.log(paragraph);
console.log(paragraph2);
console.log(myText);

myText.innerHTML = "This is a new paragraph using innerHTML with a botton <button>Click</button>";
myText.style.backgroundColor = "yellow";
myText.style.fontSize = "35px"