// It appends a every single tr on the tablebody
const attendanceTableBody = document.querySelector('#attendanceTableBody')

document.addEventListener('DOMContentLoaded', loadAttendanceTable)

function loadAttendanceTable(){
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '../ajaxphp/attendanceTable.php', true)
    xhr.onload = function(){
        if(this.status === 200){
            // Convert JSON TO ARRAY
        const students = JSON.parse(this.responseText)
        for(student of students){
            const dataTableRow = document.createElement('tr')
            dataTableRow.innerHTML = `
                <td>${student.lastName}</td>
                <td>${student.firstName}</td>
                <td><input type="checkbox" class="present" name="present" value="true"> <label for="present">Present</label> </td>
                <td class="id" style="display:none">${student.id}</td>`
                attendanceTableBody.append(dataTableRow)
               
            }
        }
    }
    xhr.send()
}

    



