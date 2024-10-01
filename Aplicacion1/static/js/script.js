document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// JavaScript para manejar la ampliación de la imagen
document.querySelectorAll('.galeria .imagen img').forEach(image => {
    image.addEventListener('click', function() {
        const overlay = document.getElementById('overlay');
        const overlayImage = document.getElementById('overlayImage');
        overlayImage.src = this.src; // Asigna la imagen clickeada a la imagen del overlay
        overlay.classList.add('active'); // Muestra el overlay
    });
});

// Cerrar el overlay al hacer clic en la X o fuera de la imagen
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('active');
});

document.getElementById('overlay').addEventListener('click', function(e) {
    if (e.target !== document.getElementById('overlayImage')) {
        this.classList.remove('active');
    }
});