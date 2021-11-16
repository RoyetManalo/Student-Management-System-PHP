<?php
include('inc/autoloader.php');
include('config/config.php');
session_start();
$teachers_ID = $_SESSION['teacherID'];



?>
<?php include 'inc/header.php'; ?>

<!-- SIDEBAR -->

<div class="sidebar">
    <div class="sidebar-logo">
        <h2><span class="las la-cogs"></span>Student Management &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;System</h2>
    </div>
    <div class="sidebar-menu">
        <ul>
            <li>
                <a class="cursor sidebar-menu-item active" id="dashboard"><span class="las la-igloo"></span><span>Dashboard</span></a>
            </li>
        </ul>
        <ul>
            <li>
                <a class="cursor sidebar-menu-item" id="attendance"><span class="las la-clipboard-list"></span><span>Attendance</span></a>
            </li>
        </ul>
        <ul>
            <li>
                <a class="cursor sidebar-menu-item" id="students"><span class="las la-users"></span><span>Students</span></a>
            </li>
        </ul>
        <ul>
            <li>
                <a class="cursor sidebar-menu-item" id="grade"><span class="las la-percent"></span><span>Grades</span></a>
            </li>
        </ul>
    </div>
</div>

<!-- MAIN CONTENT -->
<div class="main-content">
    <header class="header">
        <h2 class="menu-title">
            <label for="">
                <span class="las la-bars"></span>
            </label>
            Dashboard
        </h2>
        <div class="user-wrapper">
            <img src="img/preview.jpg" alt="" width="40px" height="40px">
            <div>
                <h4><?php echo  $_SESSION['username']; ?></h4>
                <small>Adviser</small>
            </div>
        </div>
    </header>
    <div class="user-settings">
        <a href="#" class="cursor">Account Settings</a> </br>
        <a href="<?php echo ROOT_URL; ?>" class="cursor">Log Out</a>
    </div>

    <main>
        <!-- Dashboard -->
        <div class="dashboard-content main-contents show">
            <div class="cards">
                <div class="card-single">
                    <div>
                        <h4 class="totalStudents">0</h4>
                        <span>Students</span>
                    </div>
                    <div>
                        <span class="las la-user"></span>
                    </div>
                </div>
                <div class="card-single">
                    <div>
                        <h4 class="femaleStudents">0</h4>
                        <span>Female</span>
                    </div>
                    <div>
                        <span class="las la-female"></span>
                    </div>
                </div>
                <div class="card-single">
                    <div>
                        <h4 class="maleStudents">0</h4>
                        <span>Male</span>
                    </div>
                    <div>
                        <span class="las la-male"></span>
                    </div>
                </div>
                <div class="card-single">
                    <div>
                        <h4>1</h4>
                        <span>Handsome</span>
                    </div>
                    <div>
                        <span class="las la-user"></span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Attendance -->
        <div class="attendance-content main-contents">
            <div class="searchAdd">
                <div class="search-wrapper">
                    <span class="las la-search"></span>
                    <input type="text" placeholder="Search By Last Name">
                </div>
                <div class="dateNTime">
                    <span class="date">January 05, 2021</span> <br>
                    <span class="time">12:00 am</span>
                </div>
            </div>


            <table class="attendanceTable">
                <thead>
                    <tr class="trheaders">
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody id="attendanceTableBody">

                </tbody>
            </table>

            <div class="saveAttendanceDiv">
                <a class="deleteBtn btn" id="saveAttendanceBtn">Save Attendance</a>
            </div>

            <!-- Message Box -->

            <div id="saveAttendanceDiv" class="mDiv">
                <h3>Save Attendance?</h3>
                <div class="mDivBnts">
                    <a class="cursor btn yesBtn" id="yesSaveAttendanceBtn">Yes</a>
                    <a class="cursor btn noBtn" id="noSaveAttendanceBtn">No</a>
                </div>
            </div>
            <div id="attendanceSavedDiv" class="mDiv">
                <h3>Attendance Saved</h3>
                <div class="mDivBnts">
                    <a class="cursor btn  yesBtn" id="okAttendanceSavedBtn">OK</a>
                </div>
            </div>

        </div>
        <!-- Students -->
        <div class="students-content main-contents">
            <div class="searchAdd">
                <div class="search-wrapper">
                    <span class="las la-search"></span>
                    <input type="text" placeholder="Search By Last Name" id="searchStudent">
                </div>
                <a class="cursor addNewStudentBtn" id="addNewStudentBtn">Add New Student</a>
            </div>
            <table class="studentTable">
                <thead>
                    <tr class="trheaders">
                        <th>Student Image</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Grade</th>
                        <th>Section</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody class="tableBody">
                </tbody>
            </table>

        </div>
        <!-- Grade -->
        <div class="grade-content main-contents">
            <div id="grade-container">
                <div class="selectGradingDiv">
                    <select name="grading" class="select-grading" id="select-grading">
                        <option selected value="1">1st Grading</option>
                        <option value="2">2nd Grading</option>
                        <option value="3">3rd Grading</option>
                        <option value="4">4th Grading</option>
                        <option value="5">Final Grade</option>
                    </select>
                </div>

                <table class="gradingTable">
                    <thead>
                        <tr class="trheaders">
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Grades</th>
                        </tr>
                    </thead>
                    <tbody class="gradingTableBody">

                    </tbody>
                </table>
                <div class="gradingBtns">

                </div>

                <div class="gradeMessageBox">

                </div>
            </div>
        </div>
    </main>
