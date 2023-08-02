// script.js

// Function to update parallax effect on scroll
function updateParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    const menuHeight = document.getElementById('menu').offsetHeight;

    parallaxElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const offset = rect.top + rect.height / 2;
        const scrollPosition = window.pageYOffset + window.innerHeight / 2;
        const parallaxOffset = (scrollPosition - offset) * 0.5;
        element.style.setProperty('--parallax-offset', parallaxOffset + 'px');
    });
}

// Function to add smooth scroll effect to the menu links
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    const duration = 1000;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Add event listener to update parallax effect on scroll
window.addEventListener("scroll", updateParallax);

// Get menu items and add click event listeners
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target);
    });
});

// Initial call to update parallax effect on page load
updateParallax();
