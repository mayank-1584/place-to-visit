// MORE CONTENT
function toggleContent() {
    var moreContent = document.getElementById("moreudaipur");
    var button = document.querySelector(".read-more-button");
    
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        button.innerText = "Read Less";
    } else {
        moreContent.style.display = "none";
        button.innerText = "Read More";
    }
}


// SLIDER

let sliderStates = [];


function initializeSliders() {
  const sliders = document.querySelectorAll('.slide-container');
  sliderStates = Array.from(sliders).map(() => ({ currentSlide: 0 }));
}


function showSlide(sliderIndex, slideIndex) {
  const slider = document.querySelector(`.slide-container[data-slider="${sliderIndex}"] .slider`);
  const slides = slider.querySelectorAll('.option_desc');
  const maxVisibleSlides = 3; 

  
  if (slideIndex >= slides.length) {
    sliderStates[sliderIndex].currentSlide = 0; 
  } else if (slideIndex < 0) {
    sliderStates[sliderIndex].currentSlide = slides.length - maxVisibleSlides; 
  } else {
    sliderStates[sliderIndex].currentSlide = slideIndex; 
  }

  
  const offset = sliderStates[sliderIndex].currentSlide * (100 / maxVisibleSlides); 
  slider.style.transform = `translateX(-${offset}%)`; 
}


function nextSlide(sliderIndex) {
  showSlide(sliderIndex, sliderStates[sliderIndex].currentSlide + 1);
}

function prevSlide(sliderIndex) {
  showSlide(sliderIndex, sliderStates[sliderIndex].currentSlide - 1);
}


document.querySelectorAll('.prev').forEach(button => {
  button.addEventListener('click', () => {
    const sliderIndex = button.getAttribute('data-slider');
    prevSlide(sliderIndex);
  });
});

document.querySelectorAll('.next').forEach(button => {
  button.addEventListener('click', () => {
    const sliderIndex = button.getAttribute('data-slider');
    nextSlide(sliderIndex);
  });
});


document.addEventListener('DOMContentLoaded', initializeSliders);

document.addEventListener("DOMContentLoaded", function() {
  
    document.querySelectorAll(".show-more").forEach(button => {
        button.addEventListener("click", function() {
            const modalId = this.getAttribute("data-modal-id");
            toggleModal(modalId, "open");
        });
    });

    
    document.querySelectorAll(".modal .close").forEach(button => {
        button.addEventListener("click", function() {
            const modalId = this.getAttribute("data-modal-id");
            toggleModal(modalId, "close");
        });
    });
});


function toggleModal(modalId, action) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = action === "open" ? "block" : "none";
    } else {
        console.warn(`Modal with ID "${modalId}" not found.`);
    }
}

// faq
function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');
    
    if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        answer.style.display = "block";
        arrow.style.transform = "rotate(90deg)";
    }
}


// function generateItinerary() {
//     const budget = document.getElementById('budget').value;
//     const days = document.getElementById('days').value;
//     const people = document.getElementById('people').value;
//     const preferences = document.getElementById('preferences').value || "Standard";

//     let itinerary = `
//         <h3>Your Customized Itinerary</h3>
//         <p><strong>Budget:</strong> ₹${budget}</p>
//         <p><strong>Number of Days:</strong> ${days}</p>
//         <p><strong>Number of People:</strong> ${people}</p>
//         <p><strong>Preferences:</strong> ${preferences}</p>
//         <p>Suggested Plan:</p>
//         <ul>
//             <li>Day 1: Explore City Palace and Lake Pichola.</li>
//             <li>Day 2: Visit Fateh Sagar Lake and Jagdish Temple.</li>
//             <li>Day 3: Check out Saheliyon Ki Bari and enjoy local markets.</li>
//         </ul>
//     `;

//     document.getElementById('itineraryOutput').innerHTML = itinerary;
// }

// // Smooth Scroll for Navigation Links
// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Image Slider for Photos Section
// let currentSlide = 0;
// const slides = document.querySelectorAll('.photo-gallery img');

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.style.display = i === index ? 'block' : 'none';
//     });
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     showSlide(currentSlide);
// }

// // Initialize Slider
// showSlide(currentSlide);
// setInterval(nextSlide, 3000); // Auto-slide every 3 seconds

// // Add buttons to photo gallery
// const photoSection = document.getElementById('photos');
// const nextButton = document.createElement('button');
// const prevButton = document.createElement('button');
// nextButton.innerText = 'Next';
// prevButton.innerText = 'Prev';
// nextButton.onclick = nextSlide;
// prevButton.onclick = prevSlide;
// photoSection.appendChild(prevButton);
// photoSection.appendChild(nextButton);

// // Scroll Animation for Sections
// const sections = document.querySelectorAll('section');
// const options = {
//     threshold: 0.25,
//     rootMargin: "0px 0px -100px 0px"
// };

// const sectionObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//             observer.unobserve(entry.target);
//         }
//     });
// }, options);

// sections.forEach(section => {
//     sectionObserver.observe(section);
// });


