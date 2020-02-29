<?php

$updatedData = $_POST['newData'];
file_put_contents('Users.json', $updatedData);

?>