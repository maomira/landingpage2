window.addEventListener("scroll", function () {
    const parallax = document.querySelector(".parallax");
    let scrollPosition = window.pageYOffset;
    parallax.style.setProperty('--parallax-offset', scrollPosition + 'px');
});
// Smooth scroll function
function smoothScroll(target, duration) {
    const targetPosition = document.querySelector(target).getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

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

// Get menu items and add click event listeners
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target, 1000); // Adjust the duration as needed (in milliseconds)
    });
});
