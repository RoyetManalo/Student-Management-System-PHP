<?php
include('../inc/autoloader.php');
include('../config/config.php');
// echo 'Logging in....';
// print_r($_POST);



$username = $_POST['username'];
$password = $_POST['password'];

if (isset($username) && isset($password)) {
    $model = new Model();
    $account = $model->userLogin($username, $password);

    if ($account->userName == $username && $account->acctPassword == $password) {
        session_start();
        $_SESSION['username'] = $account->userName;
        $_SESSION['teacherID'] = $account->id;
        echo 1;
    } else {
        echo 0;
    }
}
