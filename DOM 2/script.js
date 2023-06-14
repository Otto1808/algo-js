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
    console.log(elm);
}