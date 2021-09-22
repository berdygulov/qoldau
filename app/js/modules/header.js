/* Import jQuery module (npm i jquery) */
import $ from 'jquery';
window.jQuery = $
window.$ = $

/* Header menu functions */

/* Open Header Panel functions */
export function openHeaderPanel() {
     const btnEl = $('[data-not-menu-btn="true"]');
     $(btnEl).each(function (index, value) {
         $(value).on('click', function() {
            $(this).addClass('active');
             const parentEl = $(this).parents('.header-inner')
               .find('.header-panel[class!="header-panel menu"]');
               parentEl.addClass('opened');
               $(parentEl).find('.' + $(this).data('panel-element'))
               .addClass('active');
               $('body').addClass('fixed');
        });
    });
}

/* Close Header Panel functions */
export function closeHeaderPanel() {
    const btnEl = $('.header-panel .close');
    $(btnEl).each(function (index, value) {
        $(value).on('click', function() {
            $(this).parents('.header-inner')
                .find('.header-right li')
                .children('.header-btn')
                .removeClass('active');
            $(this).parents('.header-panel') 
               .removeClass('opened');
            $(this).siblings('.active')
            .removeClass('active');
            $('body').removeClass('fixed');
       });
   });
}

/* Open Header Menu functions */
export function openMenuPanel() {
    const btnEl = $('[data-not-menu-btn="false"]');
    $(btnEl).on('click', function() {
        $(this).addClass('active');
        const parentEl = $(this).parents('.header-inner')
          .find('.header-panel[class="header-panel menu"]');
          parentEl.addClass('opened');
          $('body').addClass('fixed');
   });
}
  
