<?php
	session_start();

	$mysqli = new mysqli("localhost", "xann06.skp-dp", "z523qzk4", "xann06_skp_dp_sde_dk");
	if($mysqli->connect_error)
	{
		exit('Could not connect');
	}

	$commens = $_SESSION["kommentar"];
	echo $commens ;
	$author = $_SESSION["author"];
	echo $author ;

	$sql = "SELECT * FROM kommentar WHERE Kommentar = '$commens'";
	echo $sql;
	$result = $mysqli->query($sql);
	$row = $result->fetch_assoc();

	if($row["Godkendt"] == null)
	{
		$sql1 = "UPDATE kommentar SET Godkendt = 1 WHERE Kommentar = '$commens'  && Kommenter = '$author'";
		echo $sql1;
		$reuslt1 = $mysqli->query($sql1);
	}

	header('location:/kommentar.html');
?>