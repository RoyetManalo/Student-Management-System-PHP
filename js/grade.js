
//const submitGradesBtn = document.querySelector('#submitGrades')

// Load Grades Table


const selectGrading = document.querySelector('#select-grading')
const div = document.querySelector('.gradingBtns')
const gradeDiv = document.querySelector('.gradeMessageBox')

selectGrading.addEventListener('change', () =>{
    if(selectGrading.value == 1){
        loadFirstGradingTable()
    }else if(selectGrading.value == 2){
        loadSecondGradingTable()
    }else if(selectGrading.value == 3){
        loadThirdGradingTable()
    }else if(selectGrading.value == 4){
        loadFourthGradingTable()
    }else if(selectGrading.value == 5){
        loadFinalsGradeTable()
    }
})

const gradingTableBody = document.querySelector('.gradingTableBody')

document.addEventListener('DOMContentLoaded', loadFirstGradingTable)

function loadFirstGradingTable(){
    // Clear Table First - so there no duplication
    gradingTableBody.innerHTML = ''
    div.innerHTML = ''
    gradeDiv.innerHTML = ''


    // load Table
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '../ajaxphp/firstGradeTable.php', true)
    xhr.onload = function(){
        if(this.status === 200){
            // Convert JSON TO ARRAY
        const students = JSON.parse(this.responseText)
        for(student of students){
            const dataTableRow = document.createElement('tr')
            dataTableRow.innerHTML = `
                <td>${student.lastName}</td>
                <td>${student.firstName}</td>
                <td><input type="text" class="grades" placeholder="Grades" maxlength="3" value="${student.firstGrading}"></td>
                <td class="id" style="display:none">${student.id}</td>`
                gradingTableBody.append(dataTableRow)
               
            }  

             //Render Buttons
                
                const editGradesBtn = document.createElement('button')
                editGradesBtn.innerHTML = 'Edit Grades'
                editGradesBtn.classList.add('btn', 'editGrades')
                editGradesBtn.setAttribute('id', 'editGrades')

                const submitGradesBtn = document.createElement('button')
                submitGradesBtn.innerHTML = 'Submit Grades'
                submitGradesBtn.classList.add('btn', 'submitGrades')
                submitGradesBtn.setAttribute('id', 'submitGrades')

                div.append(editGradesBtn)
                div.append(submitGradesBtn)

            // Render Message Box

            const submitGradesDiv = document.createElement('div')
            submitGradesDiv.setAttribute('id', 'submitGradesDiv')
            submitGradesDiv.setAttribute('class', 'mDiv')
            submitGradesDiv.innerHTML = `
                <h3>Save Grades?</h3>
                    <div class="mDivBnts">
                        <a class="cursor btn yesBtn" id="yesSubmitGradesBtn">Yes</a>
                        <a class="cursor btn noBtn" id="noSubmitGradesBtn">No</a>
                    </div>
            `

            const gradesSubmittedDiv = document.createElement('div')
            gradesSubmittedDiv.setAttribute('id', 'gradesSubmittedDiv')
            gradesSubmittedDiv.setAttribute('class', 'mDiv')
            gradesSubmittedDiv.innerHTML = `
                <h3>Grades Submitted</h3>
                    <div class="mDivBnts">
                        <a class="cursor btn yesBtn" id="OkGradesSubmittedBtn">OK</a>
                    </div>
            `

            gradeDiv.append(submitGradesDiv)
            gradeDiv.append(gradesSubmittedDiv)

            // console.log(submitGradesDiv, gradesSubmittedDiv)

            // Disable Submit Grades Button First and Grades input
            
            submitGradesBtn.disabled = true
            const gradesInput = document.querySelector('.gradingTableBody').querySelectorAll('.grades')
            gradesInput.forEach(input => input.disabled = true)


            // Edit Grades Btn

            //const editGradesBtn = document.querySelector('#editGrades')
            editGradesBtn.addEventListener('click', () =>{
                submitGradesBtn.disabled = false
                gradesInput.forEach(input => input.disabled = false)
            })

            // Submit Grades button Event
            // const submitGradesDiv = document.querySelector('#submitGradesDiv')
            // const gradesSubmittedDiv = document.querySelector('#gradesSubmittedDiv')
            const yesSubmitGradesBtn = document.querySelector('#yesSubmitGradesBtn')
            const noSubmitGradesBtn = document.querySelector('#noSubmitGradesBtn')
            
            submitGradesBtn.addEventListener('click', ()=>{
                submitGradesDiv.style.display = 'block'
            })

            noSubmitGradesBtn.addEventListener('click', ()=>{
                submitGradesDiv.style.display = 'none'
            })

            // document.addEventListener('DOMContentLoaded', loadFirstGrades())

            yesSubmitGradesBtn.addEventListener('click', submitGrades)
           

            let grades = []    
            function submitGrades(){
            
                    const gradeTr = document.querySelector('.gradingTableBody').querySelectorAll('tr')
                    for(i of gradeTr){
                        const gradeInput = i.children[2].firstElementChild
                        const id = gradeInput.parentElement.nextElementSibling.innerHTML
                        const gradeValue = gradeInput.value
                    
                            const stdnt = {
                                id:id,
                                firstGrading:gradeValue,
                            } 
                            grades.push(stdnt)
                            
                    }
                    
                    console.log(grades)
                    firstGradesSaved()
                    // loadFirstGrades()
                    submitGradesDiv.style.display = 'none'
                    gradesSubmittedDiv.style.display = 'block'
                    const OkGradesSubmittedBtn = document.querySelector('#OkGradesSubmittedBtn')

                    OkGradesSubmittedBtn.addEventListener('click', ()=>{
                        gradesSubmittedDiv.style.display = 'none'
                    })

            }

            function firstGradesSaved(){
                //Disable all grades input
                gradesInput.forEach(input => input.disabled = true)

                //  Save data to database
                const formData = new FormData()
                formData.append('array',JSON.stringify(grades))

                const xhr = new XMLHttpRequest()
                xhr.open('POST', '../ajaxphp/editGrades.php' ,true)
                xhr.onload = function(){
                    console.log(this.responseText)
                }
                xhr.send(formData)

                //empty attendance array
                grades = []

                
            }

            // function loadFirstGrades(){
            //       //Reload table with Data Submitted
            //       const xhr2 = new XMLHttpRequest()
            //       const formData = new FormData()
            //       formData.append('gradingPeriod', selectGrading.value)
            //       xhr2.open('POST', '/loadGrades.php', true)
            //       xhr2.onload = function(){
            //          const grades = JSON.parse(this.responseText)
            //          const inputGrades = document.querySelectorAll('.grades')
            //         //  console.log(grades)

            //         let inputGradesArray = []
               
            //         inputGrades.forEach(inputGrade =>{
            //             const id = inputGrade.parentElement.nextElementSibling.innerHTML
            //             const inputObject = {
            //                 inputGrade:inputGrade,
            //                 gradeID: `${id}01`,
            //             }
            //             inputGradesArray.push(inputObject)
            //         })

            //         // console.log(inputGradesArray)

            //         // USE Filter
            //         // This is a MAP
            //         // const combinedArray = inputGradesArray.map(function(item, index){
            //         //     return {inputGrade:item.inputGrade, gradeID:item.gradeID, grade:grades[index].grades}
            //         // })


            //         // Try Catch Error Handling
                  

            //         // try{
            //         //     const filterArray = inputGradesArray.filter(function(inputGrade, index){
            //         //         return inputGrade.gradeID === grades[index].gradeID
            //         //     }).map(function(item,index){
            //         //         return {inputGrade:item.inputGrade, gradeID:item.gradeID, grade:grades[index].grades}
            //         //     })
            //         //     console.log(filterArray)

            //         //     filterArray.forEach(inputGrade =>{
                      
            //         //         inputGrade.inputGrade.value = inputGrade.grade
                              
            //         //       })
            //         // }

            //         // catch(err){
            //         //     console.log('No Grades Available')
            //         // }
                   
            //             // const filterArray = inputGradesArray.filter(function(inputGrade, index){
            //             //     return inputGrade.gradeID === grades[index].gradeID
            //             // }).map(function(item,index){
            //             //     return {inputGrade:item.inputGrade, gradeID:item.gradeID, grade:grades[index].grades}
            //             // })
            //             // console.log(filterArray)

            //             // filterArray.forEach(inputGrade =>{
                      
            //             //     inputGrade.inputGrade.value = inputGrade.grade
                              
            //             //   })

            //       } 
            //       xhr2.send(formData)
            // }
        }

    }
    xhr.send()
    console.log('FirstGradingTable Loaded')
}



