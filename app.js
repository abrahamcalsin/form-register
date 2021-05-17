/*-- PLACEHOLDER ANIMATION --*/
var inputs = document.getElementsByClassName('form-input');

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('keyup', function(){
		if (this.value.length>=1) {
			this.nextElementSibling.classList.add('pinUp');
		} else {
			this.nextElementSibling.classList.remove('pinUp');
		}
	});
}
/*-- FUNCTION VALIDATION --*/
function validation(){
	var username, email, password;
	
	username = document.getElementById('username').value;
	email = document.getElementById('email').value;
	password = document.getElementById('password').value;

	if (username === "" || email === "" || password === "") {
		alert('Please fill in the empty fields ..');
		return false;
	}
}