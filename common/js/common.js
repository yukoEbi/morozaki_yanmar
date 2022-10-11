// FadeIn Animation
jQuery(function () {
	const fadeIn = jQuery('.js-fade-in');
	jQuery(window).on('scroll', function () {
		jQuery(fadeIn).each(function () {
			var offset = jQuery(this).offset().top;
			var scroll = jQuery(window).scrollTop();
			var windowHeight = jQuery(window).height();
			if (scroll > offset - windowHeight + 150) {
				jQuery(this).addClass("js-scroll-in");
			}
		});
	});
});

// Tab Contents
jQuery(function () {
	jQuery('.js-tabSelect li').click(function () {
		var index = jQuery('.js-tabSelect li').index(this);
		jQuery('.js-tabSelect li').removeClass('active');
		jQuery(this).addClass('active');
		jQuery('.js-tabContent').removeClass('show').eq(index).addClass('show');
	});
});


// Header -------------------------
// Fixed Header スクロールしたら表示
const nav = jQuery('.header');
const offset = nav.offset().top;
const height = nav.innerHeight(); //ヘッダー高さ

jQuery(function(){
	jQuery(window).scroll(function(){
		const scroll = jQuery(this).scrollTop();
		//ヘッダーの高さを超えたらfixedクラスをつける
		if(scroll >= height){
			nav.addClass('fixed');
		} else {
			nav.removeClass('fixed');
		}
	})
});
