<?php
	header('Accept: application/json');
	header('Content-type: application/json');

	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "napcode";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	// Check connection
	if ($conn->connect_error) 
	{
	    header('HTTP/1.1 500 Bad connection to Database');
	    die("The server is down, we couldn't establish the DB connection");
	}
	else
	{	session_start();
		$user = $_SESSION["email"];
		$nombre = $_POST["nameProyect"];
		$syntax = $_POST["nameSyntax"];
		$time = date('d-F-Y');
		
		$sql = "INSERT INTO codes (nombre, syntax, fecha, user)
				VALUES ('$nombre', '$syntax', '$time', '$user')";
		$result = $conn->query($sql);

		echo json_encode($_SESSION["email"]);

		
	} 

?>