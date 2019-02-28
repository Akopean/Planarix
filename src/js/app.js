
window.$ = window.jQuery = require('jquery');


window.Popper = require('popper.js').default;

require('bootstrap');

//require('fullcalendar');

import PerfectScrollbar from 'perfect-scrollbar';

const ps = new PerfectScrollbar('.perfect-scrollbar', {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
});

$( ".l-navbar--toggler" ).on( "click", function() {
    $( ".collapse.navbar-collapse").toggleClass('show');
});
