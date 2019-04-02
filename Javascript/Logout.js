function logout(){
	if(sessionStorage.User)
	{
		if(confirm("Ønsker du at logge ud?") == true)
		{
			$("#DealerLogin").attr('href',"");
			sessionStorage.clear();
			window.location.href = "Index.html";
		}
	}
}