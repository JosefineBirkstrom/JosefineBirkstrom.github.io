let currentSlide = 0;
const slides = document.querySelectorAll('.product-slideshow img');

// Vis det første billede som aktivt
slides[currentSlide].classList.add('active');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function prevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}


function goBack() {
    // Tilbage-knap handling (f.eks. omdirigering til forrige side)
    history.back();
}