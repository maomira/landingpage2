window.addEventListener("scroll", function () {
    const parallax = document.querySelector(".parallax");
    let scrollPosition = window.pageYOffset;
    parallax.style.setProperty('--parallax-offset', scrollPosition + 'px');
});
