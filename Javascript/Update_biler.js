//Chrylser 3000
function Search()
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
	$.post("PHP/Searchbil.php", { udskrive: $("#udskrive").val() }, function(data){
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
			table.className = "rammen1";
			var Temp = document.getElementById("divrow"+(y));
            Temp.appendChild(table);
			
			var tr = document.createElement("tr");
			table.appendChild(tr);
			
			var td = document.createElement("td");
			td.setAttribute("id", "divflex"+x)
			tr.appendChild(td);
			
			var input = document.createElement("input");
			input.setAttribute("type", "checkbox");
			input.setAttribute("id", "box");
			input.setAttribute("name", "box");
			td.appendChild(input);
			
			var img = document.createElement("img");
			img.setAttribute("src", $temp[0]);
			img.setAttribute("alt", "Car");
			td.appendChild(img);
			
			var Model = document.createElement("p");
			Model.setAttribute("id", "Model");
			Model.setAttribute("name", "Model");
			var tekst = document.createTextNode($temp[1]);
			Model.appendChild(tekst);
			td.appendChild(Model);
			
			var registreret = document.createElement("p");
			registreret.setAttribute("id", "registreret");
			registreret.setAttribute("name", "registreret");
			var tekst = document.createTextNode("Årgang - " + $temp[2]);
			registreret.appendChild(tekst);
			td.appendChild(registreret);
			
			var moms = document.createElement("p");
			moms.setAttribute("id", "moms");
			moms.setAttribute("name", "moms");
			var tekst = document.createTextNode("Pris - " + $temp[3]);
			moms.appendChild(tekst);
			td.appendChild(moms);
			
			var kilometer = document.createElement("p");
			kilometer.setAttribute("id", "kilometer");
			kilometer.setAttribute("name", "kilometer");
			var tekst = document.createTextNode("Km - " + $temp[4]);
			kilometer.appendChild(tekst);
			td.appendChild(kilometer);
			x++;
			setTimeout(sammenligne(), 10)
		});
	});
}

function sammenligne()
{
	document.getElementById("box").value = document.getElementById("Model" && "registreret" && "moms" && "kilometer").value;
}

function slet()
{
	location.href = "PHP/Sletbil.php";
}

function Rediger()
{
	location.href = "Underside_uddate_biler.html";
}