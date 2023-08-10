let storedUserObj = localStorage.getItem('userObj')

if(storedUserObj){
    console.log(JSON.parse(storedUserObj))
}
var i = 0

document.getElementsByClassName('btn')[0].addEventListener('click',function(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value

    let userObj = {
        'name':name,
        'email':email
    }

    
    userObj = JSON.stringify(userObj)

   //if(!localStorage.getItem('userObj'))
   let userObjItem = 'userObj'+i
   console.log(userObjItem)
        localStorage.setItem(userObjItem, userObj);
    i++
})
//.addEventListener('click')