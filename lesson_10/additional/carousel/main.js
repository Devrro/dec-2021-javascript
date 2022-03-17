const slider = document.getElementsByClassName('slider')[0]
const prev = document.getElementsByClassName('prev')[0]
const next = document.getElementsByClassName('next')[0]
const carousel = document.getElementsByClassName('carousel')[0]
const sliderSection = document.getElementsByClassName('sliderSelection')[0]

slider_lenght = document.getElementsByClassName('sliderSelection').length
let dir = -1
let proportion = 100 / slider_lenght;

slider.style.width = `${100 * slider_lenght}%`;
sliderSection.style.width = `${proportion}%`;

let nextImg = () => {
    if (dir === 1) {
        dir = -1;
        slider.prepend(slider.lastElementChild);
        carousel.style.justifyContent = 'flex-start';
    }
    slider.style.transform = `translateX(-${proportion}%)`;

}

let preview = () => {
    if (dir === -1) {
        dir = 1;
        slider.appendChild(slider.firstElementChild)
        carousel.style.justifyContent = 'flex-end'
    }
    slider.style.transform = `translateX(${proportion}%)`
};
next.addEventListener('click', nextImg)
prev.addEventListener('click', preview)

slider.addEventListener('transitionend', function () {
    if (dir === 1) {
        slider.prepend(slider.lastElementChild)
    } else {
        slider.append(slider.firstElementChild)
    }
    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)'
    setTimeout(function () {
        slider.style.transition = 'all 0.5s';
    }, 0.5)

})