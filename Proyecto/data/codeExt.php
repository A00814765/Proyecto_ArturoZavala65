 <?php
	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "napcode";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);

	// Check connection
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
	}
	//echo "Connected successfully";
	
	$sqlcode = "SELECT code,nombre FROM codes WHERE id = 1";
	$result = $conn->query($sqlcode);
	$arr = array();
	while ($row = $result->fetch_assoc()) {
		
		$arr["code"] = $row["code"];
		$arr["nombre"] = $row["nombre"];

	}
	echo json_encode($arr);

?>