// // Wait until the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function() {
//   let currentSlide = 0;  // Index of the current slide
//   const slides = document.querySelectorAll('.slide'); // Select all slides
//   const totalSlides = slides.length; // Total number of slides

//   // Function to display the slide at a specific index
//   function showSlide(index) {
//     slides.forEach((slide, i) => {
//       slide.classList.remove('active'); // Hide all slides
//       if (i === index) {
//         slide.classList.add('active'); // Show the current slide
//       }
//     });
//   }

//   // Function to move to the next slide
//   function nextSlide() {
//     currentSlide = (currentSlide + 1) % totalSlides; // Increment slide index and loop back to the start
//     showSlide(currentSlide); // Display the updated slide
//   }

//   // Initialize the first slide as active
//   showSlide(currentSlide);

//   // Set up automatic sliding every 3 seconds
//   setInterval(nextSlide, 3000);
// });
