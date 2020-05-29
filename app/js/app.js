document.addEventListener("DOMContentLoaded", function() {

	let modal = document.getElementsByClassName("modal");
	let imgs = document.getElementsByClassName("img");
	let modalImg = document.getElementsByClassName("modal-content");
	let caption = document.getElementsByClassName('caption');
	let span = document.getElementsByClassName('close');

	for (let i = 0; i < imgs.length; i++) {
		imgs[i].onclick = function() {
			modal[i].style.display = "block";
			modalImg[i].src = this.src;
			caption[i].innerHTML = this.alt;
		}
	}

	for (let i = 0; i < span.length; i++) {
		span[i].onclick = function() {
			modal[i].style.display = "none";
		}
	}
	
});
