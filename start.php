<?php
session_start();
    if(isset($_SESSION["id"])) {
     $id = $_SESSION["id1"];
        echo $id;
    }
    else{
        
        header("Location: http://127.0.0.1/guvi/index.html");
    }
?>