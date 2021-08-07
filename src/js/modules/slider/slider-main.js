import Slider from "./slider";
import Popup from "../popup";
const popup = new Popup('.modules__info .hanson', 3000, '.modules');

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.remove('animated', 'fadeInUp');
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
        this.slides[this.slideIndex - 1].classList.add('animated', 'fadeInUp');
        popup.showPopup();
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);
    }
}