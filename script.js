window.addEventListener("scroll", function () {
    const parallax = document.querySelectorAll(".parallax");
    let scrollPosition = window.pageYOffset;
    parallax.forEach((element) => {
        element.style.setProperty('--parallax-offset', scrollPosition + 'px');

        const pageId = element.getAttribute('id');
        const contentContainer = element.querySelector('.page-content');
        const contentTop = contentContainer.getBoundingClientRect().top;

        if (contentTop >= 0 && contentTop <= window.innerHeight) {
            // Make the current page's content visible
            contentContainer.classList.add('active');
        } else {
            // Hide content for other pages
            contentContainer.classList.remove('active');
        }
    });
});


// Get menu items and add click event listeners
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        const menuHeight = document.getElementById('menu').offsetHeight; // Get the height of the menu bar
        const targetPosition = document.querySelector(target).getBoundingClientRect().top;
        smoothScroll(target, 1000); // Adjust the duration as needed (in milliseconds)
    });
});
