/* Import jQuery module (npm i jquery) */
import $ from 'jquery';
import Clipboard from 'clipboard';
window.jQuery = $
window.$ = $

/* Clipboard function */
export function clipboardFunction(timer) {
    const clip = new Clipboard('.btn-clip');
    
    clip.on('success', function(e) {
        const note = $('.site-note');
        $(note).addClass('active');
        $(note).children('.site-note-content')
            .text('Данные скопированы!');
        e.clearSelection();
        setTimeout(function(timer) {
            $(note).removeClass('active');
        }, timer);
    });
}
