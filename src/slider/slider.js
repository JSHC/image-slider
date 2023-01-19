import './slider.css';

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
        setInterval(() => this.nextImage(), 5000);

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

        const prevNavigation = document.createElement('div');
        prevNavigation.classList.add('slide-navigation', 'slide-navigation-prev');
        prevNavigation.addEventListener('click', () => this.previousImage());

        slideNavigation.append(nextNavigation, prevNavigation);
        slidesDiv.appendChild(slideNavigation);

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
        console.log('previousImage called');
        console.log(this.currentImageIndex);
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
        console.log(this.currentImage);
        this.slideImg.src = this.currentImage;
    }

}