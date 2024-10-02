let slideIndex = 0;
let autoSlideTimeout;

// Initial call to start the slider
showSlides();

// Automatic slideshow function
function showSlides() {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment the slide index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Remove "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and set the active dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Set a timeout for the next auto-slide
    autoSlideTimeout = setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Manual controls for the next/prev buttons
function changeSlide(n) {
    clearTimeout(autoSlideTimeout);  // Clear auto-slide timeout to prevent conflicts
    slideIndex += n;

    let slides = document.getElementsByClassName("slides");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    showManualSlide(slideIndex);
    autoSlideTimeout = setTimeout(showSlides, 4000);  // Restart the auto-slide after manual slide
}

// Function for dot navigation
function currentSlide(n) {
    clearTimeout(autoSlideTimeout);  // Clear auto-slide timeout to prevent conflicts
    slideIndex = n;
    showManualSlide(slideIndex);
    autoSlideTimeout = setTimeout(showSlides, 4000);  // Restart the auto-slide after manual slide
}

// Function to show the selected slide and update dots
function showManualSlide(n) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and set the active dot
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
}













// Function to open a new page when a thumbnail is clicked
function openVideoPage(item) {
    const videoUrl = item.getAttribute('data-video');
    window.location.href = `video.html?video=${encodeURIComponent(videoUrl)}`;
}

// Carousel scroll functionality
const carousel = document.getElementById('video-carousel');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const scrollAmount = 320;

// Scroll Left
leftBtn.addEventListener('click', () => {
    carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

// Scroll Right
rightBtn.addEventListener('click', () => {
    carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

