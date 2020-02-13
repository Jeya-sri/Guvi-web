<?php
$servername = "127.0.0.1";
$username = "root";
$pass = "";
$db = "Userdb";

// Create connection
$conn = mysqli_connect($servername, $username, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}




