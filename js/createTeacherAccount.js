const createTeacherAccountForm = document.querySelector('#createTeacherAccountForm')

createTeacherAccountForm.addEventListener('submit', createTeacherAccount)

function createTeacherAccount(e){
    e.preventDefault()
    console.log('Okay')
    const firstName = document.querySelector('#firstName').value
    const lastName = document.querySelector('#lastName').value
    const userName = document.querySelector('#userName').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const confirmPassword = document.querySelector('#confirmPassword').value

    //form validation
    if(password === confirmPassword){
        const formData = new FormData()
        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
        formData.append('userName', userName)
        formData.append('email', email)
        formData.append('password', password)
        
    
        const xhr = new XMLHttpRequest()
        xhr.open('POST', '../ajaxphp/createTeacherAccount.php' ,true)
        xhr.onload = function(){
            console.log(this.responseText)
        }
        xhr.send(formData)
        teacherAdded()
    }else{
        // Change to proper Message
        alert('Confirm Password')
    }

    
}


function teacherAdded(){
    //Clear form
    document.querySelector('#firstName').value = ''
    document.querySelector('#lastName').value= ''
    document.querySelector('#userName').value=''
    document.querySelector('#email').value=''
    document.querySelector('#password').value = ''
    document.querySelector('#confirmPassword').value =''
    //go to login page
    const location = window.location.hostname
    window.location.replace(location)
}