// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const body = document.body;

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    body.classList.toggle('nav-active');

    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});

// Close menu when clicking on nav links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        body.classList.remove('nav-active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Active Section Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Animate Skill Bars (if you use them)
const skillBars = document.querySelectorAll('.skill-progress');
function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (isElementInViewport(bar)) {
            bar.style.width = width + '%';
        }
    });
}
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Smooth Scrolling for Anchor Links (No effect on CV link)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Submission Alert (Optional)
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = this.querySelector('input[name="name"]').value;
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset();
    });
}

// Page Load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded!');
});
