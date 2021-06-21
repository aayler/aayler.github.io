(function($) {
	$(document).ready(function() {
		//toggle between subnav menus
		$('div.subnav_content').hide();
		$('div.subnav_content:first').show();
		$('ul#subnav li').click(function() {
			var selected = $(this).find('a').attr('href');
			$('ul#subnav li').removeClass('active');
			$(this).addClass('active');
			$('div.subnav_content').hide();
			$('div' + selected).fadeIn();
			$(window).triggerHandler('resize.elastislide');
			return false;
		});
		$('#post-10 ul#subnav li, #post-10 .entry-content, #post-10 .es-carousel a').click(function() {
			$('html,body').scrollTop(164);
			//$('body.page-id-10').scrollTop(164);
		});

		$('li.perma-link').click(function() {
			$(this).children('ul').toggle();
		});
	});
})(jQuery);