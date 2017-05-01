var appCaptcha = document.getElementById('captcha');
var captchaCode = document.getElementById('captcha-code');
var inputCode= document.getElementById('input-code');
var reload = document.getElementById('reload');
var enter = document.getElementById('enter');

window.addEventListener('load',function(event) {
	generarCaptcha();
});

reload.addEventListener('click',function(event) {
	event.preventDefault();
	generarCaptcha();
});

enter.addEventListener('click',function(event) {
	event.preventDefault();
	if (inputCode.value == captchaCode.innerText) {
		alert("Validación exitosa!");
		appCaptcha.reset();
	} else {
		alert("Error: ingresar código de la imagen (distingue entre mayúsculas y minúsculas).");
		appCaptcha.reset();
		generarCaptcha(); //Cambia el código captcha para el nuevo intento.
	}
});

function colorAleatorio() {
  var caracteres = "0123456789ABCDEF";
  var color = "#";
	for (var i = 0; i < 6; i++ ) {
    color += caracteres[Math.floor(Math.random() * caracteres.length)];
  }
	captchaCode.style.color=color;
}

function generarCaptcha() {
	var letrasCaptcha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'";
	var numCaptcha = "0123456789";
	captchaCode.innerText = letrasCaptcha[Math.floor(Math.random() * letrasCaptcha.length)];
	//bucle que alterna entre letras y numeros para generar el código.
	while (captchaCode.innerText.length < 6) {
		captchaCode.innerText += numCaptcha[Math.floor(Math.random() * numCaptcha.length)] +
		letrasCaptcha[Math.floor(Math.random() * letrasCaptcha.length)];
	}
	colorAleatorio();
}
