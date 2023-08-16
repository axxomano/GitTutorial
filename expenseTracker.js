let storedUserObj = localStorage.getItem('userObj')

if(storedUserObj){
    console.log(JSON.parse(storedUserObj))
}
var i = 0

document.getElementsByClassName('btn')[0].addEventListener('click',function(){
    let expenseAmount = document.getElementById('expenseAmount').value
    let expDescription = document.getElementById('expDescription').value
    let expenseType = document.getElementById('expenseType').value

    let userObj = {
        'expenseAmount':expenseAmount,
        'expDescription':expDescription,
        'expenseType':expenseType
    }


    userObj = JSON.stringify(userObj)

   //if(!localStorage.getItem('userObj'))
   let userObjItem = 'userObj'+i
   console.log(userObjItem)
        localStorage.setItem(userObjItem, userObj);
        let li = document.createElement('li')
        let span = document.createElement('span')
        let spanTwo = document.createElement('span')
        span.style.marginLeft = '4.5em'
        spanTwo.style.marginLeft = '4.5em'
        spanTwo.style.marginRight = '4.5em'
        span.innerText = 'Expense Decription:' + JSON.parse(userObj).expDescription 
        spanTwo.innerText = 'Expense Type:' + JSON.parse(userObj).expenseType 

        li.id = userObjItem
        li.innerText = 'Expense Amount:' + JSON.parse(userObj).expenseAmount
        li.appendChild(span)
        li.appendChild(spanTwo)

        let del = document.createElement('button')
        let edit = document.createElement('button')
        edit.innerText = 'Edit Expense'
        del.innerText = 'Delete Expense'
        edit.className = 'edit btn'
        del.className = 'del btn'
        li.appendChild(del)
        li.appendChild(edit)
        document.getElementById('expenses').append(li)
        del.addEventListener('click',function(){
            //console.log('deleted')
            localStorage.removeItem(userObjItem)
            this.parentElement.remove();
        })
        edit.addEventListener('click',function(){
            //console.log('deleted')
            let theItem = JSON.parse(localStorage.getItem(userObjItem))
            let theAmount = theItem.expenseAmount
            let theDescription = theItem.expDescription
            let theType = theItem.expenseType

            document.getElementById('expenseAmount').value = theAmount
            document.getElementById('expDescription').value = theDescription
            document.getElementById('expenseType').value = theType

            localStorage.removeItem(userObjItem)
            this.parentElement.remove();
        })
    i++
})

//.addEventListener('click')