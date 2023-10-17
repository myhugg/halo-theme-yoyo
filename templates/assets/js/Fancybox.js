'use strict';

// Fancybox Wrapper
$(document).ready((function (_this) {
    return function () {
        if ($(".article-post").length > 0 && $(".article-post").find("p").find("img").length > 0) {
            var $imgs = $(".article-post").find("p").find("img");
            $imgs.each(function () {
                if (!$(this).hasClass("gallery-img")) {
                    $(this)
                        .wrap('<div class="fancybox"> <a data-fancybox="gallery"  href="' + $(this).attr("src") + '"></a></div>');
                }
            });
        }
    }
})(this))

// Fancybox
$(document).ready((function (_this) {
    return function () {
        if (typeof Fancybox === 'function') {
            Fancybox.bind('[data-fancybox="gallery"]', {
                hideScrollbar: false,
            });
        }
    }
})(this))

// Toc
$(document).ready((function (_this) {
    return function () {
        if ($(".article-post").find('.toc').length < 1) {
            return
        }
        tocbot.init({
            tocSelector: ".toc",
            contentSelector: ".post_content.markdown",
            headingSelector: "h1,h2,h3",
            scrollSmooth: true,
            orderedList: false,

        });
    }
})(this))



