<?php
	session_start();
	
	//Forbindelse til databasen
	$mysqli = new mysqli("localhost", "xann06.skp-dp", "z523qzk4", "xann06_skp_dp_sde_dk");
	if($mysqli->connect_error){
		exit('Could not connect');
	}
	
	//får data fra php-session-siden
	$bil_id = $_SESSION["Idbiler"];
	$bil_navn = $_SESSION["bil_navn"];

	//sletter dataen fra databasen
	$sql = "SELECT * FROM biler WHERE Idbiler = '$bil_id' && Model = '$bil_navn'";
	$result = $mysqli->query($sql);
	if($rows = $result->fetch_assoc())
	{
		echo $bil_navn, ","; //ja
		//echo $rows["Type_Idtype"], ",";
		echo $rows["Beskrivelse"], ","; //ja
		echo $rows["Antal_door"], ","; //ja
		echo $rows["registreret"], ","; //ja
		echo $rows["Kort_kilometer"], ","; //ja
		echo $rows["Incl_moms"], ","; //ja
		//echo $rows["Billede"], ","; //ja
	}
	
	$mysqli->close();
?>