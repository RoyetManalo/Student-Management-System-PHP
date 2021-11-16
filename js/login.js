const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', login)

function login(e){
    e.preventDefault()

    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    if(username !== '' && password !== ''){
        const params = `username=${username}&password=${password}`

        const xhr = new XMLHttpRequest()
        xhr.open('POST', '../ajaxphp/login.php', true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.onload = function(){
            if(this.status === 200){
               if (this.responseText === '1'){
                     window.location.replace('http://localhost:8080/dashboard.php')
               }else{
                   showMessage('Wrong Credentials')
               }
            
            }
           
        }
        // Arrow Fucntion not working on onload
        xhr.send(params)
        // Check the credentials before redirecting to another page
        // window.location.replace('http://localhost:8080/dashboard.php')
    }else{
        showMessage('Please Put In Fields')
        setTimeout(() =>{
           document.querySelector('.messageDiv').style.opacity = '0'
        },3000)
    }

   

    function showMessage(msg){
        // document.querySelector('.messageDiv').textContent = ''
        // make the message dynamic
        document.querySelector('.messageDiv').style.opacity = '1'
         document.querySelector('.messageDiv').innerHTML = msg
    }
}