
$.fn.niceGrids = function(){
    var selector = "[nice-grids]";
    if(!selector || typeof selector !== typeof ""){
        return
    }
    var _Max;
    var $targets = $(selector);
    $targets.each(function(outerIndex,container){
        _Max = 0;
        var $container = $(container);
        $container.children().css("height", "auto");
        if($(window).width() < 769) return;
        $container.children().each(function(index,box){
            var $item = $(box);
            //$item.css("auto");
            $itemHeight = $item.outerHeight();
            _Max = $itemHeight > _Max ? $itemHeight : _Max;
        });

        $container.children().each(function(){
            $(this).css("height", _Max);
        });
    });

};
$(document).ready(function(){
    $.fn.niceGrids();
    $(window).on("resize", function(){
        clearTimeout(resizeTimeout);
        var resizeTimeout = setTimeout(function(){
            $.fn.niceGrids();
        }, 250)
    })
});