// Toggle navigation menu visibility on small screens
document.querySelector(".menu-toggle").addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("open");
});

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener ("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides  = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // Animation duration (in ms)
        easing: 'ease-in-out',
        once: true,  // whether animation should happen only once while scrolling
    });
});

const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});





// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.querySelector('.scroll-container');
//     let position = 0; // Initial background position

//     // Adjust this value for your desired speed
//     const animationSpeed = 500000; // Pixels per millisecond (600s total for the entire image)

//     function moveBackground() {
//         position -= animationSpeed; // Move background to the left
//         container.style.backgroundPosition = `${position}px 0`;

//         // Use requestAnimationFrame for smooth movement
//         requestAnimationFrame(moveBackground);
//     }

//     // Preload the image to ensure instant appearance
//     const img = new Image();
//     img.src = 'Along_the_River_During_the_Qingming_Festival_\(Qing_Court_Version\).jpg';
//     img.onload = () => {
//         container.style.backgroundImage = `url('${img.src}')`;
//         moveBackground(); // Start the animation once the image is loaded
//     };
// });

// const img = new Image();
// img.src = 'Along_the_River_During_the_Qingming_Festival_(Qing_Court_Version).jpg';

// img.onload = () => {
//     console.log('Image loaded successfully');
//     container.style.backgroundImage = `url('${img.src}')`;
//     moveBackground(); // Start the animation once the image is loaded
// };

// img.onerror = () => {
//     console.error('Failed to load image. Check the file path or network issues.');
// };

// const embed = document.getElementById("clickable-embed");
// const textOverlay = document.getElementById("overlay-text");

// embed.addEventListener("click", () =>{
//     textOverlay.classList.add("move-under");
// });
