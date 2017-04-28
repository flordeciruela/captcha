var captchaCode = document.getElementById('captcha-code');
var inputCode= document.getElementById('input-code');
var captchas = ["A6FT48W","86GH3DK","R0TH3N7","P4UN7V2"];

inputCode.addEventListener('keydown',function(event) {
  if(event.keyCode == 13) {
		var getCaptcha = Math.floor(Math.random() * captchas.length);
	   captchaCode.innerText = captchas[getCaptcha];
	}

});
