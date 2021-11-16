<?php
include('../inc/autoloader.php');
include('../config/config.php');
session_start();
$teachers_ID = $_SESSION['teacherID'];

// $view = new View();
// $students = $view->showStudents($teachers_ID);
// echo json_encode($students);




// UPDATEDGRADETABLE

$view = new View();
$students = $view->studentWithGrades4($teachers_ID);
echo json_encode($students);
