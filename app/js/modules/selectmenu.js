/* Import jQuery module (npm i jquery) */
import $ from 'jquery';
import 'jquery-ui/ui/widgets/selectmenu';
window.jQuery = $
window.$ = $

export function openSelectMenu() {
    $('.number').selectmenu();
    $('.ui-selectmenu-button.ui-button').on('click', function() {
        console.log('selectmenu');
    })
    // const selectmenu = $('.selectmenu');

    /* Initialization of Selectmenu Jquery*/
}