
window.$ = window.jQuery = require('jquery');


window.Popper = require('popper.js').default;

require('bootstrap');

//require('fullcalendar');

import PerfectScrollbar from 'perfect-scrollbar';

if($('.perfect-scrollbar').length) {
    const ps = new PerfectScrollbar('.perfect-scrollbar', {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    });
}
$( ".l-navbar--toggler" ).on( "click", function() {
    $( ".collapse.navbar-collapse").toggleClass('show');
});

$( ".l_user-menu--toggle" ).on( "click", function() {
    $( "body").toggleClass('r-menu_show');
});

$(".l_other_account-login").tooltip({
    placement: "top"
});
