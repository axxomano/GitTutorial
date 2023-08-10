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
        let li = document.createElement('li')
        li.id = userObjItem
        li.innerText = 'Name:' + JSON.parse(userObj).name + 'Email:' + JSON.parse(userObj).email +''
        let del = document.createElement('button')
        let edit = document.createElement('button')
        edit.innerText = 'Edit'
        del.innerText = 'Delete'
        edit.className = 'edit'
        del.className = 'del'
        li.appendChild(del)
        li.appendChild(edit)
        document.getElementById('users').append(li)
        del.addEventListener('click',function(){
            //console.log('deleted')
            localStorage.removeItem(userObjItem)
            this.parentElement.remove();
        })
        edit.addEventListener('click',function(){
            //console.log('deleted')
            let theItem = JSON.parse(localStorage.getItem(userObjItem))
            let theUser = theItem.name
            let theEmail = theItem.email

            document.getElementById('name').value = theUser
            document.getElementById('email').value = theEmail
            userObjItem.email
            localStorage.removeItem(userObjItem)
            this.parentElement.remove();
        })
    i++
})

//.addEventListener('click')