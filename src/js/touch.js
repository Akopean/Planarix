//Touch Right  Menu
$(function () {
    const body_touch = {
        touch_started: false,
        touch_detecting: false,
        touch_delta: null,
        touch_delta_x: 0
    };
    const sidenav = {
        touch_started: false,
        touch_detecting: false,
        touch_delta: null,
        touch_delta_x: 0
    };
    /** body Touch  Right */
     document.getElementById('l_site-main').addEventListener('touchstart', function (e) {
         if (e.touches.length !== 1 || body_touch.touch_started) {
             return;
         }
         body_touch.touch_detecting = true;
         // Запоминаем текущее касание и его координаты
         body_touch.touch_delta_x = e.changedTouches[0].pageX;
     }, false);

     document.getElementById('l_site-main').addEventListener('touchmove', function (e) {
         if (e.touches.length !== 1&& !body_touch.touch_detecting) {
             return;
         }

         if (!body_touch.touch_started) {
             e.preventDefault();
             body_touch.touch_started = true;
             body_touch.touch_delta = body_touch.touch_delta_x - e.changedTouches[0].pageX;

         }
     }, false);

     document.getElementById('l_site-main').addEventListener('touchend', function (e) {
         if (e.touches.length !== 1 && !body_touch.touch_started) {
             return;
         }
         e.preventDefault();
         body_touch.touch_started = body_touch.touch_detecting = false;
         body_touch.touch_delta < 0 && swiperightHandler();
     }, false);


    /** Sidenav  Touch  Left */
      document.getElementById('sidenav').addEventListener('touchstart', function (e) {

          if (e.touches.length !== 1 || sidenav.touch_started) {
              return;
          }

          sidenav.touch_detecting = true;
          // Запоминаем текущее касание и его координаты
          sidenav.touch_delta_x = e.changedTouches[0].pageX;

      }, false);

    document.getElementById('sidenav').addEventListener('touchmove', function (e) {
        if (e.touches.length !== 1 && !sidenav.touch_detecting) {
            return;
        }

        if (!sidenav.touch_started) {
            e.preventDefault();
            sidenav.touch_started = true;
            sidenav.touch_delta = sidenav.touch_delta_x - e.changedTouches[0].pageX;
        }
    }, false);

    document.getElementById('sidenav').addEventListener('touchend', function (e) {
        if (e.touches.length !== 1 && !sidenav.touch_started) {
            return;
        }

        e.preventDefault();
        sidenav.touch_started = sidenav.touch_detecting = false;
        sidenav.touch_delta > 0 && swipeleftHandler();
    }, false);

    function swiperightHandler() {
        $("body").addClass("r-menu_show");
    }

    function swipeleftHandler() {
        $("body").removeClass("r-menu_show");
    }

});