// Second Grading Table

function loadSecondGradingTable(){
     // Clear Talbe First - so there no duplication
     gradingTableBody.innerHTML = ''
     div.innerHTML = ''
     gradeDiv.innerHTML = ''

     // load Table
     const xhr = new XMLHttpRequest()
     xhr.open('GET', '../ajaxphp/secondGradeTable.php', true)
     xhr.onload = function(){
         if(this.status === 200){
             // Convert JSON TO ARRAY
         const students = JSON.parse(this.responseText)
         for(student of students){
             const dataTableRow = document.createElement('tr')
             dataTableRow.innerHTML = `
                 <td>${student.lastName}</td>
                 <td>${student.firstName}</td>
                 <td><input type="text" class="grades" placeholder="Grades" maxlength="3" value="${student.secondGrading}"></td>
                 <td class="id" style="display:none">${student.id}</td>`
                 gradingTableBody.append(dataTableRow)
                
             }

                  //Render Buttons
                
                  const editGradesBtn = document.createElement('button')
                  editGradesBtn.innerHTML = 'Edit Grades'
                  editGradesBtn.classList.add('btn', 'editGrades')
                  editGradesBtn.setAttribute('id', 'editGrades')
  
                  const submitGradesBtn = document.createElement('button')
                  submitGradesBtn.innerHTML = 'Submit Grades'
                  submitGradesBtn.classList.add('btn', 'submitGrades')
                  submitGradesBtn.setAttribute('id', 'submitGrades')
  
                  div.append(editGradesBtn)
                  div.append(submitGradesBtn)

                // Render Message Box

                const submitGradesDiv = document.createElement('div')
                submitGradesDiv.setAttribute('id', 'submitGradesDiv')
                submitGradesDiv.setAttribute('class', 'mDiv')
                submitGradesDiv.innerHTML = `
                    <h3>Save Grades?</h3>
                        <div class="mDivBnts">
                            <a class="cursor btn yesBtn" id="yesSubmitGradesBtn">Yes</a>
                            <a class="cursor btn noBtn" id="noSubmitGradesBtn">No</a>
                        </div>
                `

                const gradesSubmittedDiv = document.createElement('div')
                gradesSubmittedDiv.setAttribute('id', 'gradesSubmittedDiv')
                gradesSubmittedDiv.setAttribute('class', 'mDiv')
                gradesSubmittedDiv.innerHTML = `
                    <h3>Grades Submitted</h3>
                        <div class="mDivBnts">
                            <a class="cursor btn yesBtn" id="OkGradesSubmittedBtn">OK</a>
                        </div>
                `

                gradeDiv.append(submitGradesDiv)
                gradeDiv.append(gradesSubmittedDiv)

  
            
             
             // Disable Submit Grades Button First and Grades input
            
            submitGradesBtn.disabled = true
            const gradesInput = document.querySelector('.gradingTableBody').querySelectorAll('.grades')
            gradesInput.forEach(input => input.disabled = true)


            // Edit Grades Btn

            // const editGradesBtn = document.querySelector('#editGrades')
            editGradesBtn.addEventListener('click', () =>{
                submitGradesBtn.disabled = false
                gradesInput.forEach(input => input.disabled = false)
            })   

               // Submit Grades button Event
            //   const submitGradesDiv = document.querySelector('#submitGradesDiv')
            //   const gradesSubmittedDiv = document.querySelector('#gradesSubmittedDiv')
               const yesSubmitGradesBtn = document.querySelector('#yesSubmitGradesBtn')
               const noSubmitGradesBtn = document.querySelector('#noSubmitGradesBtn')
               
               submitGradesBtn.addEventListener('click', ()=>{
                   submitGradesDiv.style.display = 'block'
               })
   
               noSubmitGradesBtn.addEventListener('click', ()=>{
                   submitGradesDiv.style.display = 'none'
               })
   
            //    document.addEventListener('DOMContentLoaded', loadSecondGrades())
   
               yesSubmitGradesBtn.addEventListener('click', submitGrades2)
              


               let grades = []    
               function submitGrades2(){
               
                       const gradeTr = document.querySelector('.gradingTableBody').querySelectorAll('tr')
                       for(i of gradeTr){
                           const gradeInput = i.children[2].firstElementChild
                           const id = gradeInput.parentElement.nextElementSibling.innerHTML
                           const gradeValue = gradeInput.value
                       
                            const stdnt = {
                                id:id,
                                secondGrading:gradeValue,
                            } 
                               grades.push(stdnt)
                               
                       }
                       console.log(grades)
                       secondGradesSaved()
                    //    loadSecondGrades()
                       submitGradesDiv.style.display = 'none'
                       gradesSubmittedDiv.style.display = 'block'
                       const OkGradesSubmittedBtn = document.querySelector('#OkGradesSubmittedBtn')
                       OkGradesSubmittedBtn.addEventListener('click', ()=>{
                           gradesSubmittedDiv.style.display = 'none'
                       })
   
   
               }
   
               function secondGradesSaved(){
                   //Disable all grades input
                   gradesInput.forEach(input => input.disabled = true)

                   //  Save data to database
                   const formData = new FormData()
                   formData.append('array',JSON.stringify(grades))
   
                   const xhr = new XMLHttpRequest()
                   xhr.open('POST', '../ajaxphp/editGrades2.php' ,true)
                   xhr.onload = function(){
                       console.log(this.responseText)
                   }
                   xhr.send(formData)
   
                   //empty attendance array
                   grades = []
                   
               }

        //        function loadSecondGrades(){
        //         //Reload table with Data Submitted
        //         const xhr2 = new XMLHttpRequest()
        //         const formData = new FormData()
        //         formData.append('gradingPeriod', selectGrading.value)
        //         xhr2.open('POST', '/loadGrades.php', true)
        //         xhr2.onload = function(){
        //            const grades = JSON.parse(this.responseText)
        //            const inputGrades = document.querySelectorAll('.grades')
        //         //    console.log(grades)

        //            let inputGradesArray = []
             
        //           inputGrades.forEach(inputGrade =>{
        //               const id = inputGrade.parentElement.nextElementSibling.innerHTML
        //               const inputObject = {
        //                   inputGrade:inputGrade,
        //                   gradeID: `${id}02`,
        //               }
        //               inputGradesArray.push(inputObject)
        //           })

        //         //   console.log(inputGradesArray)

                 
        //             //   const filterArray = inputGradesArray.filter(function(inputGrade, index){
        //             //       return inputGrade.gradeID === grades[index].gradeID
        //             //   }).map(function(item,index){
        //             //       return {inputGrade:item.inputGrade, gradeID:item.gradeID, grade:grades[index].grades}
        //             //   })
        //             //   console.log(filterArray)

        //             //   filterArray.forEach(inputGrade =>{
                    
        //             //       inputGrade.inputGrade.value = inputGrade.grade
                            
        //             //     })

        //         } 
        //         xhr2.send(formData)
        //   }

        }
    }
    xhr.send()
    console.log('SecondGradingTable Loaded')
}


