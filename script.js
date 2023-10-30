'use strict';
// Slider
let myIndex = 0;
const imgSlider = ['./img/la.jpg', './img/ny.jpg', './img/chicago.jpg'];
const headingSlider = ['Los Angeles', 'New York', 'Chicago'];
const descriptionSlider = [
  'We had the best time playing at Venice Beach!',
  'The atmosphere in New York is lorem ipsum.',
  `Thank you, Chicago - A night we won't forget.`,
];
const changeHero = function () {
  document.querySelector(
    '.section-hero'
  ).style.backgroundImage = `url('${imgSlider[myIndex]}')`;
  document.querySelector('.hero-heading').textContent = headingSlider[myIndex];
  document.querySelector('.hero-description').textContent =
    descriptionSlider[myIndex];
  myIndex++;
  if (myIndex >= imgSlider.length) myIndex = 0;

  setTimeout(changeHero, 4000);
};
changeHero();
// Open & Close modal
// btn close
const btnCloseModal_top = document.querySelector('.icon--close');
const btnCloseModal_bottom = document.querySelector('.btn--close');
// btnopen
const btnOpenModal = document.querySelectorAll('.btn--buy');
// khac
const ticketModal = document.querySelector('.ticketModal');
const overlay = document.querySelector('.overlay');
const closeTicketModal = function () {
  ticketModal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openTicketModal = function () {
  ticketModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.querySelector('.ticketModal').style.transform =
    'translate(-50%, -50%)';
};

btnCloseModal_top.addEventListener('click', closeTicketModal);
btnCloseModal_bottom.addEventListener('click', closeTicketModal);

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openTicketModal);

// Hieu ung chuyen canh
const allLink = document.querySelectorAll('a:link');
allLink.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