</div>

<div class="dashboardContainer">
    <!-- Add Student Modal -->
    <div class="addStudentModal" id="addStudentModal">
        <div class="modalContent">
            <div class="upperActionDiv">
                <div class="modalTitle">Add New Student</div>
                <a class="closeAddBtn cursor closeModalBtn">X</a>
            </div>
            <form id="addStudentForm" enctype="multipart/form-data">
                <div class="grid grid-3">
                    <div class="imageDiv flex">
                        <div class="studentImage">
                            <img src="img/preview.jpg" alt="Image" id="sImage">
                        </div>
                        <input type="file" id="student_Image" class="inputFile input" name="image" onchange="document.getElementById('sImage').src = window.URL.createObjectURL(this.files[0])">
                        <!-- <div class="ID">
                            <input type="text" name="student_ID" disabled class="studentIDField">
                            <a class="generateID">Generate</a>
                        </div> -->
                    </div>
                    <div class="primaryInfoDiv">
                        <div class="flex">
                            <div class="form-control">
                                <input type="text" placeholder="First Name" class="inputData input" name="firstName" id="firstName">
                                <i class="fas fa-check-circle"></i>
                                <i class="fas fa-exclamation-circle"></i>
                                <small>Error Message</small>
                            </div>

                            <div class="form-control">
                                <input type="text" placeholder="Last Name" class="inputData input" name="lastName" id="lastName">
                                <i class="fas fa-check-circle"></i>
                                <i class="fas fa-exclamation-circle"></i>
                                <small>Error Message</small>
                            </div>

                            <div class="form-control">
                                <input type="text" placeholder="Age" class="inputData input" name="age" id="age">
                                <i class="fas fa-check-circle"></i>
                                <i class="fas fa-exclamation-circle"></i>
                                <small>Error Message</small>
                            </div>

                            <div class="form-control">
                                <textarea name="student_Address" placeholder="Address" id="student_Address"></textarea class="inputData input"> 
                                <i class="fas fa-check-circle"></i>
                                <i class="fas fa-exclamation-circle"></i>
                                <small>Error Message</small>
                            </div>

                            <div class="form-control">
                                <select name="gender" class="inputData input" id="gender">
                                    <option disabled selected value="0">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <i class="fas fa-check-circle"></i>
                                <i class="fas fa-exclamation-circle"></i>
                                <small>Error Message</small>
                            </div>              
                        </div>
                    </div>
                <div class="secondaryInfoDiv">
                    <div class="flex">
                        <div class="form-control">
                            <select name="grade" class="inputData input" id="sgrade">
                                <option disabled selected value="0">Grade</option>
                                <option  value="1">Grade-1</option>
                                <option  value="2">Grade-2</option>
                                <option  value="3">Grade-3</option>
                                <option  value="4">Grade-4</option>
                                <option  value="5">Grade-5</option>
                                <option  value="6">Grade-6</option>
                                <option  value="7">Grade-7</option>
                                <option  value="8">Grade-8</option>
                                <option  value="9">Grade-9</option>
                                <option  value="10">Grade-10</option>
                                <option  value="11">Grade-11</option>
                                <option  value="12">Grade-12</option>
                            </select>
                                <i class="fas fa-check-circle"></i>
                                <i class="fas fa-exclamation-circle"></i>
                                <small>Error Message</small>
                        </div>

                        <div class="form-control">  
                            <select name="section" class="inputData input" id="section">
                                <option disabled selected value="0">Section</option>
                                <option  value="1">Section-1</option>
                                <option  value="2">Section-2</option>
                                <option  value="3">Section-3</option>
                                <option  value="4">Section-4</option>
                                <option  value="5">Section-5</option>
                            </select>
                                <i class="fas fa-check-circle"></i>
                                <i class="fas fa-exclamation-circle"></i>
                                <small>Error Message</small>
                        </div>
                       
                        <label class="adviser">Adviser</label>
                    </div>
                </div>
            </div>
                <div class="lowerActionDiv add">
                    <button type="submit" name="submit" class="btn submitBtn input">Submit</button>
                </div>
            </form>
            <div class="confirmationDiv">
                <h3>Student Successfully Added</h3>
                <div class="cbtn">
                    <a class="cursor btn confirmBtn">Ok</a>
                </div>
            </div>
        </div>
      
    </div>

    <?php
    $id = 12;
    $studentView = new View();
    $student = $studentView->showStudent($id);

    ?>
    <!-- View Student Modal -->
    <div class="viewStudentModal" id="viewStudentModal">
        <div class="modalContent">
            <div class="upperActionDiv">
                    <div class="modalTitle">Modify Student</div>
                    <a class="closeViewBtn cursor closeModalBtn" id="closeViewBtn">X</a>
            </div>
            <form id="viewStudentForm" enctype="multipart/form-data">
                <div class="grid grid-3">
                    <div class="imageDiv flex">
                        <div class="studentImage" id="viewStudentImage">
                            <img src="" alt="Image" id="blah">
                        </div>
                        <input type="file" id="vStudentImage" class="inputFile input"  name="image" onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])">
                        <!-- <div class="ID">
                            <input type="text" name="student_ID" disabled class="studentIDField">
                            <a class="generateID">Generate</a>
                        </div> -->
                    </div>
                    <div class="primaryInfoDiv">
                        <div class="flex">
                            <input type="text" placeholder="First Name" class="inputData input" name="firstName" id="viewStudentfirstName">
                            <input type="text" placeholder="Last Name" class="inputData input" name="lastName" id="viewStudentlastName">
                            <input type="text" placeholder="Age" class="inputData input" name="age" id="viewStudentAge">
                            <textarea name="student_Address" placeholder="Address" id="viewStudentAddress"></textarea class="inputData" >
                            <select name="gender" class="inputData input" id="viewStudentGender">
                                <option disabled selected value="0">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                </div>
                <div class="secondaryInfoDiv">
                    <div class="flex">
                        <select name="grade" class="inputData input" id="viewStudentGrade">
                            <option disabled selected value="0">Grade</option>
                            <option  value="1">Grade-1</option>
                            <option  value="2">Grade-2</option>
                            <option  value="3">Grade-3</option>
                            <option  value="4">Grade-4</option>
                            <option  value="5">Grade-5</option>
                            <option  value="6">Grade-6</option>
                            <option  value="7">Grade-7</option>
                            <option  value="8">Grade-8</option>
                            <option  value="9">Grade-9</option>
                            <option  value="10">Grade-10</option>
                            <option  value="11">Grade-11</option>
                            <option  value="12">Grade-12</option>
                        </select>
                        <select name="section" class="inputData input" id="viewStudentSection">
                            <option disabled selected value="0">Section</option>
                            <option  value="1">Section-1</option>
                            <option  value="2">Section-2</option>
                            <option  value="3">Section-3</option>
                            <option  value="4">Section-4</option>
                            <option  value="5">Section-5</option>
                        </select>
                        <label class="adviser">Adviser</label>
                    </div>
                </div>
            </div>
            <div class="lowerActionDiv" id="modifyActionDiv">
                <div>
                    <button type="submit" name="viewALog" class="btn viewALog" id="viewALog">View Attendance Log</button>
                </div>
                <div>
                    <button type="submit" name="Edit" class="btn editBtn" id="editStudentBtn">Edit</button>
                    <button type="submit" name="Delete" class="btn deleteBtn" id="deleteStudentBtn">Delete</button>
                </div>
                
            </div>
            </form>
            <div id="saveChangesDiv" class="mDiv">
                <h3>Save Changes?</h3>
                    <div class="mDivBnts">
                        <a class="cursor btn  yesBtn" id="yesSaveBtn">Yes</a>
                        <a class="cursor btn noBtn" id="noSaveBtn">No</a>
                    </div>
            </div>
            <div id="discardChangesDiv"  class="mDiv">
                <h3>Discard Changes?</h3>
                    <div class="mDivBnts">
                        <a class="cursor btn yesBtn" id="yesDiscardBtn">Yes</a>
                        <a class="cursor btn noBtn" id="noDiscardBtn">No</a>
                    </div>
            </div>
            <div id="deleteConfirmationDiv" class="mDiv">
                <h3>Are you sure you want to delete?</h3>
                    <div class="mDivBnts">
                        <a class="cursor btn yesBtn" id="yesDeleteBtn">Yes</a>
                        <a class="cursor btn noBtn" id="noDeleteBtn">No</a>
                    </div>
            </div>
        </div>
    </div>
</div>
<script src="js/loadNumberOfStudents.js"></script>
<script src="js/displayStudents.js"></script>
<script src="js/attendanceTable.js"></script>
<script src="js/addNewStudent.js"></script>
<script src="js/grade.js"></script>
<script src="js/main.js"></script>

<?php include 'inc/footer.php'; ?>