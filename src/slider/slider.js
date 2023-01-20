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

        this.loadImages(images);
        this.currentImageIndex = 0;
        this.currentImage = this.images[this.currentImageIndex].src;
        //this.nextImageTimeout = setTimeout(() => this.nextImage(), 5000); 

        this.render();
        return this.sliderContainer;
    }

    async loadImages(images) {
        this.images = [];
        for (let index in images) {
            this.loadImage(images, index);
        }
        console.log(this.images);
    }

    loadImage(images, index) {
        let img = new Image();
        img.src = images[index];
        this.images[index] = img;
    }


    render() {

        const slidesDiv = document.createElement('div');
        slidesDiv.classList.add('slides');

        this.imageWrapper = document.createElement('div');
        this.imageWrapper.classList.add('slides-image-wrapper');
        slidesDiv.appendChild(this.imageWrapper);

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
            dotContainer.addEventListener('click', () => {
                this.setCurrentImageIndex(imageIndex);
            })

            dotContainer.appendChild(dot);
            dotNavigation.appendChild(dotContainer);
        }
        slideNavigation.appendChild(dotNavigation);

        for (let image of this.images) {
            this.imageWrapper.appendChild(image);    
            image.classList.add('selected-image');
        }

        this.sliderContainer.appendChild(slidesDiv);
    }

    nextImage() {
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
        for (let image of this.imageWrapper.childNodes) {
            image.style.transform = `translateX(${-100 * this.currentImageIndex}%)`;
        }
        this.updateDotNavigation();
    }

    updateDotNavigation() {
        const dots = Array.from(document.querySelectorAll('.slider-dot'));
        for (const dotIndex in dots) {
            if (Number(dotIndex) === Number(this.currentImageIndex)) {
                dots[dotIndex].classList.add('selected');
            } else {
                dots[dotIndex].classList.remove('selected');
            }
        }
    }

    setCurrentImageIndex(index) {
        this.currentImageIndex = index;
        this.updateImage();
    }

}