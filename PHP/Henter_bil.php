<?php
	//Forbind til database
	$mysqli = new mysqli("localhost", "xann06.skp-dp", "z523qzk4", "xann06_skp_dp_sde_dk");
	if($mysqli->connect_error){
		exit('Could not connect');
	}

	//Får data fra databasen
	$last_id = mysqli_insert_id($mysqli);
	$sql = "(SELECT * FROM biler WHERE Type_Idtype = 01 ORDER BY rand()) UNION
	(SELECT * FROM biler WHERE Type_Idtype = 02 ORDER BY rand())
	UNION
	(SELECT * FROM biler WHERE Type_Idtype = 03 ORDER BY rand())";
	
	//Viser det data vi får fra databasen
	$result = $mysqli->query($sql);
	if($result->num_rows > 0)
	{
		$x = 0;
		//output data of each row
		while($row = $result->fetch_assoc())
		{
			echo $row["billede"], ",";
			echo $row["Incl_moms"], ",";
			echo $row["Model"], ",";
			echo $row["registreret"], ",";
			$x++;
			if($x == ($result->num_rows))
			{
				echo $row["Kort_kilometer"];
			}
			else
			{
				echo $row["Kort_kilometer"], ":";
			}
		}
	}
	else
	{
		echo "0 Resluts";
	}
?>