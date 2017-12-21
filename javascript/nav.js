function dropdown() {
	var x = document.getElementById("dropdownmenu");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
