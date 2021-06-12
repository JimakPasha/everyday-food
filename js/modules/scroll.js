function scroll () {
	document.querySelectorAll('.header__link').forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault();

			const href = this.getAttribute('href').substring(1);
			
			const scrollTarget = document.getElementById(href);

			const elementPosition = scrollTarget.getBoundingClientRect().top;

			window.scrollBy({
				top: elementPosition,
				behavior: 'smooth'
			});
		});
	});
}

export default scroll;