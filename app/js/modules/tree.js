/* Import jQuery module (npm i jquery) */
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$('.trigger').on('click', function(e){
    e.preventDefault();
    
    var childUl = $(this).siblings("ul.tree-parent");
    
    if( childUl.hasClass('open') ){
      
      childUl.removeClass('open');
    } else {
      
      childUl.addClass('open');
    }
    
});