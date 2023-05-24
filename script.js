// Smooth scrolling effect for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetSection = document.querySelector(link.getAttribute('href'));
        
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: 'smooth'
        });
      });
    });
  });
  