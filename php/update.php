<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "Userdb";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
 $myFile = "Users.json";
 $arr_data = array(); // create empty array

$email = $_POST["email"];
$name = $_POST["name"];
$age = $_POST["age"];
$gender = $_POST["gender"];
$phone = $_POST["phone"];
$dob = $_POST["dob"];
$college = $_POST["college"];
$state = $_POST["state"];
$degree = $_POST["degree"];
$aoi = $_POST["aoi"];
    
// prepare and bind
$sql = $conn->prepare("UPDATE User SET name=?, age=?, gender=?, phone=?, dob=?, college=?, degree=?, aoi=? WHERE email=?");
$sql->bind_param("ssssssssssss", $name, $age, $gender, $phone, $dob, $college, $degree, $aoi, $email);
$sql->execute();

$result = $conn->query("SELECT * FROM User");
$count = $result->num_rows;
//Initialize array variable
    $dbdata = array();

//Fetch into associative array
    while ($row = $result->fetch_assoc()) {
        $dbdata[] = $row;
    }
    $jsondata = json_encode($dbdata, JSON_PRETTY_PRINT);
    //echo $jsondata;
    file_put_contents($myFile, $jsondata);
  echo "2";



  


?>
   




    











