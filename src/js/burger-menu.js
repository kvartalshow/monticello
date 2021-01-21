// $('#sandwichmenu').on('click', function (e) {
//   e.preventDefault();
//   $('#sandwichmenu').toggleClass('active');
//   $('.menu__box').toggleClass('active');
// });
// $('.burger__menu-a').on('click', function (e) {
//   $('#sandwichmenu').toggleClass('active');
//   $('.menu__box').toggleClass('active');
// });
// $('.burger__menu-item').on('click', function (e) {
//   $('#sandwichmenu').toggleClass('active');
//   $('.menu__box').toggleClass('active');
// });

document.querySelector('.tpl-hamburger').addEventListener('click', e => {
  document.querySelector('.tpl-hamburger').classList.toggle('active');
  document.querySelector('.menu__box').classList.toggle('active');
});

document.querySelector('.burger__menu-item').addEventListener('click', e => {
  document.querySelector('.tpl-hamburger').classList.toggle('active');
  document.querySelector('.menu__box').classList.toggle('active');
});

