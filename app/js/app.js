/* Import jQuery module (npm i jquery) */
import $ from 'jquery';
import Swiper from 'swiper/bundle';
window.jQuery = $
window.$ = $

/* Function import  */
import * as header from './modules/header.js';
import * as range from './modules/range.js';
import * as clipboard from './modules/clipboard.js';

/* Header functions */
header.openHeaderPanel();
header.openMenuPanel();
header.closeHeaderPanel();
range.inputRangeHandler();

/* Clipboard function */
clipboard.clipboardFunction();

const swiper = new Swiper('.hero-swiper', {
  'speed': 300,
  'spaceBetween': 30,
  'pagination': {
      'el': '.hero-swiper-pagination',
      'bulletActiveClass': 'active',
      'bulletClass': 'slider-pagination-dot',
    },
  'navigation': {
      'nextEl': '.hero-swiper-arrow-next',
      'prevEl': '.hero-swiper-arrow-prev',
  },
});

const noteCloseBtn = $('.site-note-close');
$(noteCloseBtn).on('click', function() {
  $(this).parent('.site-note').removeClass('active');
})