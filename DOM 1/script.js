/* let t1 = document.querySelector("title");
t1.innerText = "Modifying the DOM";

console.log(t1.innerText); */

let b = document.querySelector("body");

for (let elem of b.children) {
    /* console.log(elem); */
}

let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,0);
b.style.backgroundColor = randomColor;
console.log(randomColor);