let storedUserObj = localStorage.getItem('userObj')

if(storedUserObj){
    console.log(JSON.parse(storedUserObj))
}

document.getElementsByClassName('btn')[0].addEventListener('click',function(){
    console.log('clicked')
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value

    let userObj = {
        'name':name,
        'email':email
    }

    userObj = JSON.stringify(userObj)

    localStorage.setItem('userObj',userObj)

})
//.addEventListener('click')