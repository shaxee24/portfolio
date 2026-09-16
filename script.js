const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const topBtn = document.getElementById('topBtn');
const navItems = document.querySelectorAll('.nav-links a');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

navItems.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks?.classList.remove('open');
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        topBtn?.classList.add('show');
    } else {
        topBtn?.classList.remove('show');
    }

    const sections = document.querySelectorAll('section[id]');
    let current = 'home';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach((link) => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${current}`);
    });
});

topBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
