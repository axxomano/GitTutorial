var mode = 'add'
window.addEventListener("DOMContentLoaded",()=>{
    //let storedUserObj = localStorage.getItem('userObj')

    axios.get("https://crudcrud.com/api/175ff33617f54bb195572008f1b4306d/appointmentData/").then(
        (resp)=>{
            console.log(resp)
            for(let i=0;i<resp.data.length;i++){
                showUseronScreen(resp.data[i].name,resp.data[i].role,resp.data[i]._id)
            }
        }).catch((err)=>{
            console.log(err)
        })
})

//if(storedUserObj){
//    console.log(JSON.parse(storedUserObj))
//}
var i = 0,putID = ""

document.getElementsByClassName('btn')[0].addEventListener('click',function(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value

    let userObj = {
        'name':name,
        'role':email
    }

    if(mode = 'edit'){
        axios.put("https://crudcrud.com/api/175ff33617f54bb195572008f1b4306d/appointmentData/"+putID,userObj).then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
        mode = 'add'
        return
    }

    userObj = JSON.stringify(userObj)

    axios.post("https://crudcrud.com/api/175ff33617f54bb195572008f1b4306d/appointmentData/",userObj).then((response)=>{
        console.log(response)
        showUseronScreen(userObj.name,userObj.role)
    }).catch((err)=>{
        console.log(err)
    })

    
   //if(!localStorage.getItem('userObj'))
   console.log(userObjItem)
        //localStorage.setItem(userObjItem, userObj);
  
    i++
})

//.addEventListener('click')

function showUseronScreen(name,email,userObjItem){
    let li = document.createElement('li')
    li.id = userObjItem
    li.innerText = 'Name:' + name + 'Email:' + email+''
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
        //localStorage.removeItem(userObjItem)
        //sxios delete
        axios.delete("https://crudcrud.com/api/175ff33617f54bb195572008f1b4306d/appointmentData/"+userObjItem).then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })

        
        this.parentElement.remove();
    })
    edit.addEventListener('click',function(){
        //console.log('deleted')
        //let theItem = JSON.parse(localStorage.getItem(userObjItem))
        //axios get

        let theUser = name
        let theEmail = email
        putID = this.id

        document.getElementById('name').value = theUser
        document.getElementById('email').value = theEmail

        mode = 'edit'
        this.parentElement.remove();
    })
}