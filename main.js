let storedUser = localStorage.getItem('userLogin')
let storedEmail = localStorage.getItem('userEmail')

if(storedUser)
console.log(storedUser)
if(storedEmail)
console.log(storedEmail)
document.getElementsByClassName('btn')[0].addEventListener('click',function(){
    console.log('clicked')
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    localStorage.setItem('userLogin',name)
    localStorage.setItem('userEmail',email)

})
//.addEventListener('click')