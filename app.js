const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

<head>
  <script src="https://www.google.com/recaptcha/enterprise.js?render=6LeXEgQqAAAAAHdrEi3-kzLoeDZmBa-9cTQ95ttm"></script>
  <!-- Your code -->
</head>
        window.addEventListener('load', function() {
            var music = document.getElementById('background-music');
            music.play().catch(function(error) {
                console.log('Autoplay was prevented:', error);
});
