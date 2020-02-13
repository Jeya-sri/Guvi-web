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

$name = $_POST["name"];
$email = $_POST["email"];
$age = $_POST["age"];
$pass = $_POST["pass"];
$gender = $_POST["gender"];
$phone = $_POST["phone"];
$dob = $_POST["dob"];
$col = $_POST["college"];
$dept = $_POST["dept"];
$ai = $_POST["ai"];
$eword = base64_encode($pass);


$sql = $conn->prepare("SELECT id from User WHERE email = ?");
$sql->bind_param("s", $email);
$sql->execute();
$result = $sql->get_result();
$count = $result->num_rows;

if ($count == 1) {    
     echo "1";
} else {
    
     
// prepare and bind
$sql = $conn->prepare("INSERT INTO User (name , email , password , phone , gender , dob , age, college, dept, ai) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$sql->bind_param("sssssss", $name, $email, $epass, $phone, $gender, $dob, $age, $col, $dept, $ai);

$sql->execute();
    
$myFile = "data.json";
$arr_data = array(); // create empty array
$result = $conn->query("SELECT * FROM User");
//Initialize array variable
$dbdata = array();

//Fetch into associative array
while ($row = $result->fetch_assoc()) {
    $dbdata[] = $row;
}

$jsondata = json_encode($dbdata, JSON_PRETTY_PRINT);
echo $jsondata;  
file_put_contents($myFile, $jsondata);
   
$sql->close();

}