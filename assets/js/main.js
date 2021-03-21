// SHOW MENU MOBILE
var menuResponsive = {
    init: function() {
        this.showMenu();

    },
    showMenu: function() {
        var icon_bars = document.querySelector(".header_bottom .icon .fa-bars");
        var menu_mobile = document.querySelector(".menu");

        icon_bars.addEventListener('click', function() {
            menu_mobile.classList.toggle('show');
        });
    },

}
menuResponsive.init();
// WINDOW SCROLL HIDE MENU


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "50px";
    } else {
        document.getElementById("navbar").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
}

//PAGINATION
var items = $(".event .row .col-md-6");
var numItems = items.length;
var perPage = 6;

items.slice(perPage).hide();

$('#pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: " ",
    onPageClick: function(pageNumber) {
        var showFrom = perPage * (pageNumber - 1);
        var showTo = showFrom + perPage;
        items.hide().slice(showFrom, showTo).show();
    }
});