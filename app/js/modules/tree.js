/* Import jQuery module (npm i jquery) */
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$('.trigger').on('click', function(e){
    e.preventDefault();
    
    var childUl = $(this).parents('span').siblings("ul.tree-parent");
    
    if( childUl.hasClass('open') ){
      
      childUl.removeClass('open');

      $(this).find('.show-text').removeClass('d-none');
      $(this).find('.hide-text').addClass('d-none');
    } else {
      
      childUl.addClass('open');

      $(this).find('.show-text').addClass('d-none');
      $(this).find('.hide-text').removeClass('d-none');
    }
    
});