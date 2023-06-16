
function removeLastChildren(){
    let olChildren = document.querySelector('ol')
    let newChildren = olChildren.children[olChildren.children.length - 1]
    olChildren.prepend(newChildren)
    /* console.log(olChildren)
    console.log(newChildren)
    console.log(olChildren.children[olChildren.children.lenght - 1])
 */
}

removeLastChildren();

let sections = document.querySelectorAll("section")
/* sections[1].prepend(sections[2].children[0].children[0])
sections[2].children[0].prepend(sections[1].children[0])
 */
let temp = sections[2].children[0].children[0].textContent
sections[2].children[0].children[0].textContent = sections[1].children[0].textContent
sections[1].children[0].textContent = temp


sections[2].remove();


