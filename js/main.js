// Menu

const mainContents = document.querySelectorAll('.main-contents');
const sidebarMenuItem = document.querySelectorAll('.sidebar-menu-item');


function selectItem(){
    removeshow();
    removeHighlight();


    this.classList.add('active');
    const mainContent = document.querySelector(`.${this.id}-content`);
    mainContent.classList.add('show');

    changeMenuTitle(this.id)
}


function removeshow(){
    mainContents.forEach(item => item.classList.remove('show'));
}

function removeHighlight(){
    sidebarMenuItem.forEach(item => item.classList.remove('active'));
}

function changeMenuTitle(id){
    const menuTitle = document.querySelector('.menu-title');
    menuTitle.style.textTransform = 'capitalize'
    menuTitle.innerHTML = ` 
    <label for="">
        <span class="las la-bars"></span>
    </label> ${id}`;
}



sidebarMenuItem.forEach(item => item.addEventListener('click', selectItem));



// Add Student Modal
const addStudentBtn = document.querySelector('#addNewStudentBtn');
const addStudentModal = document.querySelector('.addStudentModal');
const closeAddBtn = document.querySelector('.closeAddBtn')



addStudentBtn.addEventListener('click', showAddModal);
closeAddBtn.addEventListener('click', removeAddModal)

function showAddModal(){
    addStudentModal.classList.add('show');
    
}

function removeAddModal(){
    addStudentModal.classList.remove('show');
    removeError()
    clearFields()
 
}



// View StudentModal
function disableViewModalContent(){
    const inputs = document.querySelector('#viewStudentForm').querySelectorAll('.input')
    inputs.forEach(input => input.disabled = true)
    document.querySelector('#viewStudentForm').querySelector('#viewStudentAddress').disabled = true
  
 }


const closeViewBtn = document.querySelector('.closeViewBtn')

const viewStudentModal = document.querySelector('.viewStudentModal')
const idInput = document.createElement('input')
idInput.setAttribute('type', 'hidden')
idInput.setAttribute('id', 'deleteID')

document.querySelector('.tableBody').addEventListener('click', (e)=>{
    const tagName = e.target.tagName

    if(tagName === 'A' || tagName === 'SPAN'){
        const id = e.target.parentElement.nextElementSibling.innerHTML
        const params = `id=${id}`
        const xhr = new XMLHttpRequest()
        xhr.open('POST', '../ajaxphp/viewSingleStudent.php', true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.onload = function() {
            if(this.status === 200){
    
               const student = JSON.parse(this.responseText)
               const viewStudentModal = document.querySelector('.viewStudentModal')
               const img = viewStudentModal.querySelector('#blah')
               const firstName = viewStudentModal.querySelector('#viewStudentfirstName')
               const lastName = viewStudentModal.querySelector('#viewStudentlastName')
               const age = viewStudentModal.querySelector('#viewStudentAge')
               const address = viewStudentModal.querySelector('#viewStudentAddress')
               const gender = viewStudentModal.querySelector('#viewStudentGender')
               const grade = viewStudentModal.querySelector('#viewStudentGrade')
               const section = viewStudentModal.querySelector('#viewStudentSection')
               
        
               img.src = `${student.student_Image}`
               firstName.value = `${student.firstName}`
               lastName.value =`${student.lastName}`
               age.value =`${student.age}`
               address.value =`${student.student_Address}`
               gender.value =`${student.gender}`
               grade.value =`${student.grade}`
               section.value =`${student.section}`
 
               
                idInput.setAttribute('value', student.id)
                document.querySelector('#viewStudentForm').append(idInput)
                
            }
        }

        xhr.send(params)
        showViewModal()
        disableViewModalContent()
    
    }

    
})



closeViewBtn.addEventListener('click', removeViewModal)


function showViewModal(){
    viewStudentModal.classList.add('show');
   
}

function removeViewModal(){
    viewStudentModal.classList.remove('show');
   
}

function removeViewModalOnly(){
    viewStudentModal.classList.remove('show');
}

// View Attendance Log
const viewALog = document.querySelector('#viewALog')
viewALog.addEventListener('click', showAttendanceLog)

function showAttendanceLog(){
    const id = document.querySelector('#deleteID').value

    const location = `/attendanceLogPage.php?id=${id}`
    window.location.replace(location)
    
}


// Settings

const user = document.querySelector('.user-wrapper')
const setting = document.querySelector('.user-settings')

user.addEventListener('click', toggleSetting)

function toggleSetting(){
    setting.classList.toggle('show')
}


// EDIT DELETE STUDENT
const editStudentBtn = document.querySelector('#editStudentBtn')
const deleteStudentBtn = document.querySelector('#deleteStudentBtn')

editStudentBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    enableViewModalContent()
    disableDeleteBtn()

})


