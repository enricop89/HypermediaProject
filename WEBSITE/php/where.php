<?php

//get all the course from db and reply using json structure
header("Access-Control-Allow-Origin: *");
//echo "I'm the php";

//connection to db
$mysqli = new mysqli("localhost", "globogym", "", "my_globogym");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else
}
else {
    //echo "Successful connection"; // connection ok

    // extract results mysqli_result::fetch_array
    $query = "SELECT * FROM Location";

    //query execution
    $result = $mysqli->query($query);

    //if there are data available
    if($result->num_rows >0){
        $myArray = array(); //create an array to store result
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
                array_push($myArray, array_map('utf8_encode', $row));
        }
        $callback = $_GET['callback'];
        $json = json_encode($myArray);
		echo "{$callback}({$json})";
    }

    //free result
	$result->close();

    //close connection
    $mysqli->close();
}


?>