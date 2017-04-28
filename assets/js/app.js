var captchaCode = document.getElementById('captcha-code');
var inputCode= document.getElementById('input-code');
var captchas = ["A6FT48W","86GH3DK","R0TH3N7","P4UN7V2"];
var load = document.getElementById('load');
var enter = document.getElementById('enter');

window.addEventListener('load',function(event) {
	var getCaptcha = Math.floor(Math.random() * captchas.length);
   captchaCode.innerText = captchas[getCaptcha];
});

load.addEventListener('click',function(event) {
	var getCaptcha = Math.floor(Math.random() * captchas.length);
	captchaCode.innerText = captchas[getCaptcha];
});

enter.addEventListener('click',function(event) {
	if (inputCode.value == captchaCode.innerText) {
		alert("Validaciòn exitosa!");
	} else {
		alert("Captcha incorrecto, intente nuevamente.");
	}
});
