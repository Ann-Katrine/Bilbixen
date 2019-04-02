function billeder(){
	var kage = new XMLHttpRequest();
	kage = new XMLHttpRequest();
	kage.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			document.getElementById("Img1").nodeValue = this.responseText;
		}
	};
	$.get("PHP/Skift_billeder.php?q=d", function(data) {
		var $array = data.split(":");
		var x = 0;
		$array.forEach(function(element) {
			var $temp = element.split(",");
			if(sessionStorage.User){
				if(sessionStorage.User != "Admin"){
					PriceNoVac = ($temp[1] * 0.75);
					Price = (PriceNoVac * 0.9);
				}
				else
				{
					Price = $temp[1];
				}
			}
			else
			{
				Price = $temp[1];	
			}
			
			switch (x) {
			   case 0:
					$("#Img1").attr('src',$temp[0]);
					$("#Img1Price").prepend(Price);
					$("#Img1Name").html($temp[2]);
					$("#Img1Year").append($temp[3]);
					$("#Img1KM").append($temp[4]);
					x++;
					break;
				case 1:
					$("#Img2").attr('src',$temp[0]);
					$("#Img2Price").prepend(Price);
					$("#Img2Name").html($temp[2]);
					$("#Img2Year").append($temp[3]);
					$("#Img2KM").append($temp[4]);
					x++;
					break;
				case 2:
					$("#Img3").attr('src',$temp[0]);
					$("#Img3Price").prepend(Price);
					$("#Img3Name").html($temp[2]);
					$("#Img3Year").append($temp[3]);
					$("#Img3KM").append($temp[4]);
					x++;
					break;     
			}
		})
	});   
}