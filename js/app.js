const btn = document.querySelector('.btn')
const navbar = document.querySelector('.btn-nav')

btn.addEventListener('click', function (e) {
	e.preventDefault();
	btn.classList.toggle('btn--active');
	navbar.classList.toggle('btn-nav--hidden');

});