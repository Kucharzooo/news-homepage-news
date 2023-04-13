const burgerBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const mobileNav = document.querySelector('.nav__nav-mobile-items');
const navShadow = document.querySelector('.nav__shadow');

const handleNav = () => {
	mobileNav.classList.toggle('active-nav');
	navShadow.classList.toggle('active-shadow');
	if (mobileNav.classList.contains('active-nav')) {
		document.body.style.overflowY = 'hidden';
	}
};
const closeNav = () => {
	mobileNav.classList.remove('active-nav');
	navShadow.classList.remove('active-shadow');
	document.body.style.overflowY = 'visible';
};
burgerBtn.addEventListener('click', handleNav);
closeBtn.addEventListener('click', closeNav);
window.addEventListener('click', (e) => {
	if (e.target.classList.contains('nav__shadow')) {
		mobileNav.classList.remove('active-nav');
		navShadow.classList.remove('active-shadow');
	}
});
