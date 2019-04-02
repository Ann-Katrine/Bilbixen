<?php
	session_start();
	
	//Forbindelse til databasen
	$mysqli = new mysqli("localhost", "xann06.skp-dp", "z523qzk4", "xann06_skp_dp_sde_dk");
	if($mysqli->connect_error){
		exit('Could not connect');
	}

	//for data fra html-siden
	$Search = mysqli_real_escape_string($mysqli, $_POST["udskrive"]);

	//får data fra php-session-siden
	$login_id = ($_SESSION["login_id"]);
	if ($login_id == "admin")
	{
		$login_id = 3;	
	}
	
	//hvis data fra tablen biler databasen
	$sql = "SELECT * FROM biler WHERE Model = '$Search' && Salglogin_Idbillogin = '$login_id'";

	$result = $mysqli->query($sql);
	$result->num_rows;
	while($rows = $result->fetch_assoc())
	{
		$bil_id = $rows["Idbiler"];
		$bil_navn = $rows["Model"];
		$_SESSION["Idbiler"] = $bil_id;
		$_SESSION["bil_navn"] = $bil_navn;
		
		echo $rows["billede"], ",";
		echo $bil_navn, ",";
		echo $rows["Incl_moms"], ",";
		echo $rows["registreret"], ",";
		echo $rows["Kort_kilometer"], ":";
	}
	
	
	$mysqli->close();
?>