var password = "fridayiscoming";

function passcheck() {

if (document.getElementById('pass1').value != password ){
	alert ('please try agian');
	return false;
}

if (document.getElementById('pass1').value == password ){
	
	return true
}

}