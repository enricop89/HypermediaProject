<?php

header("Access-Control-Allow-Origin: *");
//connection to db
$mysqli = new mysqli("localhost", "globogym", "", "my_globogym");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    //echo "Successful connection"; // connection ok

    # extract results mysqli_result::fetch_array
    $query = " SELECT * FROM Location  ";
    //query execution
    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $myArray = array();//create an array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $callback = $_GET['callback'];
			$json = json_encode($row);
			echo "{$callback}({$json})";	
            
        echo json_encode($myArray);
    }

   
    $result->close();
    //close connection
	$mysqli->close();

}
?>