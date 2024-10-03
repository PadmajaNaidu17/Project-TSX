
// Carousel Control Variables
let carouselContainer = document.getElementById('carousel-container');
let scrollAmount = 0;

// Move Carousel Left
function moveLeft() {
  scrollAmount -= 300; // Adjust this value to control the scroll amount per click
  if (scrollAmount < 0) {
    scrollAmount = 0;  // Prevent scrolling beyond the first item
  }
  carouselContainer.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'  // Smooth scrolling
  });
}

// Move Carousel Right
function moveRight() {
  let maxScroll = carouselContainer.scrollWidth - carouselContainer.clientWidth;
  scrollAmount += 300; // Adjust this value to control the scroll amount per click
  if (scrollAmount > maxScroll) {
    scrollAmount = maxScroll;  // Prevent scrolling beyond the last item
  }
  carouselContainer.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'  // Smooth scrolling
  });
}

// Show More Button Functionality
function showMore() {
  const hiddenCards = document.querySelectorAll('.course-card.hidden');
  hiddenCards.forEach(card => {
    card.classList.remove('hidden');  // Reveal the hidden course cards
  });
}

// Toggle Active Class for Sidebar Links
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', function() {
    sidebarLinks.forEach(link => link.classList.remove('active'));  // Remove active class from all links
    this.classList.add('active');  // Add active class to the clicked link
  });
});


// Search functionality
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', (event) => {
  event.preventDefault();

  // Get values from the search inputs
  const searchInput = document.querySelector('.search-input').value.trim();
  const category = document.querySelector('select[name="categories"]').value;
  const country = document.querySelector('select[name="country"]').value;

  // Create a message displaying the search values
  let searchMessage = 'Searching for ';
  searchMessage += searchInput ? `"${searchInput}" ` : '';
  searchMessage += category ? `in category "${category}" ` : '';
  searchMessage += country ? `from country "${country}".` : '';

  // Show the search message as an alert for demonstration purposes
  alert(searchMessage || 'No search criteria provided.');
});

document.addEventListener('DOMContentLoaded', () => {
  // Handle form submission
  const form = document.querySelector('.search-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    showModal(); // Trigger feedback modal
  });

  // Modal functionality
  const modal = document.querySelector('.modal');
  const closeModalBtn = document.querySelector('.close-btn');

  const showModal = () => {
    modal.classList.add('show');
  };

  const hideModal = () => {
    modal.classList.remove('show');
  };
});
