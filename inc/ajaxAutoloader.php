<?php



spl_autoload_register(function ($className) {
    if (file_exists('../classes/' . $className . '.class.php')) {
        include_once '../classes/' . $className . '.class.php';
    }
});
