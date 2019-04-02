<?php
	session_start();
	
	//Forbindelse til databasen
	$mysqli = new mysqli("localhost", "xann06.skp-dp", "z523qzk4", "xann06_skp_dp_sde_dk");
	if($mysqli->connect_error){
		exit('Could not connect');
	}
	
	//får data fra php-session-siden
	$login_id = ($_SESSION["login_id"]);

	if ($login_id == "admin")
	{
		$login_id = 3;	
	}

	$sql_biler = "SELECT Idbiler FROM biler WHERE Salglogin_Idbillogin = '$login_id'";
	//echo $sql_biler;
	$result1 = $mysqli->query($sql_biler);
	//$result1 ->num_rows;
	while($rows = $result1->fetch_assoc())
	{	 
		$bil_id = $rows["Idbiler"];

		//Så man får data fra kommentar i databasen
		$sql = "SELECT `Kommentar`, `Kommenter`  AS author FROM kommentar WHERE Godkendt is null && Biler_Idbiler = '$bil_id'";

		//Viser det data vi får fra databasen
		$result = $mysqli->query($sql);
		if($result->num_rows > 0)
		{
			$num_rows = $result->num_rows;
			$x = 0;
			while($row = $result->fetch_object())
			{
				$Kommentar = $row->Kommentar;
				$author = $row->author;
				
				echo $author . ',';
				$x++;
				if($x == ($result->num_rows))
				{
					echo $Kommentar, ":";
				}
				else
				{
					echo $Kommentar, ":";
				}
				$_SESSION["kommentar"] = $Kommentar;
				$_SESSION["author"] = $author;
			}
		}
		else
		{
			echo "Der er ikke nogle kommentar ved nogle af dine biler", ":";
		} 	  
	}
	
	$mysqli->close();
?>