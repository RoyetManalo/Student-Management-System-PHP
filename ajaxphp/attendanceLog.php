<?php
include('../inc/autoloader.php');
include('../config/config.php');


$id = $_POST['id'];



$view = new View();
$student = $view->showStudent($id);
$studentAttendanceLog = $view->showStudentAttendanceLog($id);

// echo json_encode($studentAttendanceLog);


$studentResult = $student;
$attendanceResult = $studentAttendanceLog;
$result = [];
array_push($result, $studentResult);
array_push($result, $attendanceResult);
echo json_encode($result);
// echo json_encode($studentAttendanceLog);
