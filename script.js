window.addEventListener("scroll", function () {
    const parallax = document.querySelectorAll(".parallax");
    let scrollPosition = window.pageYOffset;

    parallax.forEach(element => {
        let offset = element.offsetTop - window.innerHeight;
        if (scrollPosition >= offset) {
            element.style.setProperty('--parallax-offset', (scrollPosition - offset) + 'px');
        }
    });
});

// Smooth scroll function
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition;
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
        const menuHeight = document.querySelector('.menu').offsetHeight;
        const targetPosition = document.querySelector(target).getBoundingClientRect().top;
        smoothScroll(target, 1000);
    });
});

// Mouse animation
const mouse = document.querySelector(".mouse");
window.addEventListener("mousemove", (e) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
});
