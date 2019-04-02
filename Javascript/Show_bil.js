function Show_biler(){
    var kage = new XMLHttpRequest();
    kage = new XMLHttpRequest();
    kage.onreadystatechange = function()
	{
        if(this.readyState == 4 && this.status == 200)
		{
            document.getElementById("Img1").nodeValue = this.responseText;
        }
    };
    $.get("PHP/Henter_bil.php?q=d", function(data) {
        var $array = data.split(":");
        var x = 0;
        var y = 0;
        $array.forEach(function(index)
		{
            var $temp = index.split(",");
            if((x % 3) == 0)
            {
                y++;
                NewLine = document.createElement("div");
                NewLine.setAttribute("id", "divflex"+x);
                var Temp = document.getElementById("Start");
                Temp.appendChild(NewLine);
                NewRow = document.createElement("div");
                NewRow.className = "row";
                NewRow.setAttribute("id", "divrow"+y);
                NewLine.appendChild(NewRow);
            }

            if(sessionStorage.User)
            {
                if(sessionStorage.User != "Admin")         
                {
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
			
			var table = document.createElement("table");
			table.className = "rammen1";
			var Temp = document.getElementById("divrow"+(y));
            Temp.appendChild(table);
			
			var tr = document.createElement("tr");
			tr.className = "rammen1";
			table.appendChild(tr);
			
			var td = document.createElement("td");
			tr.appendChild(td);
			
            var div = document.createElement("div");
            div.className = "col-12 col-sm-12 col-lg-12";
            div.setAttribute("id", "div"+x);
            td.appendChild(div);

            var img = document.createElement("img");
            img.setAttribute("src", $temp[0]);
            img.setAttribute("alt", "Car");
            div.appendChild(img);

            var Img1Price = document.createElement("p");
			var tekst = (Price + " DKK");
            var node = document.createTextNode(tekst);
            Img1Price.appendChild(node);
            div.appendChild(Img1Price);
			
            var Img1Name = document.createElement("p");
            var node = document.createTextNode($temp[2]);
            Img1Name.appendChild(node);
            div.appendChild(Img1Name);
			
            var Img1Year = document.createElement("p");
            var node = document.createTextNode("Årgang - " + $temp[3]);
			//alert($temp[3]);
            Img1Year.appendChild(node);
            div.appendChild(Img1Year);
			
            var Img1KM = document.createElement("p");
            var node = document.createTextNode("KM - " + $temp[4]);
            Img1KM.appendChild(node);
            div.appendChild(Img1KM);
            x++;
        });
    });   
}