<?php

include('../inc/autoloader.php');
include('../config/config.php');


$gradingPeriod = $_POST['gradingPeriod'];

$view = new View();
$grades = $view->showGrades($gradingPeriod);
echo json_encode($grades);