function loadThirdGradingTable(){
     // Clear Talbe First - so there no duplication
     gradingTableBody.innerHTML = ''
     div.innerHTML = ''
     gradeDiv.innerHTML = ''

     // load Table
     const xhr = new XMLHttpRequest()
     xhr.open('GET', '../ajaxphp/thirdGradeTable.php', true)
     xhr.onload = function(){
         if(this.status === 200){
             // Convert JSON TO ARRAY
         const students = JSON.parse(this.responseText)
         for(student of students){
             const dataTableRow = document.createElement('tr')
             dataTableRow.innerHTML = `
                 <td>${student.lastName}</td>
                 <td>${student.firstName}</td>
                 <td><input type="text" class="grades" placeholder="Grades" maxlength="3" value="${student.thirdGrading}"></td>
                 <td class="id" style="display:none">${student.id}</td>`
                 gradingTableBody.append(dataTableRow)
                
             }

                  //Render Buttons
                
                  const editGradesBtn = document.createElement('button')
                  editGradesBtn.innerHTML = 'Edit Grades'
                  editGradesBtn.classList.add('btn', 'editGrades')
                  editGradesBtn.setAttribute('id', 'editGrades')
  
                  const submitGradesBtn = document.createElement('button')
                  submitGradesBtn.innerHTML = 'Submit Grades'
                  submitGradesBtn.classList.add('btn', 'submitGrades')
                  submitGradesBtn.setAttribute('id', 'submitGrades')
  
                  div.append(editGradesBtn)
                  div.append(submitGradesBtn)

                // Render Message Box

                const submitGradesDiv = document.createElement('div')
                submitGradesDiv.setAttribute('id', 'submitGradesDiv')
                submitGradesDiv.setAttribute('class', 'mDiv')
                submitGradesDiv.innerHTML = `
                    <h3>Save Grades?</h3>
                        <div class="mDivBnts">
                            <a class="cursor btn yesBtn" id="yesSubmitGradesBtn">Yes</a>
                            <a class="cursor btn noBtn" id="noSubmitGradesBtn">No</a>
                        </div>
                `

                const gradesSubmittedDiv = document.createElement('div')
                gradesSubmittedDiv.setAttribute('id', 'gradesSubmittedDiv')
                gradesSubmittedDiv.setAttribute('class', 'mDiv')
                gradesSubmittedDiv.innerHTML = `
                    <h3>Grades Submitted</h3>
                        <div class="mDivBnts">
                            <a class="cursor btn yesBtn" id="OkGradesSubmittedBtn">OK</a>
                        </div>
                `

                gradeDiv.append(submitGradesDiv)
                gradeDiv.append(gradesSubmittedDiv)

  
               // Disable Submit Grades Button First and Grades input
            
            submitGradesBtn.disabled = true
            const gradesInput = document.querySelector('.gradingTableBody').querySelectorAll('.grades')
            gradesInput.forEach(input => input.disabled = true)


            // Edit Grades Btn

            // const editGradesBtn = document.querySelector('#editGrades')
            editGradesBtn.addEventListener('click', () =>{
                submitGradesBtn.disabled = false
                gradesInput.forEach(input => input.disabled = false)
            })  

               // Submit Grades button Event
            //    const submitGradesDiv = document.querySelector('#submitGradesDiv')
            //    const gradesSubmittedDiv = document.querySelector('#gradesSubmittedDiv')
               const yesSubmitGradesBtn = document.querySelector('#yesSubmitGradesBtn')
               const noSubmitGradesBtn = document.querySelector('#noSubmitGradesBtn')
               
               submitGradesBtn.addEventListener('click', ()=>{
                   submitGradesDiv.style.display = 'block'
               })
   
               noSubmitGradesBtn.addEventListener('click', ()=>{
                   submitGradesDiv.style.display = 'none'
               })
   
            //    document.addEventListener('DOMContentLoaded', loadThirdGrades())
   
               yesSubmitGradesBtn.addEventListener('click', submitGrades3)
              

               let grades = []    
               function submitGrades3(){
               
                const gradeTr = document.querySelector('.gradingTableBody').querySelectorAll('tr')
                for(i of gradeTr){
                    const gradeInput = i.children[2].firstElementChild
                    const id = gradeInput.parentElement.nextElementSibling.innerHTML
                    const gradeValue = gradeInput.value
                
                        const stdnt = {
                            id:id,
                            thirdGrading:gradeValue,
                        } 
                        grades.push(stdnt)
                        
                }
                console.log(grades)
                thirdGradesSaved()
                // loadThirdGrades()
                submitGradesDiv.style.display = 'none'
                gradesSubmittedDiv.style.display = 'block'
                const OkGradesSubmittedBtn = document.querySelector('#OkGradesSubmittedBtn')
                OkGradesSubmittedBtn.addEventListener('click', ()=>{
                    gradesSubmittedDiv.style.display = 'none'
                })

   
               }
   
               function thirdGradesSaved(){
                         //Disable all grades input
                         gradesInput.forEach(input => input.disabled = true)

                         //  Save data to database
                         const formData = new FormData()
                         formData.append('array',JSON.stringify(grades))
         
                         const xhr = new XMLHttpRequest()
                         xhr.open('POST', '../ajaxphp/editGrades3.php' ,true)
                         xhr.onload = function(){
                             console.log(this.responseText)
                         }
                         xhr.send(formData)
         
                         //empty attendance array
                         grades = []
                   
               }

        //        function loadThirdGrades(){
        //         //Reload table with Data Submitted
        //         const xhr2 = new XMLHttpRequest()
        //         const formData = new FormData()
        //         formData.append('gradingPeriod', selectGrading.value)
        //         xhr2.open('POST', '/loadGrades.php', true)
        //         xhr2.onload = function(){
        //            const grades = JSON.parse(this.responseText)
        //            const inputGrades = document.querySelectorAll('.grades')
        //         //    console.log(grades)

        //            let inputGradesArray = []
             
        //           inputGrades.forEach(inputGrade =>{
        //               const id = inputGrade.parentElement.nextElementSibling.innerHTML
        //               const inputObject = {
        //                   inputGrade:inputGrade,
        //                   gradeID: `${id}03`,
        //               }
        //               inputGradesArray.push(inputObject)
        //           })

        //         //   console.log(inputGradesArray)

                 
        //             //   const filterArray = inputGradesArray.filter(function(inputGrade, index){
        //             //       return inputGrade.gradeID === grades[index].gradeID
        //             //   }).map(function(item,index){
        //             //       return {inputGrade:item.inputGrade, gradeID:item.gradeID, grade:grades[index].grades}
        //             //   })
        //             //   console.log(filterArray)

        //             //   filterArray.forEach(inputGrade =>{
                    
        //             //       inputGrade.inputGrade.value = inputGrade.grade
                            
        //             //     })

        //         } 
        //         xhr2.send(formData)
        //   }
            
            
         }

        }
    xhr.send()
    console.log('ThirdGradingTable Loaded')
}


