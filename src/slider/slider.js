import './slider.css';
import rightArrow from './assets/arrow-right.svg';

export default class Slider {
    constructor(images) {
        console.log(Array.isArray(images))
        this.sliderContainer = document.createElement('div');
        this.sliderContainer.classList.add('slider-container');

        if (!images || !Array.isArray(images) || images.length === 0) {
            return this.sliderContainer;
        }
        this.images = images;
        this.currentImageIndex = 0;
        this.currentImage = this.images[this.currentImageIndex];

        this.render();
        this.nextImageTimeout = setTimeout(() => this.nextImage(), 5000);

        return this.sliderContainer;
    }

    render() {
        const slidesDiv = document.createElement('div');
        slidesDiv.classList.add('slides');

        const slideNavigation = document.createElement('div');
        slideNavigation.classList.add('slide-navigation-container')

        const nextNavigation = document.createElement('div');
        nextNavigation.classList.add('slide-navigation', 'slide-navigation-next');
        nextNavigation.addEventListener('click', () => this.nextImage());
        const nextArrow = document.createElement('div');
        nextArrow.classList.add('next-arrow');
        nextNavigation.appendChild(nextArrow);

        const prevNavigation = document.createElement('div');
        prevNavigation.classList.add('slide-navigation', 'slide-navigation-prev');
        prevNavigation.addEventListener('click', () => this.previousImage());
        const prevArrow = document.createElement('div');
        prevArrow.classList.add('prev-arrow');
        prevNavigation.appendChild(prevArrow);

        slideNavigation.append(nextNavigation, prevNavigation);
        slidesDiv.appendChild(slideNavigation);

        const dotNavigation = document.createElement('div');
        dotNavigation.classList.add('slider-dot-navigation-container');
        for (let imageIndex in this.images) {
            const dotContainer = document.createElement('div');
            dotContainer.classList.add('slider-dot-container');

            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (Number(imageIndex) === this.currentImageIndex) {
                dot.classList.add('selected');
            }

            dotContainer.appendChild(dot);
            dotNavigation.appendChild(dotContainer);
        }
        slideNavigation.appendChild(dotNavigation);

        this.slideImg = document.createElement('img');
        this.slideImg.src = this.currentImage;
        slidesDiv.appendChild(this.slideImg);

        this.sliderContainer.appendChild(slidesDiv);
    }

    nextImage() {
        console.log('nextImage called');
        if (this.images.length === 1) {
            return;
        }

        if (this.currentImageIndex + 1 >= this.images.length) {
            this.currentImageIndex = 0;
        } else {
            this.currentImageIndex++;
        }

        this.updateImage();
    }

    previousImage() {
        if (this.images.length === 1) {
            return;
        }

        if (this.currentImageIndex - 1 < 0) {
            this.currentImageIndex = this.images.length - 1;
        } else {
            this.currentImageIndex--;
        }

        this.updateImage();
    }

    updateImage() {
        this.currentImage = this.images[this.currentImageIndex];
        this.slideImg.src = this.currentImage;
        clearTimeout(this.nextImageTimeout);
        this.nextImageTimeout = setTimeout(() => this.nextImage(), 5000);
        this.updateDotNavigation();
    }

    updateDotNavigation() {
        const dots = Array.from(document.querySelectorAll('.slider-dot'));
        console.log(dots);
        for (const dotIndex in dots) {
            if (Number(dotIndex) === Number(this.currentImageIndex)) {
                dots[dotIndex].classList.add('selected');
            } else {
                dots[dotIndex].classList.remove('selected');
            }
        }
    }

}