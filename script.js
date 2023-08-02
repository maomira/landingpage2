document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.pageYOffset;

        // Update the --parallax-offset variable to move the pages based on scroll
        pages.forEach((page) => {
            page.style.setProperty("--parallax-offset", scrollPosition);
        });
    });
});
