// Carrossel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
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
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Verificar se todas as imagens foram carregadas
function checkImagesLoaded() {
    const images = document.querySelectorAll('.carousel-item img');
    let loadedImages = 0;

    images.forEach((img) => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener('load', () => {
                loadedImages++;
                if (loadedImages === images.length) {
                    showSlide(currentSlide);
                }
            });
            img.addEventListener('error', () => {
                console.error(`Erro ao carregar a imagem: ${img.src}`);
            });
        }
    });

    if (loadedImages === images.length) {
        showSlide(currentSlide);
    }
}

// Botão de inscrição
document.getElementById('registerBtn').addEventListener('click', (event) => {
    event.preventDefault();
    alert('Obrigado por se inscrever no Céu do Agreste! Em breve entraremos em contato.');
    window.location.href = event.target.href;
});

// Inicializar o carrossel após verificar as imagens
checkImagesLoaded();

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});