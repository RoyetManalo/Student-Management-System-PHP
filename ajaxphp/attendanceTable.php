<?php
include('../inc/autoloader.php');
include('../config/config.php');
session_start();
$teachers_ID = $_SESSION['teacherID'];

$view = new View();
$students = $view->showStudents($teachers_ID);
echo json_encode($students);