function loadFourthGradingTable(){
     // Clear Talbe First - so there no duplication
     gradingTableBody.innerHTML = ''
     div.innerHTML = ''
     gradeDiv.innerHTML = ''

     // load Table
     const xhr = new XMLHttpRequest()
     xhr.open('GET', '../ajaxphp/fourthGradeTable.php', true)
     xhr.onload = function(){
         if(this.status === 200){
             // Convert JSON TO ARRAY
         const students = JSON.parse(this.responseText)
         for(student of students){
             const dataTableRow = document.createElement('tr')
             dataTableRow.innerHTML = `
                 <td>${student.lastName}</td>
                 <td>${student.firstName}</td>
                 <td><input type="text" class="grades" placeholder="Grades" maxlength="3" value="${student.fourthGrading}"></td>
                 <td class="id" style="display:none">${student.id}</td>`
                 gradingTableBody.append(dataTableRow)
                
             } 
             
                  //Render Buttons
                
                  const editGradesBtn = document.createElement('button')
                  editGradesBtn.innerHTML = 'Edit Grades'
                  editGradesBtn.classList.add('btn', 'editGrades')
                  editGradesBtn.setAttribute('id', 'editGrades')
  
                  const submitGradesBtn = document.createElement('button')
                  submitGradesBtn.innerHTML = 'Submit Grades'
                  submitGradesBtn.classList.add('btn', 'submitGrades')
                  submitGradesBtn.setAttribute('id', 'submitGrades')
  
                  div.append(editGradesBtn)
                  div.append(submitGradesBtn)

               // Render Message Box

               const submitGradesDiv = document.createElement('div')
               submitGradesDiv.setAttribute('id', 'submitGradesDiv')
               submitGradesDiv.setAttribute('class', 'mDiv')
               submitGradesDiv.innerHTML = `
                   <h3>Save Grades?</h3>
                       <div class="mDivBnts">
                           <a class="cursor btn yesBtn" id="yesSubmitGradesBtn">Yes</a>
                           <a class="cursor btn noBtn" id="noSubmitGradesBtn">No</a>
                       </div>
               `

               const gradesSubmittedDiv = document.createElement('div')
               gradesSubmittedDiv.setAttribute('id', 'gradesSubmittedDiv')
               gradesSubmittedDiv.setAttribute('class', 'mDiv')
               gradesSubmittedDiv.innerHTML = `
                   <h3>Grades Submitted</h3>
                       <div class="mDivBnts">
                           <a class="cursor btn yesBtn" id="OkGradesSubmittedBtn">OK</a>
                       </div>
               `

               gradeDiv.append(submitGradesDiv)
               gradeDiv.append(gradesSubmittedDiv)

  
               // Disable Submit Grades Button First and Grades input
            
            submitGradesBtn.disabled = true
            const gradesInput = document.querySelector('.gradingTableBody').querySelectorAll('.grades')
            gradesInput.forEach(input => input.disabled = true)


            // Edit Grades Btn

            // const editGradesBtn = document.querySelector('#editGrades')
            editGradesBtn.addEventListener('click', () =>{
                submitGradesBtn.disabled = false
                gradesInput.forEach(input => input.disabled = false)
            })

               // Submit Grades button Event
            //    const submitGradesDiv = document.querySelector('#submitGradesDiv')
            // const gradesSubmittedDiv = document.querySelector('#gradesSubmittedDiv')
            const yesSubmitGradesBtn = document.querySelector('#yesSubmitGradesBtn')
            const noSubmitGradesBtn = document.querySelector('#noSubmitGradesBtn')
            
            submitGradesBtn.addEventListener('click', ()=>{
                submitGradesDiv.style.display = 'block'
            })

            noSubmitGradesBtn.addEventListener('click', ()=>{
                submitGradesDiv.style.display = 'none'
            })

            // document.addEventListener('DOMContentLoaded', loadFourthGrades())

            yesSubmitGradesBtn.addEventListener('click', submitGrades4)
           
               let grades = []    
               function submitGrades4(){
               
                       const gradeTr = document.querySelector('.gradingTableBody').querySelectorAll('tr')
                       for(i of gradeTr){
                           const gradeInput = i.children[2].firstElementChild
                           const id = gradeInput.parentElement.nextElementSibling.innerHTML
                           const gradeValue = gradeInput.value
                       
                            const stdnt = {
                                id:id,
                                fourthGrading:gradeValue,
                            } 
                               grades.push(stdnt)
                               
                       }
                       console.log(grades)
                       fourthGradesSaved()
                    //    loadFouthGrades()
                       submitGradesDiv.style.display = 'none'
                       gradesSubmittedDiv.style.display = 'block'
                       const OkGradesSubmittedBtn = document.querySelector('#OkGradesSubmittedBtn')
                       OkGradesSubmittedBtn.addEventListener('click', ()=>{
                           gradesSubmittedDiv.style.display = 'none'
                       })
   
   
               }
   
               function fourthGradesSaved(){
                       //Disable all grades input
                       gradesInput.forEach(input => input.disabled = true)

                       //  Save data to database
                       const formData = new FormData()
                       formData.append('array',JSON.stringify(grades))
       
                       const xhr = new XMLHttpRequest()
                       xhr.open('POST', '../ajaxphp/editGrades4.php' ,true)
                       xhr.onload = function(){
                           console.log(this.responseText)
                       }
                       xhr.send(formData)
       
                       //empty attendance array
                       grades = []
                   
               }

        //        function loadFourthGrades(){
        //         //Reload table with Data Submitted
        //         const xhr2 = new XMLHttpRequest()
        //         const formData = new FormData()
        //         formData.append('gradingPeriod', selectGrading.value)
        //         xhr2.open('POST', '/loadGrades.php', true)
        //         xhr2.onload = function(){
        //            const grades = JSON.parse(this.responseText)
        //            const inputGrades = document.querySelectorAll('.grades')
        //         //    console.log(grades)

        //            let inputGradesArray = []
             
        //           inputGrades.forEach(inputGrade =>{
        //               const id = inputGrade.parentElement.nextElementSibling.innerHTML
        //               const inputObject = {
        //                   inputGrade:inputGrade,
        //                   gradeID: `${id}04`,
        //               }
        //               inputGradesArray.push(inputObject)
        //           })

        //         //   console.log(inputGradesArray)

                 
        //             //   const filterArray = inputGradesArray.filter(function(inputGrade, index){
        //             //       return inputGrade.gradeID === grades[index].gradeID
        //             //   }).map(function(item,index){
        //             //       return {inputGrade:item.inputGrade, gradeID:item.gradeID, grade:grades[index].grades}
        //             //   })
        //             //   console.log(filterArray)

        //             //   filterArray.forEach(inputGrade =>{
                    
        //             //       inputGrade.inputGrade.value = inputGrade.grade
                            
        //             //     })

        //         } 
        //         xhr2.send(formData)
        //   }
        }

        }
        xhr.send()
    console.log('FourthGradingTable Loaded')
}



function loadFinalsGradeTable(){
     // Clear Talbe First - so there no duplication
     gradingTableBody.innerHTML = ''
     div.innerHTML = ''

     // load Table
     const xhr = new XMLHttpRequest()
     xhr.open('GET', '../ajaxphp/averageGradeTable.php', true)
     xhr.onload = function(){
         if(this.status === 200){
             // Convert JSON TO ARRAY
         const students = JSON.parse(this.responseText)
         for(student of students){
             const dataTableRow = document.createElement('tr')
             dataTableRow.innerHTML = `
                 <td>${student.lastName}</td>
                 <td>${student.firstName}</td>
                 <td>${student.average}</td>
                 <td class="id" style="display:none">${student.id}</td>`
                 gradingTableBody.append(dataTableRow)
                
             } 
            }
        }
        xhr.send()
    console.log('FinalsGradeTable Loaded') 
}


// Find an optimal way to get and display the average grades
// -Tommorow










    