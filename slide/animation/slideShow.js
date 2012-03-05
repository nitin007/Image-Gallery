(function($){
		
	$.fn.slideShow = function()
	{
		var that  = this;
		var image = $(this).find('img:first-child');
		image.css({
			'position' : 'relative',
			'left' : '0px'
		});
		$(".arrowLeftWrapper").click(function(){
				slidePrev();
			});
	
			$(".arrowRightWrapper").click(function(){
				slideNext();
			});
	
		function slidePrev()
		{
			if(!image.prev()[0])
			{
				var count = 3;
				function test()
				{
					image.css({
						left : function(){
							return parseInt(image.css('left'))-5;
						}
					});
				
					image.next().css({
						left : function(){
							return parseInt(image.next().css('left'))-5;
						}			
					});
				
				
					if(parseInt(image.css('left')) <= -500)
					{
						image.css({
							'position' : 'absolute'
						});
			
						image.next().css({
							'position' : 'relative'
						});
						
						image = image.next();
						count--;
						
						if(!count)
						{
							return;
						}
					}
					
					setTimeout(test, 10);
				}
				
				test();
			}
			else
			{
				function continuePrev()
				{
					image.css({
						left : function(){
							return parseInt(image.css('left'))+5;
						}
					});
					image.prev().css({
						left : function(){
							return parseInt(image.prev().css('left'))+5;
						}			
					});
			
					if(parseInt(image.css('left')) >= 500)
					{
						image.css({
							'position' : 'absolute'
						});
				
						image.prev().css({
							'position' : 'relative'
						});
						image = image.prev();
						return;
					}
					
					setTimeout(continuePrev, 1);
				}
					
				continuePrev();
			}
		}

		function slideNext()
		{
			if(!image.next()[0])
			{
				var count = 3;
				function test()
				{
					image.css({
						left : function(){
							return parseInt(image.css('left'))+5;
						}
					});
				
					image.prev().css({
						left : function(){
							return parseInt(image.prev().css('left'))+5;
						}			
					});
				
				
					if(parseInt(image.css('left')) >= 500)
					{
						image.css({
							'position' : 'absolute'
						});
			
						image.prev().css({
							'position' : 'relative'
						});
						
						image = image.prev();
						count--;
						
						if(!count)
						{
							return;
						}
					}
					
					setTimeout(test, 1);
				}
				
				test();
			}
			else
			{
				function continueNext()
				{
					image.css({
						left : function(){
							return parseInt(image.css('left'))-5;
						}
					});
					image.next().css({
						left : function(){
							return parseInt(image.next().css('left'))-5;
						}			
					});
			
					if(parseInt(image.css('left')) <= -500)
					{
						image.css({
							'position' : 'absolute'
						});
				
						image.next().css({
							'position' : 'relative'
						});
						image = image.next();
						return;
					}
					
					setTimeout(continueNext, 1);
				}
					
				continueNext();
			}
		}
	}
})(jQuery);
