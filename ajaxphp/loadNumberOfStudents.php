<?php

include('../inc/autoloader.php');
include('../config/config.php');

session_start();
$teachers_ID = $_SESSION['teacherID'];




$viewStudentNumber = new View();
$NumberOfStudent = $viewStudentNumber->countStudent($teachers_ID);
$maleStudents = $viewStudentNumber->countMaleStudent($teachers_ID);
$femaleStudents = $viewStudentNumber->countFemaleStudent($teachers_ID);


$array = array("numberOfStudents" => $NumberOfStudent, "maleStudents" => $maleStudents, "femaleStudents" => $femaleStudents);

echo json_encode($array);
