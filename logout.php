<?php
session_start();
unset($_SESSION['id']);
unset($_SESSION['id1']);
session_destroy();
header('location:http://127.0.0.1/guvi/index.html');
?>