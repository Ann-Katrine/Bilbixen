<?php
	session_start();
	
	//Forbindelse til databasen
	$mysqli = new mysqli("localhost", "xann06.skp-dp", "z523qzk4", "xann06_skp_dp_sde_dk");
	if($mysqli->connect_error){
		exit('Could not connect');
	}
	
	//får data fra php-session-siden
	$bil_id = $_SESSION["Idbiler"];
	echo $bil_id;
	$bil_navn = $_SESSION["bil_navn"];
	echo $bil_navn;

	//sletter dataen fra databasen
	$sql = "DELETE FROM biler WHERE Model = '$bil_navn' && Idbiler = '$bil_id'";
	$sql1 = "DELETE FROM kommentar WHERE Biler_idbiler = '$bil_id'";
	//echo $sql;
	$result = $mysqli->query($sql);
	$result = $mysqli->query($sql1);
	
	header('location:/Bilbixen/Update_biler.html');

	$mysqli->close();
?>