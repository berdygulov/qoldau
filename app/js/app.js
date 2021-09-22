/* Import jQuery module (npm i jquery) */
import $ from 'jquery';
import Swiper from 'swiper/bundle';
window.jQuery = $
window.$ = $

/* Function import  */
import * as header from './modules/header.js';
import * as range from './modules/range.js';

/* Header functions */
header.openHeaderPanel();
header.openMenuPanel();
header.closeHeaderPanel();
range.inputRangeHandler();

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