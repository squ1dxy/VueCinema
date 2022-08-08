class SCROLL{
    constructor(set) {
        if(typeof set.el == 'string') {
            this.el = document.querySelector(set.el);
        }else if(set.el instanceof HTMLElement) {
            this.el = set.el
        }
        this.top = set.top ?? this.el.offsetTop - 4;
        this.el.style.position = 'fixed';
        this.unit = set.unit;
        this.el.style.top = this.scrollNumber() + 'px';
        window.addEventListener('scroll', () => this.scroll())
        window.addEventListener('resize', () => this.scroll())
    }
    scroll() {
        // pageYOffset - берет расстояние от вверха до нашего скролла
        this.window = this.scrollNumber();
        if(this.window - pageYOffset > 0) {
            this.el.style.top = this.window - pageYOffset + 'px';
        }else {
            this.el.style.top = 0;
        }
    }
    scrollNumber() {
        if(this.unit == 'px') {
            return this.top >= 0 ? this.top : 0;
        }else if(this.unit == '%' || this.unit == undefined) {
            return this.calc(window.innerHeight, this.top) - this.el.clientHeight
        }
    }
    calc(height,top) {
        return height * top / 100
    }
}

let myScroll = new SCROLL({
    el: '.header__nav',
    unit: 'px'
});

