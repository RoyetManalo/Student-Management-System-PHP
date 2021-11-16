<?php

include('../inc/autoloader.php');
include('../config/config.php');
session_start();



// $justAddedStudentID = $_POST['justAddedStudentID'];


// $firstGradingPeriod = 1;
// $secondGradingPeriod = 2;
// $thirdGradingPeriod = 3;
// $fourthGradingPeriod = 4;

// $firstGradeID = $justAddedStudentID . '0' . $firstGradingPeriod;
// $secondGradeID = $justAddedStudentID . '0' . $secondGradingPeriod;
// $thirdGradeID = $justAddedStudentID . '0' . $thirdGradingPeriod;
// $fourthGradeID = $justAddedStudentID . '0' . $fourthGradingPeriod;

// $grades = 0;


// $contr = new Controller();

// $contr->putStudentInfoToGradesTable1($firstGradeID, $firstGradingPeriod, $justAddedStudentID, $grades);
// $contr->putStudentInfoToGradesTable2($secondGradeID, $secondGradingPeriod, $justAddedStudentID, $grades);
// $contr->putStudentInfoToGradesTable3($thirdGradeID, $thirdGradingPeriod, $justAddedStudentID, $grades);
// $contr->putStudentInfoToGradesTable4($fourthGradeID, $fourthGradingPeriod, $justAddedStudentID, $grades);

// UpdatedGradeTable

$justAddedStudentID = $_POST['justAddedStudentID'];

$contr = new Controller();

$firstGrading = 0;
$secondGrading = 0;
$thirdGrading = 0;
$fourthGrading = 0;
$average = 0;

$contr->addGrades($justAddedStudentID, $firstGrading, $secondGrading, $thirdGrading, $fourthGrading, $average);
