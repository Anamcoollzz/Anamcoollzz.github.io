function gotoKeranjang() {
	window.location = 'keranjang.html';
}
function haloDropDown() {
	var x = document.getElementById("navigasiku");
	if (x.className === "navigasiku") {
		x.className += " responsive";
	} else {
		x.className = "navigasiku";
	}
}


$('#pencarian').on('click', function(){

	$('.search').fadeIn();

	$('.search').find('input').trigger('focus');

});

$('.tutup-search').on('click', function(){

	$('.search').fadeOut();

});

var modal = document.getElementById("modalLogin");
var modal2 = document.getElementById("modalDaftar");
var btnLogin1 = document.getElementById("btMasuk");
var btnLogin2 = document.getElementById("btMasuk2");
var btnDaftar1 = document.getElementById("btDaftar");
var btnDaftar2 = document.getElementById("btDaftar2");
var span2 = document.getElementsByClassName("tutup2")[0];
var span3 = document.getElementsByClassName("tutup3")[0];
btnLogin1.onclick = function() {
	modal.style.animationName = 'animateShow';
	setTimeout(function(){
		modal.style.display = "block";
		modal2.style.display = "none";
	}, 400);
}
btnDaftar1.onclick = function() {
	modal2.style.animationName = 'animateShow';
	setTimeout(function(){
		modal.style.display = "none";
		modal2.style.display = "block";
	}, 400);
}
btnLogin2.onclick = function() {
	modal.style.animationName = 'animateShow';
	setTimeout(function(){
		modal.style.display = "block";
		modal2.style.display = "none";
	}, 400);
}
btnDaftar2.onclick = function() {
	modal2.style.animationName = 'animateShow';
	setTimeout(function(){
		modal.style.display = "none";
		modal2.style.display = "block";
	}, 400);
}
span2.onclick = function() {
	modal.style.animationName = 'animateHide';
	setTimeout(function(){
		modal.style.display = "none";
		modal2.style.display = "none";
	}, 400);
}
span3.onclick = function() {
	modal2.style.animationName = 'animateHide';
	setTimeout(function(){
		modal.style.display = "none";
		modal2.style.display = "none";
	}, 400);
}
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.animationName = 'animateHide';
		setTimeout(function(){
			modal.style.display = "none";
		}, 400);
	} 
	if (event.target == modal2) {
		modal2.style.animationName = 'animateHide';
		setTimeout(function(){
			modal2.style.display = "none";
		}, 400);
	} 
}

$(document).ready(function(){
	$('#formMasuk').submit(function(e){
		e.stopPropagation();
		var nama = $('.nama').val();
		var email = $('.email').val();
		var password = $('.password').val();
		var errName = document.getElementById('spanNama');
		var errEmail = document.getElementById('spanEmail');
		var errPass = document.getElementById('spanPass');
		var passErrValue = document.getElementById('passwordError');
		$(".error").remove();
		var isError = false;
		if (nama.length < 3) {
			errName.style.display = "block";
			isError = true;
		}
		if (email.length < 1) {
			errEmail.style.display = "block";
			isError = true;
		}
		if (password.length < 1) {
			errPass.style.display = "block";
			isError = true;
		} else {
			if (password.length > 1 && password.length < 8) {
				passErrValue.innerHTML = "Minimal password 8 kata";
				errPass.style.display = "block";
				isError = true;
			}
		}
		if(!isError){
			return true;
		}
		return false;
	});
	});

