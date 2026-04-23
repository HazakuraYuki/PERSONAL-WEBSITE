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