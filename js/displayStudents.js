// It appends a every single tr on the tablebody
const tableBody = document.querySelector('.tableBody')

document.addEventListener('DOMContentLoaded', loadTable)


    function loadTable(){
        const table = document.querySelector('.studentTable')
        const xhr = new XMLHttpRequest()
        xhr.open('GET', '../ajaxphp/displayStudents.php', true)
        xhr.onload = function(){
            if(this.status === 200){
                // Convert JSON TO ARRAY
            const students = JSON.parse(this.responseText)
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
            }
        }
        xhr.send()

        // Ill add and event listener to the table to get the number of tr
        table.addEventListener('click', () =>{
            console.log(document.querySelectorAll('tbody tr'))
        })
        // console.log(document.querySelectorAll('tbody tr'))
    }


    



