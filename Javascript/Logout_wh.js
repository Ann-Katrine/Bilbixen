function logout(){
	if(sessionStorage.User)
	{
		if(confirm("Ønsker du at logge ud?") == true)
		{
			$(".hide_and_seek").hide();
			$(".hide_and_seek1").show();
			$("#DealerLogin").attr('href',"");
			sessionStorage.clear();
			document.reload();

		}
	}
}