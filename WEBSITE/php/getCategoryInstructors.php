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

	if (isset($_REQUEST['id']))
	{
		$id = mysql_real_escape_string($_REQUEST['id']);
		// extract results mysqli_result::fetch_array
		$query = "SELECT DISTINCT Instructor.InstructorId, Instructor.Name, Instructor.Surname, Instructor.ImgLink FROM Course, Instructor WHERE Course.CategoryId = {$id} AND Course.InstructorId = Instructor.InstructorId";

		//query execution
		$result = $mysqli->query($query);

		if ($result == false)
			echo $mysqli->error."[$sql]";

		$myArray = array(); //create an array to store result
		while($row = $result->fetch_array(MYSQL_ASSOC)) {
				array_push($myArray, array_map('utf8_encode', $row));
		}
		$callback = $_GET['callback'];
		$json = json_encode($myArray);
		echo "{$callback}({$json})";
	}
    //close connection
    $mysqli->close();
}


?>
