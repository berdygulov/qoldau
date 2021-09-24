/* Import jQuery module (npm i jquery) */
import $ from 'jquery';
import Swiper from 'swiper/bundle';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/ui/i18n/datepicker-ru';
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
if ($('.btn-clip').length > 0) {
  clipboard.clipboardFunction(1000);
}

/* Datepicker */
$('#datepicker').datepicker();

/* Swiper */
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