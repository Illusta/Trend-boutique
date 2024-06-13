function myFunction(x) {
x.classList.toggle("icon");
}


let currentIndex = 0;
const slides = document.querySelectorAll('.banner-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3500); // Change slide every 5 seconds

// Initial display
showSlide(currentIndex);