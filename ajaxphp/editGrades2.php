<?php
print_r($_POST);

include('../inc/autoloader.php');
include('../config/config.php');



$array = json_decode($_POST['array']);


$contr = new Controller();


foreach ($array as $value) {
    $studentID = $value->id;
    $grades = $value->secondGrading;

    // $contr->grades($gradeID, $gradingPeriod, $studentID, $grades);
    $contr->editGrades2($studentID, $grades);

    // Can use if else statement
}
