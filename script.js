// Slideshow Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Start slideshow
    showSlide(0);
    setInterval(nextSlide, 4000); // Change slide every 4 second
});

// Set the wedding date (June 15, 2025 at 4:00 PM)
const weddingDate = new Date('June 28, 2025 16:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display results
  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

  // If countdown is finished
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.querySelector(".countdown").innerHTML = "<div class='wedding-day-message'>Today's the day!</div>";
  }
}

// Update every second
const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
