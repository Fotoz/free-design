$(function() {

//smooth-scroling
var $page = $('html, body');
$('a[href*="#"]').click(function() {
	$page.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 800);
	return false;
});

// text slide
var text_slide_cur=0;
function showtext_slide(){
	$('#text_slide'+(text_slide_cur+1)).css({opacity: 0}).animate({opacity: 1.0,left: "0"}, 1000);
	setTimeout(hidetext_slide, 4000);
}
function hidetext_slide(){
	$('#text_slide'+(text_slide_cur+1)).css({opacity: 1}).animate({opacity: 0,left: "0"}, 1000,function(){showtext_slide();});
	text_slide_cur=(text_slide_cur+1)%4;
}
$(document).ready(function() {
	showtext_slide();
})

// button - toTop
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});

});