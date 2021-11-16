<?php

include('../inc/autoloader.php');
include('../config/config.php');
session_start();
$TID = $_SESSION['teacherID'];


$keyword = $_POST['keyword'];


$view = new View();
$result = $view->showSearchedStudent($keyword, $TID);

echo json_encode($result);
