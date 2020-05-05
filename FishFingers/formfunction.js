function next(){
	alert("Thank you. Your delivery will arrive within an hour or so.")
}

function validfirstname(){
	var a = document.getElementById("fname").value;
	if(a.length!=0){
		document.getElementById("fnamespan").innerHTML="Valid";
	}
	else{
		document.getElementById("fnamespan").innerHTML="Too short";
	}
}

function validlastname(){
	var a = document.getElementById("lname").value;
	if(a.length!=0){
		document.getElementById("lnamespan").innerHTML="Valid";
	}
	else{
		document.getElementById("lnamespan").innerHTML="Too short";
	}
}

function validpin(){
	var a = document.getElementById("pin").value;
	var patt = /[0-9]{6}/;
	if(patt.test(a)){
		document.getElementById('pinspan').innerHTML="Not valid pin";
	}
	else{
		document.getElementById("pinspan").innerHTML="Valid";
	}
}

function validphone(){
	var a = document.getElementById("ph").value;
	var patt = /[0-9]{11}/;
	if(patt.test(a)){
		document.getElementById('phspan').innerHTML="Not valid phone number";
	}
	else{
		document.getElementById("phspan").innerHTML="Valid";
	}
}
