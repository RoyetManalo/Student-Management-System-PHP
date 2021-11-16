<?php

include('../inc/autoloader.php');
include('../config/config.php');

$array = json_decode($_POST['array']);
$time = $_POST['time'];
$date = $_POST['date'];

$contr = new Controller();

foreach ($array as $ar) {
    $id = $ar->id;
    $present = $ar->present;

    if ($present == 1) {
        $contr->Attendance($id, true, $time, $date);
    } else {
        $contr->Attendance($id, false, $time, $date);
    }
}
