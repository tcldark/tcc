document.addEventListener("DOMContentLoaded", function(event) {

	var openMobile = document.querySelector('.js--open-mobile');
	var closePopup = document.querySelector('.js--close');
	var openLogin  = document.querySelector('.js--login');
	var closeLogin = document.querySelector('.js--close-login');
	var openAdotar = document.querySelector('.js--button-adt');
	var closeAdotar = document.querySelector('.js--close-adt');
	

	if (openMobile) {
		openMobile.addEventListener('click', function(){
			document.querySelector('.js--nav').classList.add('is--active');
			document.querySelector('html').classList.add('no-scroll');
			document.querySelector('body').classList.add('no-scroll');
		});
	};

	if (closePopup) {
		closePopup.addEventListener('click', function(){
			document.querySelector('.js--nav').classList.remove('is--active');
			document.querySelector('html').classList.remove('no-scroll');
			document.querySelector('body').classList.remove('no-scroll');
		});
	};

	if (openLogin) {
		openLogin.addEventListener('click', function(e){
			e.preventDefault();
			document.querySelector('.js--login-wrapper').classList.add('is--active');
			document.querySelector('.js--overlay').classList.add('is--active');
			document.querySelector('.js--nav').classList.remove('is--active');
			document.querySelector('html').classList.add('no-scroll');
			document.querySelector('body').classList.add('no-scroll');
		});
	};

	if (openAdotar) {
		openAdotar.addEventListener('click', function(e){
			e.preventDefault();
			document.querySelector('.js--adt-wrapper').classList.add('is--active');
			document.querySelector('.js--overlay').classList.add('is--active');
			document.querySelector('.js--nav').classList.remove('is--active');
			document.querySelector('html').classList.add('no-scroll');
			document.querySelector('body').classList.add('no-scroll');
		});
	};

	if (closeLogin) {
		closeLogin.addEventListener('click', function(e){
			e.preventDefault();
			document.querySelector('.js--login-wrapper').classList.remove('is--active');
			document.querySelector('.js--overlay').classList.remove('is--active');
			document.querySelector('html').classList.remove('no-scroll');
			document.querySelector('body').classList.remove('no-scroll');
		});
	};

	if (closeAdotar) {
		closeAdotar.addEventListener('click', function(e){
			e.preventDefault();
			document.querySelector('.js--adt-wrapper').classList.remove('is--active');
			document.querySelector('.js--overlay').classList.remove('is--active');
			document.querySelector('html').classList.remove('no-scroll');
			document.querySelector('body').classList.remove('no-scroll');
		});
	};

});