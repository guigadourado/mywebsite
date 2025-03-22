document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation active state
  const navItems = document.querySelectorAll('.mobile-nav-item');
  const sections = document.querySelectorAll('section');
  
  // Smooth scrolling for nav items
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // Update active state
      navItems.forEach(navItem => navItem.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Update active state on scroll
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition < 100) {
      navItems.forEach(navItem => navItem.classList.remove('active'));
      navItems[0].classList.add('active');
      return;
    }
    
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom && index < navItems.length - 1) {
        navItems.forEach(navItem => navItem.classList.remove('active'));
        navItems[index + 1].classList.add('active');
      }
    });
  });

  // Lazily load images for better performance
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const image = entry.target;
          
          // Only load if not already loaded (has data-src attribute)
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
          }
          
          imageObserver.unobserve(image);
        }
      });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(function(image) {
      imageObserver.observe(image);
    });
  }
  
  // Touch-friendly interactions for mobile
  document.querySelectorAll('.gallery-item').forEach(item => {
    // Add hover effect for touch devices
    item.addEventListener('touchstart', function() {
      this.style.transform = 'translateY(-5px)';
    }, { passive: true });
    
    item.addEventListener('touchend', function() {
      this.style.transform = 'translateY(0)';
    }, { passive: true });
  });
  
  // Simple form submission handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // In a real implementation, you would send the form data to a server
      // For demo purposes, just show success message
      
      // Create success message if it doesn't exist
      let successMessage = document.querySelector('.form-success');
      if (!successMessage) {
        successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.innerHTML = '<p>Your message has been sent successfully! I\'ll get back to you soon.</p>';
        contactForm.insertBefore(successMessage, contactForm.firstChild);
      }
      
      // Show success message
      successMessage.style.display = 'block';
      
      // Reset form
      contactForm.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000);
    });
  }
  
  // Add animation classes to elements as they enter viewport
  if ('IntersectionObserver' in window) {
    const animationObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          animationObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Apply to all sections and other important elements
    document.querySelectorAll('.section, .gallery-item, .tool-item').forEach(function(element) {
      animationObserver.observe(element);
    });
  }
});

// Helper functions
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
