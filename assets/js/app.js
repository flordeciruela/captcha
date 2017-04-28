var appCaptcha = document.getElementById('captcha');
var captchaCode = document.getElementById('captcha-code');
var inputCode= document.getElementById('input-code');
var captchas = ["A6FT48W","86GH3DK","R0TH3N7","P4UN7V2"];
var load = document.getElementById('load');
var enter = document.getElementById('enter');

window.addEventListener('load',function(event) {
	generarCaptcha();
	colorAleatorio();
});

load.addEventListener('click',function(event) {
	event.preventDefault();
	generarCaptcha();
	colorAleatorio();
});

enter.addEventListener('click',function(event) {
	event.preventDefault();
	if (inputCode.value == captchaCode.innerText) {
		alert("Validaciòn exitosa!");
		appCaptcha.reset();
	} else {
		alert("Error: ingresar código de la imagen (distingue entre mayúsculas y minúsculas).");
		appCaptcha.reset();
	}
});

function colorAleatorio() {
    var letras = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letras[Math.floor(Math.random() * 16)];
    }
		captchaCode.style.color=color;
}

function generarCaptcha() {
	var nuevoCaptcha = Math.floor(Math.random() * captchas.length);
	captchaCode.innerText = captchas[nuevoCaptcha];
}
