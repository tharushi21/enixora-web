let current = 0;

function nextSlide() {
    const slides = document.querySelectorAll('.hero-card');
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

function prevSlide() {
    const slides = document.querySelectorAll('.hero-card');
    slides[current].classList.remove('active');
    current = (current - 1 + slides.length) % slides.length;
    slides[current].classList.add('active');
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Navbar Toggle

    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        
        // Menu එක පෙන්වන්න/හංගන්න 'active' class එක toggle කරනවා
        navLinks.classList.toggle('active');
        
        // Hamburger එක 'X' එකක් කරන්න ඕනේ නම් මේකත් toggle කරන්න
        hamburger.classList.toggle('open');
    }


function closeMenu() {
    document.getElementById("navLinks").classList.remove("active");
}

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("active");
    });
}, { threshold: 0.1 });

document.querySelectorAll("[data-animate]").forEach(el => observer.observe(el));


function nextGridSlide() {
  
    alert("“More images are needed here to load the next ones.”!");
}
