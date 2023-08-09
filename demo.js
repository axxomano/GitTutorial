console.log('I Love GIT!');

document.getElementById('main-header').style.border = "4px solid black"

document.querySelector("#main > h2:nth-child(1)").style.color = 'green'

document.querySelector("#main > h2:nth-child(1)").style.fontWeight = 'bold'

document.querySelector("#items > li:nth-child(3)").style.backgroundColor = "green"

let elems = document.getElementsByClassName('list-group-item')

for(let i=0;i<elems.length;i++){
    elems[i].style.fontWeight = "bold"
}

let liEle = document.createElement('li')
liEle.setAttribute('class','list-group-item')
liEle.innerText = "Item 5"

document.querySelector("#items").appendChild(liEle)

let elemsbyTag = document.getElementsByTagName('li')

for(let i=0;i<elemsbyTag.length;i++){
    elemsbyTag[i].style.fontWeight = "bold"
}

document.querySelector("#items > li:nth-child(2)").style.color= "green"

var odd = document.querySelectorAll('li:nth-child(odd)')

for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = "green"
}





