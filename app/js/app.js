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
import * as datepicker from './modules/datepicker.js';
import * as selectmenu from './modules/selectmenu.js';

/* Header functions */
header.openHeaderPanel();
header.openMenuPanel();
header.closeHeaderPanel();
range.inputRangeHandler();

/* Clipboard function */
if ($('.btn-clip').length > 0) {
  clipboard.clipboardFunction(1000);
}

/* Datepicker initialization*/
if ($('.datepicker').length > 0) {
  datepicker.openDataPicker();
}

/* Selectmenu initialization*/
if ($('.selectmenu').length > 0) {
  selectmenu.openSelectMenu();
}

/* Input focus and blur function */
if ($('input').length > 0 ) {
  /* Datepicker or Select handler function*/
  $('input').on('focus', function() {
    $(this).parent('.input-wrapper')
      .addClass('active');
  })
  $('input').on('blur', function() {
    $(this).parent('.input-wrapper')
      .removeClass('active');
  })
};

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

/* Notification block on the bottom of the site*/
const noteCloseBtn = $('.site-note-close');
$(noteCloseBtn).on('click', function() {
  $(this).parent('.site-note').removeClass('active');
})