function enableViewModalContent(){
    const inputs = document.querySelector('#viewStudentForm').querySelectorAll('.input')
    inputs.forEach(input => input.disabled = false)
    document.querySelector('#viewStudentForm').querySelector('#viewStudentAddress').disabled = false

}

function editToSubmit(){
    const editBtn = document.querySelector('#editStudentBtn')
    editBtn.setAttribute('id','submitChangeBtn')
    editBtn.innerHTML = 'Submit'
    editBtn.style.background = 'rgb(7, 223, 252)'
   
}

function submitToEdit(){
    const editBtn = document.querySelector('#submitChangeBtn')
    editBtn.setAttribute('id','editStudentBtn')
    editBtn.innerHTML = 'Edit'
    editBtn.style.background = 'rgb(38, 231, 48)'
   
}

deleteStudentBtn.addEventListener('click', () =>{
        showDeleteConfirmation()
        disableMajorButtons()
})


const yesDeleteBtn = document.querySelector('#yesDeleteBtn')
yesDeleteBtn.addEventListener('click', deleteStudent)

const noDeleteBtn = document.querySelector('#noDeleteBtn')
noDeleteBtn.addEventListener('click', ()=>{
    removeDeleteConfirmationDiv()
    enableMajorButtons()
 })
 

function deleteStudent(e){
        e.preventDefault()
        const id = document.querySelector('#deleteID').value
        const params = `id=${id}`
        const xhr = new XMLHttpRequest()
        xhr.open('POST', '../ajaxphp/deleteStudent.php', true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.onload = function(){
            tableBody.textContent = ''
            loadTable()
            attendanceTableBody.textContent = ''
            loadAttendanceTable()
            loadNumberOfStudents()
            loadFirstGradingTable()
        }
        xhr.send(params)
        removeDeleteConfirmationDiv()
        enableMajorButtons()
        removeViewModalOnly()     
}

function disableMajorButtons(){
    document.querySelector('#editStudentBtn').disabled = true
    document.querySelector('#deleteStudentBtn').disabled = true
    document.querySelector('#closeViewBtn').style.pointerEvents = 'none'
}
function enableMajorButtons(){
    document.querySelector('#editStudentBtn').disabled = false
    document.querySelector('#deleteStudentBtn').disabled = false
    document.querySelector('#closeViewBtn').style.pointerEvents = 'all'
}

function disableDeleteBtn(){
    document.querySelector('#deleteStudentBtn').disabled = true
}

function enableDeleteBtn(){
    document.querySelector('#deleteStudentBtn').disabled = false
}

function showDeleteConfirmation(){
    const deleteConfirmationDiv = document.querySelector('#deleteConfirmationDiv')
    deleteConfirmationDiv.style.display = 'block';
}

function removeDeleteConfirmationDiv(){
    const deleteConfirmationDiv = document.querySelector('#deleteConfirmationDiv')
    deleteConfirmationDiv.style.display = 'none';
}
function showSaveChangesDiv(){
    const saveChangesDiv = document.querySelector('#saveChangesDiv')
    saveChangesDiv.style.display = 'block';
}
function removeSaveChangesDiv(){
    const saveChangesDiv = document.querySelector('#saveChangesDiv')
    saveChangesDiv.style.display = 'none';
}
function showDiscardChangesDiv(){
    const discardChangesDiv = document.querySelector('#discardChangesDiv')
    discardChangesDiv.style.display = 'block';
}
function removeDiscardChangesDiv(){
    const discardChangesDiv = document.querySelector('#discardChangesDiv')
    discardChangesDiv.style.display = 'none';
}


const modifyActionDiv = document.querySelector('#modifyActionDiv')
modifyActionDiv.addEventListener('click' , (e) =>{
    e.preventDefault()
    if(e.target.id === 'editStudentBtn'){
        editToSubmit()
        // document.querySelector('#closeViewBtn').addEventListener('click', ()=>{
        //     showDiscardChangesDiv()
        // })
    }else if(e.target.id === 'submitChangeBtn'){
       showSaveChangesDiv()
    }
})


const yesSaveChangesBtn = document.querySelector('#yesSaveBtn')
yesSaveChangesBtn.addEventListener('click', (e)=>{
    editStudent(e)
    removeSaveChangesDiv()
    enableDeleteBtn()
    removeViewModal()
})

const noSaveChangesBtn = document.querySelector('#noSaveBtn')
noSaveChangesBtn.addEventListener('click', ()=>{
    removeSaveChangesDiv()
})


// need to edit the ids of the editStudent Modal

function editStudent(e){
    e.preventDefault()
    const id = document.querySelector('#deleteID').value // wrong cause im starting to get lazy my head hurts so much
    const file = document.querySelector("#vStudentImage").files[0]
    const firstName = document.querySelector('#viewStudentfirstName').value
    const lastName = document.querySelector('#viewStudentlastName').value
    const age = document.querySelector('#viewStudentAge').value
    const address = document.querySelector('#viewStudentAddress').value
    const gender = document.querySelector('#viewStudentGender').value
    const grade = document.querySelector('#viewStudentGrade').value
    const section = document.querySelector('#viewStudentSection').value
    

    const formData = new FormData()
    formData.append('id', id);
    formData.append('student_Image', file)
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('age', age)
    formData.append('student_Address', address)
    formData.append('gender', gender)
    formData.append('grade', grade)
    formData.append('section', section)

    const xhr = new XMLHttpRequest()
    xhr.open('POST', '../ajaxphp/editStudent.php', true)
    xhr.onload = function(){
        tableBody.textContent = ''
        loadTable()
        attendanceTableBody.textContent = ''
        loadAttendanceTable()
    }
    xhr.send(formData)
    submitToEdit()
   
}



// Search Student

const searchStudent = document.querySelector('#searchStudent')
searchStudent.addEventListener('keyup', search)


function search(){
    const keyword = document.querySelector('#searchStudent').value 
    const xhr = new XMLHttpRequest()
    const params = `keyword=${keyword}`
    xhr.open('POST', '../ajaxphp/searchStudent.php', true)
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.onload = function(){
        if(keyword !== ''){
            console.log(JSON.parse(this.responseText))
            const students = JSON.parse(this.responseText)
            tableBody.textContent = ''
            for(student of students){
                const dataTableRow = document.createElement('tr')
                dataTableRow.innerHTML = `
                <td><img src="${student.student_Image}" alt="image" class="studentImageTable"></td>
                <td>${student.lastName}</td>
                <td>${student.firstName}</td>
                <td>${student.grade}</td>
                <td>${student.section}</td>
                <td></span> <a class="viewStudentBtn btn cursor view"><span class="las la-eye eye-logo view" style="pointer-events:none"><span class="view" style="pointer-events:none">View</span></a></td>
                <td class="id" style="display:none">${student.id}</td>`
                tableBody.append(dataTableRow)
            }
        }else if(keyword === ''){
            tableBody.textContent = ''
            loadTable()
            
        }
    }
    xhr.send(params)
}

// CheckBox (ABsent Present)

document

// Time and Date


document.addEventListener('DOMContentLoaded', startDatenTime)

const timeDisplay = document.querySelector('.time')
const dateDisplay = document.querySelector('.date')
function startTime(){

   

    // Create Date object
    let date = new Date;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    
    // Add 0 to the time if less than 10
    hour = updateTime(hour);
    minute = updateTime(minute);
    seconds = updateTime(seconds);
    
    // set the time in the DOM
    timeDisplay.innerHTML = `${hour}:${minute}:${seconds}`
    
    // idk what does setTimeout means and how its different from setInterval
    setTimeout(() => {
        startTime()
    }, 1000);
    
    }
    
    function updateTime(time){
        if(time < 10){
            return "0" + time
        }else{
            return time
        }
    }

    function updateDay(day){
        if(day < 10){
            return "0" + day
        }else{
            return day
        }
    }

function startDate(){
    let date = new Date
    let month = date.toLocaleString('default', { month: 'long' });
    let day = date.getDate()
    let year = date.getFullYear()

    day = updateDay(day)

    dateDisplay.innerHTML = `${month} ${day}, ${year}`

 
}

setInterval(startDate, 1000)

function startDatenTime(){
    startDate()
    startTime()
}


// Attendance


let attendance = []    

const saveAttendanceBtn = document.querySelector('#saveAttendanceBtn')


const saveAttendanceDiv = document.querySelector('#saveAttendanceDiv')

saveAttendanceBtn.addEventListener('click', ()=>{
    saveAttendanceDiv.style.display = 'block'
})

const yesSaveAttendanceBtn = document.querySelector('#yesSaveAttendanceBtn')
const noSaveAttendanceBtn = document.querySelector('#noSaveAttendanceBtn')
const attendanceSavedDiv = document.querySelector('#attendanceSavedDiv')
const okAttendanceSavedBtn = document.querySelector('#okAttendanceSavedBtn')

yesSaveAttendanceBtn.addEventListener('click', saveAttendance)
noSaveAttendanceBtn.addEventListener('click', ()=>{
    saveAttendanceDiv.style.display = 'none'
})

function saveAttendance(){

    const present = document.querySelector('#attendanceTableBody').querySelectorAll('tr')
    for(i of present){
        const realPresent = i.children[2].firstElementChild
        const id = realPresent.parentElement.nextElementSibling.innerHTML
        if(realPresent.checked){
            const stdnt = {
                id:id,
                present:true
            } 
            attendance.push(stdnt)
            
        }else{
            const stdnt = {
                id:id,
                present:false
            } 
            attendance.push(stdnt)
        }
    }
    
    // console.log(attendance)
    attendanceSaved()
    saveAttendanceDiv.style.display = 'none'
    attendanceSavedDiv.style.display = 'block'
    okAttendanceSavedBtn.addEventListener('click', ()=>{
        attendanceSavedDiv.style.display = 'none'
    })

}


function attendanceSaved(){
    //clear table
    const present = document.querySelector('#attendanceTableBody').querySelectorAll('tr')

    for(p of present){
        p.children[2].firstElementChild.checked = false
    }
 

    //  save attendance record to the databases

    // Get date And Time
    const time = document.querySelector('.time').textContent
    const date = document.querySelector('.date').textContent

    const formData = new FormData()
    
    formData.append('array', JSON.stringify(attendance))
    formData.append('time', time)
    formData.append('date', date)

    const xhr = new XMLHttpRequest()
    xhr.open('POST', '../ajaxphp/saveAttendance.php', true)
    xhr.onload = function(){
        console.log(this.responseText)
    }
    xhr.send(formData)
   
    //empty attendance array
    attendance = []
    
}






// update grades table on delete 