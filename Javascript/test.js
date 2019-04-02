//Chrylser 3000
function Showtable()
{
	//alert("virker");
	var http = new XMLHttpRequest();
	http = new XMLHttpRequest();
	http.onreadystatechange = function()
	{
		if(this.readyState == 4 && this.readyState == 200)
		{
			document.getElementById("hello").nodeValue = this.responseText;
		}
	};
	$.post("PHP/test.php", { udskrive: $("#udskrive").val() }, function(data){
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
                var Temp = document.getElementById("hello");
                Temp.appendChild(NewLine);
                NewRow = document.createElement("div");
                NewRow.className = "row";
                NewRow.setAttribute("id", "divrow"+y);
                NewLine.appendChild(NewRow);
			}
			
			var table = document.createElement("table");
			var Temp = document.getElementById("divrow"+(y));
            Temp.appendChild(table);
			
			var tr = document.createElement("tr");
			table.appendChild(tr);
			
			var td = document.createElement("td");
			td.setAttribute("id", "divflex"+x)
			tr.appendChild(td);
			
			//første td
			var td_tekst1 = document.createElement("td");
			var node = document.createTextNode("Model:");
			td_tekst1.appendChild(node);
			td.appendChild(td_tekst1);
			
			var Input_name = document.createElement("input");
			Input_name.setAttribute("type", "text");
			Input_name.setAttribute("id", "model");
			Input_name.setAttribute("value", $temp[0]);
			td.appendChild(Input_name);
			
			/*var Select = document.createElement("select");
			Select.setAttribute("name", "type");
			td1.appendChild(Select);*/
			
			//Anden td
			var td_tekst2 = document.createElement("td");
			var node = document.createTextNode("Beskrivelse:");
			td_tekst2.appendChild(node);
			td.appendChild(td_tekst2);
			
			var Input_bk = document.createElement("input");
			Input_bk.setAttribute("type", "text");
			Input_bk.setAttribute("id", "bk");
			Input_bk.setAttribute("value", $temp[1]);
			td.appendChild(Input_bk);
			
			//trejde td
			var td_tekst3 = document.createElement("td");
			var node = document.createTextNode("Antal døre:");
			td_tekst3.appendChild(node);
			td.appendChild(td_tekst3);
			
			var Input_door = document.createElement("input");
			Input_door.setAttribute("type", "text");
			Input_door.setAttribute("id", "door");
			Input_door.setAttribute("value", $temp[2]);
			td.appendChild(Input_door);
			
			//fjerde td
			var td_tekst4 = document.createElement("td");
			var node = document.createTextNode("Registreret:");
			td_tekst4.appendChild(node);
			td.appendChild(td_tekst4);
			
			var Input_regi = document.createElement("input");
			Input_regi.setAttribute("type", "text");
			Input_regi.setAttribute("id", "Regi");
			Input_regi.setAttribute("value", $temp[3]);
			td.appendChild(Input_regi);
			
			//femte td
			var td_tekst5 = document.createElement("td");
			var node = document.createTextNode("Antal km:");
			td_tekst5.appendChild(node);
			td.appendChild(td_tekst5);
			
			var Input_km = document.createElement("input");
			Input_km.setAttribute("type", "text");
			Input_km.setAttribute("id", "km");
			Input_km.setAttribute("value", $temp[4]);
			td.appendChild(Input_km);
			
			//sjette td
			var td_tekst6 = document.createElement("td");
			var node = document.createTextNode("Pris:");
			td_tekst6.appendChild(node);
			td.appendChild(td_tekst6);
			
			var Input_pris = document.createElement("input");
			Input_pris.setAttribute("type", "text");
			Input_pris.setAttribute("id", "pris");
			Input_pris.setAttribute("value", $temp[5]);
			td.appendChild(Input_pris);
			
			
			//syvende td		
			var td_tekst7 = document.createElement("td");
			var node = document.createTextNode("Billede:");
			td_tekst7.appendChild(node);
			td.appendChild(td_tekst7);
			
			var Input_img = document.createElement("input");
			Input_img.setAttribute("type", "file");
            Input_img.setAttribute("id", "img");
			Input_img.setAttribute("value", $temp[6])
            td.appendChild(Input_img);
			x++;
		});
	});
}

function update()
{
	//jQuery post() Method
	$.post("PHP/test1.php",{
		model: $("#model").val(),
		bk: $("#bk").val(),
		door: $("#door").val(),
		Regi: $("#Regi").val(),
		km: $("#km").val(),
		pris: $("#pris").val(),
		img: $("#img").val()
	}, function(data) {
		console.log(data);
		//location.href = "/Update_biler.html";
	});
}