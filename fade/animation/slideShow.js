(function($){
		
	$.fn.slideShow = function(type)
	{
		var that  = this;
		var image = $(this).find('img:first-child');		
		image.nextAll().hide();
		$(".arrowLeftWrapper").click(function(){
				$(image).fadeOut('slow', previous);
			});

			$(".arrowRightWrapper").click(function(){
				$(image).fadeOut('slow', nextImage);
			});

		function previous()
		{
			if(!image.prev()[0])
			{
				image = $(that).find('img:last-child');
				image.fadeIn('slow');
			}
			else
			{
				image  = image.prev();
				image.fadeIn('slow');
			}
		}

		function nextImage	()
		{
			if(!image.next()[0])
			{
				image = $(that).find('img:first-child');
				image.fadeIn('slow');
			}
			else
			{
				image  = image.next();
				image.fadeIn('slow');
			}
		}
	}
})(jQuery);
