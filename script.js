var us = document.getElementById("us");
var pw = document.getElementById("pw");
var loginBtn = document.getElementById("login");

function loginfun() {
	if(us.value === "admin" && pw.value === "admin"){
		alert("Login successfully");

		window.location = "homepage.html"
	}
}


loginBtn.addEventListener("click", loginfun);



