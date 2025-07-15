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


  // カルーセル制御
  const swiper = new Swiper('.swiper', {

    // ループ設定
    loop: true,

    //カーソル設定
    grabCursor: true,

    // ページネーション設定
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // スライド枚数
    slidesPerView: 1, //表示するスライド数
    slidesPerGroup: 1, //クリック時に進むスライド数

  });





}; //script END