/* Import jQuery module (npm i jquery) */
import $ from 'jquery';
import 'jquery-ui/ui/widgets/selectmenu';
window.jQuery = $
window.$ = $

export function openSelectMenu() {
    $('.selectmenu').selectmenu({
        'open': function(event) {
            const el = event.target; 
            $(el).parent('.input-wrapper')
            .addClass('active');
        },
        'close': function(event) {
            const el = event.target; 
            $(el).parent('.input-wrapper')
            .removeClass('active');
        },
        select: function( event, el ) {
            $(el.item.element).parents('.input-wrapper')
                .find('.ui-selectmenu-text')
                .css('color', '#1E1E1E');
        }
    });
    /* Initialization of Selectmenu Jquery*/
}