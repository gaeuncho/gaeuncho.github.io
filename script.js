// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function () {
            const isOpen = navLinks.classList.toggle('open');
            mobileMenu.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close the menu when a link is chosen (helps single-page-feel nav)
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
                mobileMenu.setAttribute('aria-expanded', 'false');
            });
        });
    }
});

// Expand / collapse publication abstracts
function toggleAbstract(id) {
    const abstract = document.getElementById(id);
    const trigger = document.querySelector('[aria-controls="' + id + '"]');
    if (!abstract) return;
    const isHidden = abstract.style.display === 'none' || !abstract.style.display;
    abstract.style.display = isHidden ? 'block' : 'none';
    if (trigger) trigger.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
}
