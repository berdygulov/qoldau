/* Import jQuery module (npm i jquery) */
import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/ui/i18n/datepicker-ru';
window.jQuery = $
window.$ = $

export function openDataPicker() {

    const datepicker = $('.datepicker');

    /* Initialization of Datepicker Jquery*/
    $(datepicker).datepicker({ 
        'showOtherMonths': true,
        'prevText': '',
        'nextText': '',
        // 'defaultDate': '',
    });
}