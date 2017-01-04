
jQuery.fn.niceGrids = function(selector){
    if(!selector || typeof selector !== typeof ""){
        return
    }
 
    var _Max;
    var $targets = $(selector);
    $targets.each(function(outerIndex,container){
        _Max = 0;
        var $container = $(container);
        $container.children().css("height", "auto");
        
        $container.children().each(function(index,box){
            var $item = $(box);
            $itemHeight = $item.outerHeight();
            _Max = $itemHeight > _Max ? $itemHeight : _Max;
        });

        $container.children().each(function(){
            $(this).css("height", _Max);
        });
    });

};
jQuery(document).ready(function($){
    $.fn.niceGrids();
	var selector = "[nice-grids]", w = $(window), lastWidth, autoWidth;
    w.on("resize", function(){
        clearTimeout(resizeTimeout);
        var resizeTimeout = setTimeout(function(){
			var currentWidth = w.width();
			if(currentWidth === lastWidth){
				return false;
			}
			lastWidth = currentWidth;
			if(currentWidth < 768){
				if(autoWidth){
					return false;
				}
				autoWidth = true;
				return $(selector).height("auto");
			}
            $.fn.niceGrids(selector);
        }, 250)
    })
});