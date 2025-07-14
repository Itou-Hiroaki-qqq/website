'use strict';
{

  // ドロワーメニュー制御
  const humburgar = document.querySelector('.humburgar');
  const nav = document.querySelector('.nav');
  const navClose = document.querySelector('.nav__close');

  humburgar.addEventListener('click', () => {
    humburgar.classList.add('open');
    nav.classList.add('open');
    navClose.classList.add('open');
  });

  navClose.addEventListener('click', () => {
    humburgar.classList.remove('open');
    nav.classList.remove('open');
    navClose.classList.remove('open');
  });




}; //script END