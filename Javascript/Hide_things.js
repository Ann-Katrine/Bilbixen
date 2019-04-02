function hide(){
	if(sessionStorage.User)   
	{    
		$(".hide_and_seek").show();
		$(".hide_and_seek1").hide();

		$("#DealerLogin").html("Logout");

	}else{
		$(".hide_and_seek").hide();
		$(".hide_and_seek1").show();	
	}
}