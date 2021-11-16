const backToDashboard = document.querySelector('#backToDashboardBtn')

backToDashboard.addEventListener('click', backToDashBoard)

function backToDashBoard(){
    const location = '/dashboard.php'
    window.location.replace(location)
}

document.addEventListener('DOMContentLoaded', loadAttendanceLogPage)

function loadAttendanceLogPage(){

    // Get the $_GET['id'] using js
    var queryDict = {}
    location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})
    
    const id = queryDict.id
    const formData = new FormData()
    formData.append('id', id)

    const xhr = new XMLHttpRequest()
    xhr.open('POST', '../ajaxphp/attendanceLog.php', true)
    xhr.onload = function(){
        const attendanceLogTableBody = document.querySelector('#attendanceLogTableBody')
        const student = JSON.parse(this.responseText)
        document.querySelector('#studentName').textContent = `${student[0].firstName} ${student[0].lastName}`
        const attendanceLog = student[1]
        
        for(log of attendanceLog){
                
                const prsnt = log.Present
                if(prsnt === '1'){
                    log.Present = 'Present'
                }else if(prsnt === '0'){
                   log.Present = 'Absent'
                }
         
                const dataTableRow = document.createElement('tr')
                dataTableRow.innerHTML = `
                <td>${log.Date}</td>
                <td>${log.Time}</td>
                <td>${log.Present}</td>`
                attendanceLogTableBody.append(dataTableRow)
        }
    }
    xhr.send(formData)

    
}


