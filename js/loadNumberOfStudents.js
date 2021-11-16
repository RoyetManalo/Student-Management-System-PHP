document.addEventListener('DOMContentLoaded', loadNumberOfStudents)



    function loadNumberOfStudents(){
        const xhr = new XMLHttpRequest()
        xhr.open('POST', '../ajaxphp/loadNumberOfStudents.php', true)
        xhr.onload = function(){
           const numberOfStudents = JSON.parse(this.responseText)
           const totalStudents = document.querySelector('.totalStudents')
           const femaleStudents = document.querySelector('.femaleStudents')
           const maleStudents = document.querySelector('.maleStudents')
           
           totalStudents.innerHTML = `${numberOfStudents.numberOfStudents}`
           femaleStudents.innerHTML = `${numberOfStudents.femaleStudents}`
           maleStudents.innerHTML = `${numberOfStudents.maleStudents}`
        }
        xhr.send()
    }

