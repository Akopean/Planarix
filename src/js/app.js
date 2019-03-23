
window.$ = window.jQuery = require('jquery');


window.Popper = require('popper.js').default;

require('bootstrap');

import PerfectScrollbar from 'perfect-scrollbar';

//Init Scrollbar
if($('.perfect-scrollbar').length && window.innerWidth > 768) {
    const ps = new PerfectScrollbar('.perfect-scrollbar', {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    });
}
//Init Scrollbar
if($('.perfect-scrollbar2').length && window.innerWidth > 768) {
    const ps = new PerfectScrollbar('.perfect-scrollbar2', {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    });
}
//Toggle Mobile Menu
$( ".l-navbar--toggler" ).on( "click", function() {
    $( ".collapse.navbar-collapse").toggleClass('show');
});
//Toggle Dashbord right menu
$( ".l_user-menu--toggle" ).on( "click", function() {
    $( "body").toggleClass('r-menu_show');
});
//Add tooltip
$(".l_other_account-login").tooltip({
    placement: "top"
});
//Add tooltip
$('.cal_img-thumb').on( "click", function() {
    $(this).css({backgroundImage: 'none', visibility: 'hidden', width: 0, height: 0});
});