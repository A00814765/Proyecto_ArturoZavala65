<?php
	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "napcode";

	$conexion = mysqli_connect($servername, $username, $password, $dbname);

	   $code = $_POST["code"];
		$update = "UPDATE codes SET code = '$code' WHERE id = 1";
		if(mysqli_query($conexion,$update))
		{
			echo json_encode("1");
		}
		else
		{
			echo json_encode("0");
		}
		
		
	
	
	
?>