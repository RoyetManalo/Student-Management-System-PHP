<?php
include('../inc/autoloader.php');
include('../config/config.php');



$contr = new Controller();
$student = $contr->deleteStudent($_POST['id']);
