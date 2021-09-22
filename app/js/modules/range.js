/* Import jQuery module (npm i jquery) */
import $ from 'jquery';
window.jQuery = $
window.$ = $

/* Header menu functions */

/* Open Header Panel functions */
export function inputRangeHandler() {
    const range = $('input[type="range"]');
    $(range).each(function (index, el) {
        const parent = $(el).parents('.range');
        $(parent).find('.min').text($(el).attr('min'));
        $(parent).find('.max').text($(el).attr('max'));
        $(parent).find('.range-values .current')
                .text($(this).val());
    });
    $(range).on('input', function() {
        const parent = $(this).parents('.range');
        const val = Number( $(this).val() );
        $(parent).find('.range-values .current')
                .text($(this).val());
    })
}