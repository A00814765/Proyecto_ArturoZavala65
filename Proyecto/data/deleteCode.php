<?php

	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "napcode";

	// Create connection
	$conexion = mysqli_connect($servername, $username, $password, $dbname);
		
	$update = "DELETE FROM codes WHERE id = 1";
		if(mysqli_query($conexion,$update))
		{
			echo json_encode("1");
		}
		else
		{
			echo json_encode("0");
		}
		
		

?>