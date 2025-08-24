const paragraph = document.getElementById("text");
console.log(paragraph);
const paragraph2 = document.querySelector(".text2");
console.log(paragraph2);
const myText = document.getElementById("description");
console.log(myText);

myText.innerHTML = "This is a new paragraph using innerHTML with a botton <button>Click</button>";
myText.style.backgroundColor = "yellow";
myText.style.fontSize = "35px"