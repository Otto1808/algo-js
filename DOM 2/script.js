let elem = document.querySelectorAll(".important");

for (let edit of elem){
    edit.title = "This is an important item";
    /* console.log(edit); */
}

let imgImportant = document.querySelectorAll("img");

for (let elm of imgImportant){
    if(elm.className != "important"){
        elm.style.display = "none" ;
    }
    /* console.log(elm); */
}

let paragraphe = document.querySelectorAll("p");
 for (let paraph of paragraphe){
    console.log(paraph.innerText);
    if(paraph.className != ""){
        console.log(paraph.className + " : " + paraph.innerText);
    }else{
        console.log(paraph.innerText);
    }
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,0);
    paraph.style.color = randomColor;
 }

