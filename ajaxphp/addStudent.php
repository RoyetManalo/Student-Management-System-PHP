<?php


// echo 'Form Submitted';

// if (isset($_POST['firstName'])) {
//     print_r($_POST);
// }
include('../inc/autoloader.php');
include('../config/config.php');
session_start();


// spl_autoload_register(function ($className) {
//     if (file_exists('../classes/' . $className . '.class.php')) {
//         include_once '../classes/' . $className . '.class.php';
//     }
// });




// print_r($_POST);
// print_r($_FILES);


// $firstName = isset($_POST['firstName']) ? $_POST['firstName'] : '';
// $lastName = isset($_POST['lastName']) ? $_POST['lastName'] : '';
// $age = isset($_POST['age']) ? $_POST['age'] : '';
// $student_Address = isset($_POST['student_Address']) ? $_POST['student_Address'] : '';
// $grade = isset($_POST['grade']) ? $_POST['grade'] : '';
// $section = isset($_POST['section']) ? $_POST['section'] : '';
// $gender = isset($_POST['gender']) ? $_POST['gender'] : '';

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$age = $_POST['age'];
$student_Address = $_POST['student_Address'];
$grade = $_POST['grade'];
$section = $_POST['section'];
$gender = $_POST['gender'];
$teachers_ID = $_SESSION['teacherID'];




// Query The Last Student Added ID then add the Grading Period Number if non return 1
// Leave Grades null / WHENE adding grade use UPDATE

// First Grading

// This doest Work


// if ($lastStudentID == null) {
//     $lastStudentID = 1;
// } else {
//     $lastStudentID = $_POST['lastStudentID'];
// }

// Query the lastStudentID after adding The Student

// $lastStudentID = $_POST['lastStudentID'];

// $currentStudentID = (int)$lastStudentID + 1;

// $firstGradingPeriod = 1;
// $secondGradingPeriod = 2;
// $thirdGradingPeriod = 3;
// $fourthGradingPeriod = 4;

// $firstGradeID = $currentStudentID . '0' . $firstGradingPeriod;
// $secondGradeID = $currentStudentID . '0' . $secondGradingPeriod;
// $thirdGradeID = $currentStudentID . '0' . $thirdGradingPeriod;
// $fourthGradeID = $currentStudentID . '0' . $fourthGradingPeriod;

// $grades = 0;




if ((isset($_POST['firstName']) || !empty($_POST['firstName']))) {

    $file = $_FILES['student_Image'];
    $uploadImage = new Controller();
    $student_Image = $uploadImage->uploadImage($file);
    // Image is missing

    $contr = new Controller();
    $contr->createStudent($student_Image, $firstName, $lastName, $age, $student_Address, $grade, $section, $teachers_ID, $gender);

    // $contr->putStudentInfoToGradesTable1($firstGradeID, $firstGradingPeriod, $currentStudentID, $grades);
    // $contr->putStudentInfoToGradesTable2($secondGradeID, $secondGradingPeriod, $currentStudentID, $grades);
    // $contr->putStudentInfoToGradesTable3($thirdGradeID, $thirdGradingPeriod, $currentStudentID, $grades);
    // $contr->putStudentInfoToGradesTable4($fourthGradeID, $fourthGradingPeriod, $currentStudentID, $grades);

    $view = new View();
    $recentStudent = $view->showRecentlyAddedStudent();
    echo json_encode($recentStudent);
}
