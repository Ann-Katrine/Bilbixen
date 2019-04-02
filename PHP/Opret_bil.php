<?php
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		session_start();
		
		//Forbind til database
		$mysqli = new mysqli("localhost", "xann06.skp-dp", "z523qzk4", "xann06_skp_dp_sde_dk");
		if($mysqli->connect_error){
			exit('Could not connect');
		}
		
		//Få værdierne fra htmlsiden
		
		$model =  mysqli_real_escape_string($mysqli, $_POST['model']);
		$kilometer =  mysqli_real_escape_string($mysqli, $_POST['antal_kilometer']);
		$registeret =  mysqli_real_escape_string($mysqli, $_POST['registreret']);
		$doors =  mysqli_real_escape_string($mysqli, $_POST['antal_doors']);
		$moms = mysqli_real_escape_string($mysqli, $_POST["moms"]);
		$type =  mysqli_real_escape_string($mysqli, $_POST['type']);
		$billede = mysqli_real_escape_string($mysqli, $_POST['billede']);
		$beskrivelse = mysqli_real_escape_string($mysqli, $_POST['beskrivelse']);
		
		
		//få værdier fra php-session-siden
		$login_id = ($_SESSION["login_id"]);
		if ($login_id == "admin"){
			$login_id = 3;
		}
		echo $login_id;
		
		//Sætter det ind i databasen
		$billedcomplet = ("Billeder/$billede");
		$sql1 = "INSERT INTO biler (Model, Registreret, Solgt, incl_moms, Antal_door, kort_kilometer, Type_idtype, Salglogin_idbillogin, billede, Beskrivelse) VALUES ('$model', '$registeret', 0 ,  '$moms', '$doors', '$kilometer', $type, '$login_id', '$billedcomplet', '$beskrivelse')";
		$show1 = mysqli_query($mysqli, $sql1);
		
		//Så den ikke bliver på php-siden men går hen på html-siden igen
		header('location:/Opret_bil.html');
		
		//Lukker forbindelsen
		$mysqli->close();
	
		
	}else{
		echo "fik ikke forbindelse til databasen";
	}
?>