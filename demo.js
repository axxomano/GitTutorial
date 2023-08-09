console.log('I Love GIT!');

document.getElementById('main-header').style.border = "4px solid black"

document.querySelector("#main > h2:nth-child(1)").style.color = 'green'

document.querySelector("#main > h2:nth-child(1)").style.fontWeight = 'bold'

document.querySelector("#items > li:nth-child(3)").style.backgroundColor = "green"

let elems = document.getElementsByClassName('list-group-item')

for(let i=0;i<elems.length;i++){
    elems[i].style.fontWeight = "bold"
}