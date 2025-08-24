const paragraph = document.getElementById("text");
console.log(paragraph);
const paragraph2 = document.querySelector(".text2");
console.log(paragraph2);
const myText = document.getElementById("description");
console.log(myText);

myText.innerText = "This is a new paragraph using innerText";

myText.style.backgroundColor = "yellow";
myText.style.fontSize = "35px"