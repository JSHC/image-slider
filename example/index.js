import Slider from "../src/slider/slider.js"
import image1 from './assets/ben-kim-r8P5yl7INzc-unsplash.jpg'
import image2 from './assets/dan-arbely-fqREmUNzMxA-unsplash.jpg'
import image3 from './assets/isaac-mitchell-AX_fbQa5fC8-unsplash.jpg'

const slider = new Slider([image1, image2, image3]);

document.body.appendChild(slider);