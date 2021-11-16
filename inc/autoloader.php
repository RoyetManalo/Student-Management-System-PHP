<?php


// spl_autoload_register('autoloader');


// function autoloader($className)
// {
//     $path = 'classes/';
//     $extension = '.class.php';
//     $fullPath =  $path . $className . $extension;

//     if (!file_exists($fullPath)) {
//         return false;
//     }
//     include_once $fullPath;
// }


spl_autoload_register(function ($className) {
    if (file_exists('../classes/' . $className . '.class.php')) {
        include_once '../classes/' . $className . '.class.php';
    } else {
        include_once 'classes/' . $className . '.class.php';
    }
});


// spl_autoload_register('autoloader');


// function autoloader($className)
// {
//     $url = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
//     if (strpos($url, 'includes') !== false) {
//         $path = '../classes/';
//     } else {
//         $path = 'classes/';
//     }
//     $extension = '.class.php';
//     require_once $path . $className . $extension;
// }


// Check if the file whos call is in ajax file then change the $path to ../
