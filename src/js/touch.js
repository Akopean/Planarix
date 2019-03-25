//Touch Right  Menu
$(function () {
    const body_touch = {
        touch_right_started: false,
        touch_right_detecting: false,
        touch_right_delta: null,
        touch_right_delta_x: 0
    };
    const sidenav = {
        touch_right_started: false,
        touch_right_detecting: false,
        touch_right_delta: null,
        touch_right_delta_x: 0
    };
    /** body Touch  Right */
   /* document.getElementById('l_site-main').addEventListener('touchstart', function (e) {
        if (e.touches.length !== 1 || body_touch.touch_right_started) {
            return;
        }
        body_touch.touch_right_detecting = body_touch.touch_right_started = true;
        // Запоминаем текущее касание и его координаты
        body_touch.touch_right_delta_x = e.changedTouches[0].pageX;
    }, true);

    document.getElementById('l_site-main').addEventListener('touchmove', function (e) {
        if (!body_touch.touch_right_started && !body_touch.touch_right_detecting) {
            return;
        }

        if (body_touch.touch_right_started) {
            e.preventDefault();
            let delta = body_touch.touch_right_delta_x - e.changedTouches[0].pageX;

            if (delta > 0 || delta < 0) {
                body_touch.touch_right_delta = delta / 5;
            }
        }
    }, false);

    document.getElementById('l_site-main').addEventListener('touchend', function (e) {
        if (e.touches.length >= 1 && !body_touch.touch_right_started) {
            return;
        }
        e.preventDefault();

        body_touch.touch_right_delta < 0 && swiperightHandler();
    }, false);
*/

    /** Sidenav  Touch  Left */
 /*   document.getElementById('sidenav').addEventListener('touchstart', function (e) {
        if (e.touches.length !== 1 || sidenav.touch_right_started) {
            return;
        }

        sidenav.touch_right_detecting = sidenav.touch_right_started = true;
        // Запоминаем текущее касание и его координаты
        sidenav.touch_right_delta_x = e.changedTouches[0].pageX;
    }, false);

    document.getElementById('sidenav').addEventListener('touchmove', function (e) {
        if (!sidenav.touch_right_started && !sidenav.touch_right_detecting) {
            return;
        }

        if (sidenav.touch_right_started) {
            e.preventDefault();

            let delta = sidenav.touch_right_delta_x - e.changedTouches[0].pageX;

            if (delta > 0 || delta < 0) {
                sidenav.touch_right_delta = delta / 5;
            }
        }
    }, false);

    document.getElementById('sidenav').addEventListener('touchend', function (e) {
        if (e.touches.length >= 1 && !sidenav.touch_right_started) {
            return;
        }
        e.preventDefault();

        sidenav.touch_right_delta > 0 && swipeleftHandler();
    }, false);

    function swiperightHandler() {
        $("body").addClass("r-menu_show");
    }

    function swipeleftHandler() {
        $("body").removeClass("r-menu_show");
    }
*/
});