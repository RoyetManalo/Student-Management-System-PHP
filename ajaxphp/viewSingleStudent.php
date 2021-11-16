<?php
include('../inc/autoloader.php');
include('../config/config.php');


$view = new View();
$student = $view->showStudent($_POST['id']);

echo json_encode($student);
