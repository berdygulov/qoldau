/* Import jQuery module (npm i jquery) */
import $ from 'jquery';
import Clipboard from 'clipboard';
window.jQuery = $
window.$ = $

/* Clipboard function */
export function clipboardFunction() {
    const clip = new Clipboard('.btn-clip');
    
    clip.on('success', function(e) {
        const note = $('.site-note');
        $(note).addClass('active');
        $(note).children('.site-note-content')
            .text('Данные скопированы!');
        e.clearSelection();
    });
}
