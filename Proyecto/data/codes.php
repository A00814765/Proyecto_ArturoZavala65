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

	session_start();

	$user = $_SESSION["email"];

	
	$sql = "SELECT id, nombre, syntax, fecha, user FROM codes WHERE user = '$user' OR invitado = '$user'";
	$result = $conn->query($sql);
	$i = 0;
	$arr = array();
	while ($row = $result->fetch_assoc()) {
		$arr["codes"][$i]["nombre"] = $row["nombre"];
		$arr["codes"][$i]["syntax"] = $row["syntax"];
		$arr["codes"][$i]["fecha"] = $row["fecha"];
		$arr["codes"][$i]["id"] = $row["id"];
		$arr["codes"][$i]["user"] = $row["user"];
		$i++;

	}
	echo json_encode($arr);

?>