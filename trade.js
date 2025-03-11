document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('appointmentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('successMessage').style.display = 'block';
    });
      
   
    // Sticky navigation
    window.addEventListener('scroll', function() {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    });
  
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav .navigation ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - 80, 
          behavior: 'smooth'
        });
      });
    });
  
    // Apply button effect
    const applyButtons = document.querySelectorAll('.apply-button');
    applyButtons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.querySelector('span').style.color = '#fff';
      });
      button.addEventListener('mouseleave', function() {
        this.querySelector('span').style.color = '';
      });
    });
  
    // Back to top button functionality
    const backToTopButton = document.createElement('button');
  backToTopButton.textContent = '↑';
  backToTopButton.classList.add('back-to-top');
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

/* 
  image tran */
  
  const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

let currentIndex = 0;

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    carouselImages.style.transform = `translateX(${-currentIndex * 100}%)`;
}

setInterval(nextImage, 2000); /*  if want to chang speed of imaged adj the inter */
