function Getcommens(){
	var http = new XMLHttpRequest();
	http = new XMLHttpRequest();
	http.onreadystatechange = function()
	{
		if(this.readyState == 4 && this.readyState == 200)
		{
			document.getElementById("hello").nodeValue = this.responseText;
		}
	};
	$.get("PHP/Show_commens.php?q=d", function(data){
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
			
			var kommentar = document.createElement("p");
			kommentar.setAttribute("id", "kommentar");
			kommentar.setAttribute("name", "kommentar");
			var tekst = document.createTextNode($temp[0]);
			kommentar.appendChild(tekst);
			td.appendChild(kommentar);
			
			var kommenter = document.createElement("p");
			kommenter.setAttribute("id", "kommenter");
			var tekst = document.createTextNode($temp[1]);
			kommenter.appendChild(tekst);
			td.appendChild(kommenter);
			x++;
			setTimeout(sammenligne(),10)
		});
	});
}

function sammenligne()
{
	document.getElementById("box").value = document.getElementById("kommentar" && "kommenter").value;
}

function godkend()
{
	location.href = "PHP/Godkendt.php";
}

function ikke_godkendt()
{
	location.href = "PHP/ikke_godkendt.php";
}
