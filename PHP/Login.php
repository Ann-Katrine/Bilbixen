<?php
	if($_SERVER["REQUEST_METHOD"] == "POST")
	{
		session_start();
		
		$conn = mysqli_connect("localhost", "xann06.skp-dp","z523qzk4") or die(mysqli_error());
		mysqli_select_db($conn, "xann06_skp_dp_sde_dk") or die("Cannot connect to database");
		
		$brugernavn = mysqli_real_escape_string($conn, $_POST['brugernavn']);
		$kodeord = mysqli_real_escape_string($conn, $_POST['kodeord']);
		//echo $brugernavn;
		//echo $kodeord;
		
		$query = mysqli_query($conn, "SELECT * FROM salglogin WHERE Kodeord = '$kodeord' AND Brugernavn = '$brugernavn';");
		$rowNumber = mysqli_num_rows($query);
		
		if($rowNumber > 0){
			$row = $query->fetch_assoc();
			$ran = $row['IdSalglogin'];
			//echo $ran;
			$_SESSION["login_id"] = ($ran);
			
			echo "<script>sessionStorage.User= 'salglogin'+'$ran';alert('Du er nu logget ind');window.location.href='../forhandler_admin_side.html';</script>";
		}else{
			$query = mysqli_query($conn, "SELECT * FROM administration WHERE Kodeord = '$kodeord' AND Brugernavn = '$brugernavn';");
			$rowNumber = mysqli_num_rows($query);
			
			if($rowNumber > 0){
				$row = $query->fetch_assoc();
				$ran = "Admin";
				$_SESSION["login_id"] = "admin";
				
				echo "<script>sessionStorage.User= 'administration '+'$ran';alert('Du er nu logget ind');window.location.href='../forhandler_admin_side.html';</script>";
			}
			else{
				header('location:../Login.html');
			}
		}
	}
?>