let slideIndex = 1;
let autoSlideTimeout;

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
  
    if (n !== undefined) {
      slideIndex = n;
    } else {
      slideIndex++;
    }
  
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
  
    // Fade out all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
  
    // Deactivate all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    // Fade in the current slide
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].className += " active";
  
    // Restart auto-slideshow
    clearTimeout(autoSlideTimeout);
    autoSlideTimeout = setTimeout(() => showSlides(), 6000);
}
  
// function showSlides(n) {
//     const slides = document.getElementsByClassName("mySlides");
//     const dots = document.getElementsByClassName("dot");
  
//     if (n !== undefined) {
//       slideIndex = n;
//     } else {
//       slideIndex++;
//     }
  
//     if (slideIndex > slides.length) { slideIndex = 1; }
//     if (slideIndex < 1) { slideIndex = slides.length; }
  
//     // Hide all slides and remove active class
//     for (let i = 0; i < slides.length; i++) {
//       slides[i].classList.remove("active");
//       slides[i].style.display = "none";
//     }
  
//     // Deactivate all dots
//     for (let i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
  
//     // Show current slide
//     const current = slides[slideIndex - 1];
//     current.style.display = "block";
  
//     // Force reflow to allow transition to trigger
//     void current.offsetWidth;
  
//     current.classList.add("active");
//     dots[slideIndex - 1].className += " active";
  
//     // Optional: Restart auto-slideshow
//     clearTimeout(autoSlideTimeout);
//     autoSlideTimeout = setTimeout(() => showSlides(), 5000);
// }
  
// function showSlides(n) {
//   const slides = document.getElementsByClassName("mySlides");
//   const dots = document.getElementsByClassName("dot");

//   // Manual control
//   if (n !== undefined) {
//     slideIndex = n;
//   } else {
//     slideIndex++;
//   }

//   if (slideIndex > slides.length) { slideIndex = 1; }
//   if (slideIndex < 1) { slideIndex = slides.length; }

//   // Hide all slides
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   // Deactivate all dots
//   for (let i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   // Show current slide
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";

//   // Reset auto-slideshow
//  // clearTimeout(autoSlideTimeout);
//   //autoSlideTimeout = setTimeout(() => showSlides(), 5000); // change image every 3 sec
// }

// Manual controls
function plusSlides(n) {
  showSlides(slideIndex + n);
}

function currentSlide(n) {
  showSlides(n);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});



window.addEventListener('load', function () {
  const target = document.getElementById('target-section');
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 2000; // milliseconds
  let start = null;
  let userInterrupted = false;

  // Detect user interaction
  const interruptEvents = ['wheel', 'touchstart', 'keydown', 'mousedown'];

  function onUserInterrupt() {
    userInterrupted = true;
    // Optionally, remove listeners after first interaction
    interruptEvents.forEach(event =>
      window.removeEventListener(event, onUserInterrupt)
    );
  }

  // Attach listeners
  interruptEvents.forEach(event =>
    window.addEventListener(event, onUserInterrupt, { passive: true })
  );

  function step(timestamp) {
    if (userInterrupted) return;

    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percent = Math.min(progress / duration, 1); // from 0 to 1

    window.scrollTo(0, startPosition + distance * easeInOutQuad(percent));

    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  window.requestAnimationFrame(step);
});

