<?php
include('../inc/autoloader.php');
include('../config/config.php');

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$userName = $_POST['userName'];
$password = $_POST['password'];


if ((isset($_POST['firstName']) || !empty($_POST['firstName']))) {

    $contr = new Controller();
    $contr->createTeacher($firstName, $lastName, $email, $userName, $password);
}
