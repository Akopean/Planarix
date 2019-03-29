 export default class Touch{
    constructor(el, callback) {
        this.el = el;
        this.touch_started = false;
        this.touch_detecting = false;
        this.touch_delta = null;
        this.touch_delta_x = 0;
        this.callback = callback;
    }
    left(){
         this.touch('left');
    };
    right() {
        this.touch('right');
    };
    touch(direction){
        $(this.el).bind('touchstart', this.el, (e) =>  {

            if (e.touches.length !== 1 || this.touch_started) {
                return;
            }

            this.touch_detecting = true;
            // Запоминаем текущее касание и его координаты
            this.touch_delta_x = e.changedTouches[0].pageX;

        }, false);

        $(this.el).bind('touchmove', this.el,  (e) => {
            if (e.touches.length !== 1 && !this.touch_detecting) {
                return;
            }

            if (!this.touch_started) {
                e.preventDefault();
                this.touch_started = true;
                this.touch_delta = this.touch_delta_x - e.changedTouches[0].pageX;
            }
        }, false);

        $(this.el).bind('touchend', this.el, (e) =>  {
            if (e.touches.length !== 1 && !this.touch_started) {
                return;
            }
            e.preventDefault();
            this.touch_started = this.touch_detecting = false;
            if(this.touch_delta > 0 && direction === 'left') {
                this.callback();
            }
            if(this.touch_delta < 0 && direction === 'right') {
                this.callback();
            }
        }, false);
    }
}

