window.addEventListener("scroll", function () {
    const parallax = document.querySelectorAll(".parallax");
    let scrollPosition = window.pageYOffset;

    parallax.forEach(p => {
        let offset = p.offsetTop;
        let windowHeight = window.innerHeight;
        let parallaxOffset = (scrollPosition - offset) * 0.5;
        p.style.backgroundPositionY = parallaxOffset + "px";
    });

    // Show the content boxes when scrolling to their respective pages
    const boxes = document.querySelectorAll(".box, .reelcrafter-box");
    boxes.forEach(box => {
        let boxOffset = box.offsetTop;
        let boxHeight = box.offsetHeight;
        let boxScrollPosition = scrollPosition + windowHeight * 0.5;

        if (boxScrollPosition >= boxOffset && boxScrollPosition <= boxOffset + boxHeight) {
            box.style.opacity = 1;
            box.style.transform = "translateY(0)";
        } else {
            box.style.opacity = 0;
            box.style.transform = "translateY(20px)";
        }
    });

    // Mouse effect
    const mouse = document.querySelector(".mouse");
    mouse.style.left = event.clientX + "px";
    mouse.style.top = event.clientY + "px";
});
