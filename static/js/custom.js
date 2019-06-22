(function(){
    var menuLinks = document.getElementsByClassName("link-scroll");

    function attachEventListener (element) {
        element.addEventListener("click", function (e) {
            var targetElement = $(e.target.dataset.where);
            var headerOffsetInPx = 100;

            $([document.documentElement, document.body]).animate({
                scrollTop: targetElement.offset().top - headerOffsetInPx
            }, 700);

        });
    }

    Array.prototype.forEach.call(menuLinks, attachEventListener);
})();