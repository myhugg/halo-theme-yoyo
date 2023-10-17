// nav-toggle
$(document).ready((function (_this) {
    return function () {
        let nav, icon
        icon = $('#menu_icon')
        nav = $('#site_nav')
        icon.click(function () {
            nav.slideToggle(250)
        })
    }
})(this))