

const addStudentForm = document.querySelector('#addStudentForm')

addStudentForm.addEventListener('submit', addStudent)

const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const age = document.querySelector('#age')
const address = document.querySelector('#student_Address')
const gender = document.querySelector('#gender')
const grade = document.querySelector('#sgrade')
const section = document.querySelector('#section')



function addStudent(e) {
    e.preventDefault()

    checkInput()
    // submitInput()

    // const file = document.querySelector("#student_Image").files[0]
    // const firstName = document.querySelector('#firstName').value
    // const lastName = document.querySelector('#lastName').value
    // const age = document.querySelector('#age').value
    // const address = document.querySelector('#student_Address').value
    // const gender = document.querySelector('#gender').value
    // const grade = document.querySelector('#sgrade').value
    // const section = document.querySelector('#section').value

    
  
    // // put the studentID to form data and use it in php file
    // const formData = new FormData()
    // formData.append('student_Image', file)
    // formData.append('firstName', firstName)
    // formData.append('lastName', lastName)
    // formData.append('age', age)
    // formData.append('student_Address', address)
    // formData.append('gender', gender)
    // formData.append('grade', grade)
    // formData.append('section', section)
   

    // const tableBody = document.querySelector('.tableBody')
    

    // const xhr = new XMLHttpRequest()
    // xhr.open('POST', '/addStudent.php', true)
    // xhr.onload = function(){
    //     tableBody.textContent = ''
    //     loadTable()
    //     attendanceTableBody.textContent = ''
    //     loadAttendanceTable()
    //     loadNumberOfStudents()
    //     loadFirstGradingTable()

    //     const justAddedStudent = JSON.parse(this.responseText)
    //     const justAddedStudentID = justAddedStudent.id

    //     const formData2 = new FormData()
    //     formData2.append('justAddedStudentID', justAddedStudentID)
    
    //     const xhr2 = new XMLHttpRequest()
    //     xhr2.open('POST', '/addPreGrades.php', true)
    //     xhr2.onload = function(){
    //         console.log(this.responseText)
    //     }
    
    //     xhr2.send(formData2)
    // }
    // xhr.send(formData)
    // showMessage() 

    // const xhr2 = new XMLHttpRequest()
    // xhr2.open('GET', '/showLastStudentID.php', true)
    // xhr2.onload = function(){
    //     const result = JSON.parse(this.responseText)
    //     const lastStudentID = Object.values(result)[0]
        
    //     const formData = new FormData()
    //     formData.append('lastStudentID', lastStudentID)
        
    // }

    // xhr2.send()

  

}

function checkInput(){

    const firstNameValue = firstName.value
    const lastNameValue =lastName.value
    const ageValue = age.value
    const addressValue = address.value
    const genderValue = gender.value
    const gradeValue = grade.value
    const sectionValue = section.value


    if(firstNameValue  === '') {
		setErrorFor(firstName, 'First Name cannot be blank');
	}else{
        setSuccessFor(firstName)
    }

    if(lastNameValue  === '') {
		setErrorFor(lastName, 'Last Name cannot be blank');
	}else{
        setSuccessFor(lastName)
    }

    if(ageValue  === '') {
		setErrorFor(age, 'Age cannot be blank');
	}else{
        setSuccessFor(age)
    }

    if(addressValue  === '') {
		setErrorFor(address, 'Address cannot be blank');
	}else{
        setSuccessFor(address)
    }

    if(genderValue === '0') {
		setErrorFor(gender, 'Gender cannot be blank');
       
	}else{
        setSuccessFor(gender)
    }

    if(gradeValue === '0') {
		setErrorFor(grade, 'Grade cannot be blank');
        
	}else{
        setSuccessFor(grade)
    }

    if(sectionValue === '0') {
		setErrorFor(section, 'Section cannot be blank');
	}else{
        setSuccessFor(section)
    }

    if(firstNameValue && lastNameValue && ageValue && addressValue && genderValue != '0' && gradeValue != '0' && sectionValue != '0'){
        sumbitInput()
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = message
}

function setSuccessFor(input){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'form-control'
}

function removeError(){
    const formControls = document.querySelectorAll('.form-control')
    formControls.forEach(formControl =>{
        formControl.className = 'form-control'
    })
}

function sumbitInput(){
    const file = document.querySelector("#student_Image").files[0]
    const firstName = document.querySelector('#firstName').value
    const lastName = document.querySelector('#lastName').value
    const age = document.querySelector('#age').value
    const address = document.querySelector('#student_Address').value
    const gender = document.querySelector('#gender').value
    const grade = document.querySelector('#sgrade').value
    const section = document.querySelector('#section').value

    
  
    // put the studentID to form data and use it in php file
    const formData = new FormData()
    formData.append('student_Image', file)
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('age', age)
    formData.append('student_Address', address)
    formData.append('gender', gender)
    formData.append('grade', grade)
    formData.append('section', section)
   

    const tableBody = document.querySelector('.tableBody')
    

    const xhr = new XMLHttpRequest()
    xhr.open('POST', '../ajaxphp/addStudent.php', true)
    xhr.onload = function(){
        tableBody.textContent = ''
        loadTable()
        attendanceTableBody.textContent = ''
        loadAttendanceTable()
        loadNumberOfStudents()
        loadFirstGradingTable()

        const justAddedStudent = JSON.parse(this.responseText)
        const justAddedStudentID = justAddedStudent.id

        const formData2 = new FormData()
        formData2.append('justAddedStudentID', justAddedStudentID)
    
        const xhr2 = new XMLHttpRequest()
        xhr2.open('POST', '../ajaxphp/addPreGrades.php', true)
        xhr2.onload = function(){
            console.log(this.responseText)
        }
    
        xhr2.send(formData2)
    }
    xhr.send(formData)

    showMessage()

}



function clearFields(){
    document.querySelector('#sImage').src = '../img/preview.jpg'
    document.querySelector('#student_Image').value = ''
    document.querySelector('#firstName').value = ''
    document.querySelector('#lastName').value = ''
    document.querySelector('#age').value = ''
    document.querySelector('#student_Address').value = ''
    document.querySelector('#gender').value = 0
    document.querySelector('#sgrade').value = 0
    document.querySelector('#section').value = 0
}



function closeModal(){
    const modal = document.querySelector('.addStudentModal');
    modal.classList.remove('show');
}

function showMessage(){
    document.querySelector('.confirmationDiv').style.opacity = '1'
    disableModalContent()
}

document.querySelector('.confirmBtn').addEventListener('click', () =>{
    clearFields()
    closeModal()
    enableModalContent()
    document.querySelector('.confirmationDiv').style.opacity = '0'
})


function disableModalContent(){
   const inputs = document.querySelector('#addStudentForm').querySelectorAll('.input')
   inputs.forEach(input => input.disabled = true)
   document.querySelector('#student_Address').disabled = true
}

function enableModalContent(){
    const inputs = document.querySelector('#addStudentForm').querySelectorAll('.input')
    inputs.forEach(input => input.disabled = false)
    document.querySelector('#student_Address').disabled = false

}


