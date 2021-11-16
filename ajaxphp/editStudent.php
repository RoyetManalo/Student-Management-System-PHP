<?php
include('../inc/autoloader.php');
include('../config/config.php');


$id = $_POST['id'];
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$age = $_POST['age'];
$student_Address = $_POST['student_Address'];
$grade = $_POST['grade'];
$section = $_POST['section'];
$gender = $_POST['gender'];



if ((isset($_POST['firstName']) || !empty($_POST['firstName']))) {

    $file = $_FILES['student_Image'];
    $uploadImage = new Controller();
    $student_Image = $uploadImage->uploadImage($file);

    $contr = new Controller();
    $contr->editStudent($student_Image, $firstName, $lastName, $age, $student_Address, $grade, $section, $gender, $id);
}
