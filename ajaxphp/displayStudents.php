<?php
include('../inc/autoloader.php');
include('../config/config.php');
session_start();
$teachers_ID = $_SESSION['teacherID'];

$view = new View();
$students = $view->showStudents($teachers_ID);
echo json_encode($students);
// print_r($students);
// foreach ($students as $student) {
//     // echo $student->student_Image . ' ';
//     // echo $student->lastName . ' ';
//     // echo $student->firstName . ' ';
//     // echo $student->grade . ' ';
//     // echo $student->section . ' ';
//     echo json_encode($student);
// }

// echo the data as JSON
