let names = [
    "Abdoulaye", "Adeline", "Bathsheba", "Camille", "Clara", "Cédric", "Corentin", "Ilias",
    "Jason", "Jérome", "Lucie", "Manon", "Marius", "Nathan", "Nicolas", "Ozlem", "Pauline",
    "Pietro", "Robin", "Rui", "Sam", "Sarah", "Steeve", "Tim", "Youssef"
]
shuffleArr(names)

let section = document.createElement("section");
let rColor

for (let n of names){
    let paragraph = document.createElement("p");
    paragraph.textContent = n ;
    rColor = randomColor()
    //console.log(typeof rColor)
    console.log(paragraph)
    paragraph.style.backgroundColor = rColor;
    section.appendChild(paragraph)
    document.querySelector("article").appendChild(section)
    if (!isBackgroundLight(rColor)){
        paragraph.style.color = "white"
    }

}

function randomColor(){
    let randomColoor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,0);
    //console.log(randomColoor)
    return randomColoor
}

function shuffleArr(arr){
    return arr.sort((a, b)=> 0.5 - Math.random())
}

function isBackgroundLight(rColor){
    let r, g, b, hsp
	if (rColor.match(/^rgb/)) {
		rColor = rColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
		console.log(rColor)
		r = rColor[1]
		g = rColor[2]
		b = rColor[3]
	} else {
		rColor = +("0x" + rColor.slice(1).replace( 
		rColor.length < 5 && /./g, '$&$&'))
		
		r = rColor >> 16
		g = rColor >> 8 & 255
		b = rColor & 255
	}
	
	hsp = Math.sqrt(
		0.299 * (r * r) +
		0.587 * (g * g) +
		0.114 * (b * b)
	)
	
	if (hsp > 127.5) return true
	else return false
}