const userNameEmail = $("#userNameEmail");
const password = $("#password");
const userName = $("#userName");
const phone = $("#phone");


$("#signIn").submit(function(e){
    e.preventDefault()
    submitCheck()
})
function submitCheck() {
	
	if(userNameEmail.val() === '') {
		invalid(userNameEmail, 'This field cannot be empty');
	} else {
		valid(userNameEmail, "Good!");
	}
    if(userName.val() === '') {
		invalid(userName, 'This field cannot be empty');
	} else {
		valid(userName, "Good!");
	}
    if(phone.val() === '') {
		invalid(phone, 'This field cannot be empty');
	} else {
		valid(phone, "Good!");
	}
	if(password.val() === '') {
		invalid(password, 'This field cannot be empty');
	} else {
		valid(password, "Good!");
	}
	
}
function invalid(input, message) {
    input.removeClass("is-valid").addClass("is-invalid")
    input.next().text(message)
}

function valid(input, message) {
    input.removeClass("is-invalid").addClass("is-valid")
    input.next().text(message)
}
	

$(function(){
    $("#phone").mask("+7 (999) 999-9999");
  })









