let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const compteur = document.getElementById('compteur');
const btnPrecedent = document.getElementById('btn-precedent');
const btnSuivant = document.getElementById('btn-suivant');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    compteur.textContent = `${index + 1} / ${totalSlides}`;
}

btnSuivant.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

btnPrecedent.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});

showSlide(currentSlide);

