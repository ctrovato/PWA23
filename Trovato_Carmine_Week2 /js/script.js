/* ================================= $Accordion Script============================ */

(function($){

  var allPanels = $('.accordion > dd').hide();

$('.accordion > dt > a').click(function(){
    allPanels.slideUp();
  $(this).parent().next().slideDown();
  return false;

}); 

})(jQuery);


/* ================================= $Community Projects Slider ============================ */

jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#myslider ul li').length;
	var slideWidth = $('#myslider ul li').width();
	var slideHeight = $('#myslider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#myslider').css({ width: slideWidth, height: slideHeight });
	$('#myslider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	$('#myslider ul li:last-child').prependTo('#myslider ul');

    function moveLeft() {
        $('#myslider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#myslider ul li:last-child').prependTo('#slider ul');
            $('#myslider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#myslider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#myslider ul li:first-child').appendTo('#myslider ul');
            $('#myslider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});  

/* ================================== $Remove Paragraph ================================== */

$( "button" ).click(function() {
  $( "p" ).remove( ":contains('Spare ribs meatloaf filet mignon, sausage flank leberkas tri-tip tail shank prosciutto ham hock.')" );
});


/* ==================================== $FADE / SHOW Paragraph =========================== */

$( "button:first" ).click(function() {
  $( ".community_info" ).fadeToggle( "slow", "linear" );
});
$( "button:last" ).click(function() {
  $( "p:last" ).fadeToggle( "fast", function() {
    $( "#log" ).append( "<div>finished</div>" );
  });
});


/* ======================================== $TABS ======================================== */

$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  
});
    

