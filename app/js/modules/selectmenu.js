/* Import jQuery module (npm i jquery) */
import $ from 'jquery';
import 'jquery-ui/ui/widgets/selectmenu';
window.jQuery = $
window.$ = $

/* Initialization of Selectmenu Jquery*/
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
            if ($(el).val() !== '') {
                $(el).parent('.input-wrapper')
                    .addClass('filled');
            } else {
                $(el).parent('.input-wrapper')
                    .removeClass('filled');
            }
        },
        'select': function( event, el ) {
            // console.log($(el.item.element).val());
        }
    });
}

/* Selectmenu on Input handler*/
export function inputSelectMenu() {
    $('select').on('input', function() {
        // console.log($(this).val());
        console.log('test');
    })
}