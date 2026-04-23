// NAVIGASI KE ABOUT
function goToAbout() {
    window.location.href = "ABOUT/about.html";
}

// ANIMASI SCROLL (FADE IN)
const faders = document.querySelectorAll('.fade-in');

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

faders.forEach(el => fadeObserver.observe(el));

// NAVBAR TOGGLE (MOBILE)
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

// LIGHTBOX — KLIK FOTO UNTUK MEMPERBESAR
document.addEventListener('DOMContentLoaded', function() {
    // Buat elemen lightbox
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = '<img src="" alt="Foto fullsize" class="lightbox-img">';
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-img');

    // Tambahkan event listener ke semua foto profil
    document.querySelectorAll('.profile-photo').forEach(photo => {
        photo.style.cursor = 'pointer';
        photo.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Tutup lightbox saat klik overlay
    lightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Tutup lightbox saat tekan Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});