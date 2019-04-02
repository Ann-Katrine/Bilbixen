<?php
	session_start();

	$mysqli = new mysqli("localhost", "xann06.skp-dp", "z523qzk4", "xann06_skp_dp_sde_dk");
	if($mysqli->connect_error)
	{
		exit('Could not connect');
	}

	$model = mysqli_real_escape_string($mysqli, $_POST['model']);
	$beskrivelse = mysqli_real_escape_string($mysqli, $_POST['bk']);
	$door = mysqli_real_escape_string($mysqli, $_POST['door']);
	$Regi = mysqli_real_escape_string($mysqli, $_POST['Regi']);
	$km = mysqli_real_escape_string($mysqli, $_POST['km']);
	$pris = mysqli_real_escape_string($mysqli, $_POST['pris']);
	//$img = mysqli_real_escape_string($mysqli, $_POST['img']);

	$bil_id = $_SESSION["Idbiler"];
	//echo $bil_id;
	$bil_navn = $_SESSION["bil_navn"];
	//echo $bil_navn;

	//få værdier fra php-session-siden
	$login_id = ($_SESSION["login_id"]);
	if ($login_id == "admin"){
		$login_id = 3;
	}

	$sql = "SELECT * FROM biler WHERE Model = '$bil_navn' && Idbiler = '$bil_id'";
	echo $sql;

	if($result = $mysqli->query($sql))
	{
		//$img_complet = ("Billeder/"$img);
		$sql_update = "UPDATE biler Set Model = '$model' && Beskrivelse = '$beskrivelse' && Antal_door = '$door' && registreret = '$Regi' && Kort_kilometer = '$km' && Incl_moms = '$pris' WHERE Idbiler = '$bil_id'";
		echo $sql_update;
		$result1 = $mysqli->query($sql_update);
		echo mysqli_error($mysqli);
	}
?>