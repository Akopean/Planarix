import Touch from "./touch";

window.$ = window.jQuery = require('jquery');


window.Popper = require('popper.js').default;

require('bootstrap');

import PerfectScrollbar from 'perfect-scrollbar';

require('./touch.js');
require('./jquery.dd.min.js');


//add Touch sidebar left
new Touch('#sidenav', ()=> {
    $("body").removeClass("r-menu_show");
}).left();

//add Touch body right
new Touch('.wrapper', ()=> {
    $("body").addClass("r-menu_show");
}).right();

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

function cc_format(value) {
    let v = value.replace(/\s+/gu, '').replace(/[^0-9]/giu, '');
    let matches = v.match(/\d{4,16}/g);
    let match = matches && matches[0] || '';
    let parts = [];
    for (let i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4));
    }
    if (parts.length) {
        return parts.join(' ');
    } else {
        return v;
    }
}
$('.credit-input').on('input', function() {
    this.value = cc_format(this.value)
});


function cxp_format(value) {

    let v = value.replace(/\s+/gu, '').replace(/[^0-9]/giu, '');
    if(v.length > 2) {
        return  v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
}
$('.cxp-input').on('input', function() {
    this.value = cxp_format(this.value)
});


function cvc_format(value) {

    let v = value.replace(/\s+/gu, '').replace(/[^0-9]/giu, '');
    if(v.length > 3) {
        return v.substring(0, 3);
    }
    return v;
}
$('.cvc-input').on('input', function() {
    this.value = cvc_format(this.value)
});