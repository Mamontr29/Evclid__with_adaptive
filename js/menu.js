window.addEventListener('DOMContentLoaded', function () {

	document.querySelector('.burger').addEventListener('click', function () {
		document.querySelector('.header__nav').classList.add('is-active')
	})

	document.querySelector('.nav__menu-reset').addEventListener('click', function () {
		document.querySelector('.header__nav').classList.remove('is-active')
	})

})