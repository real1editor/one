// Configuration
const PORTFOLIO = [
  {
    title: "YouTube - Hair Oil Edit", 
    url: "https://youtube.com/watch?v=xxx",
    category: "youtube",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "TikTok Viral Edit", 
    url: "https://vm.tiktok.com/xxx",
    category: "tiktok",
    image: "https://images.unsplash.com/photo-1616469829476-8953c5655574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Reels - Before/After", 
    url: "https://instagram.com/p/xxx",
    category: "tiktok",
    image: "https://images.unsplash.com/photo-1611746869696-4c17d1c11836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Commercial Ad - Tech Company", 
    url: "https://vimeo.com/xxx",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1579033386963-c9c471d8c444?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Documentary Short Film", 
    url: "https://youtube.com/watch?v=xxx",
    category: "youtube",
    image: "https://images.unsplash.com/photo-1591261730799-049e2bab5c7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Product Launch Video", 
    url: "https://youtube.com/watch?v=xxx",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

// DOM Elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");
const backToTopButton = document.querySelector(".back-to-top");
const navbar = document.querySelector(".navbar");

// Mobile Menu Toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

// Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  
  if (document.body.classList.contains("light-mode")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "dark");
  }
});

// Check for saved theme preference
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

// Sticky Navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Populate portfolio
const portfolioGrid = document.getElementById("portfolioGrid");
PORTFOLIO.forEach((item, index) => {
  const portfolioItem = document.createElement("div");
  portfolioItem.className = "portfolio-item";
  portfolioItem.setAttribute("data-category", item.category);
  portfolioItem.innerHTML = `
    <div class="portfolio-image">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
    </div>
    <div class="portfolio-info">
      <h3>${item.title}</h3>
      <p>Click to view this project on the respective platform.</p>
      <span class="portfolio-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
    </div>
  `;
  
  // Add animation delay based on index
  portfolioItem.style.animationDelay = `${0.3 + index * 0.1}s`;
  
  portfolioItem.addEventListener("click", () => {
    window.open(item.url, "_blank");
  });
  
  portfolioGrid.appendChild(portfolioItem);
});

// Portfolio Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));
    
    // Add active class to clicked button
    button.classList.add("active");
    
    // Get filter value
    const filterValue = button.getAttribute("data-filter");
    
    // Filter portfolio items
    portfolioItems.forEach(item => {
      if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Scroll Animation
const animatedElements = document.querySelectorAll('.feature-card, .service-card, .testimonial-card, .portfolio-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

animatedElements.forEach(element => {
  observer.observe(element);
});

// Form Submissions
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  try {
    // In a real application, you would send this data to a server
    // For demonstration, we'll simulate a successful response
    setTimeout(() => {
      alert("✅ Message sent! I'll get back to you soon.");
      form.reset();
    }, 1000);
  } catch(err) { 
    alert("⚠️ There was an error sending your message. Please try again."); 
    console.error(err); 
  }
});

document.getElementById("feedbackForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  try {
    // In a real application, you would send this data to a server
    // For demonstration, we'll simulate a successful response
    setTimeout(() => {
      alert("✅ Feedback sent! Thank you for your input.");
      form.reset();
    }, 1000);
  } catch(err) { 
    alert("⚠️ There was an error sending your feedback. Please try again."); 
    console.error(err); 
  }
});

// Newsletter Form
document.querySelector(".newsletter-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.querySelector('input[type="email"]').value;
  
  try {
    // In a real application, you would send this data to a server
    // For demonstration, we'll simulate a successful response
    setTimeout(() => {
      alert("✅ Thank you for subscribing to our newsletter!");
      form.reset();
    }, 1000);
  } catch(err) { 
    alert("⚠️ There was an error with your subscription. Please try again."); 
    console.error(err); 
  }
});

// Back to top button
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", function() {
  // Add animation classes to elements
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.classList.add("animate-up");
  }
  
  // Animate section titles
  const sectionTitles = document.querySelectorAll(".section-title");
  sectionTitles.forEach((title, index) => {
    title.style.animationDelay = `${0.2 + index * 0.1}s`;
  });
  
  // Animate about section
  const aboutImage = document.querySelector(".about-image");
  const aboutText = document.querySelector(".about-text");
  if (aboutImage && aboutText) {
    aboutImage.style.animationDelay = "0.3s";
    aboutText.style.animationDelay = "0.5s";
  }
  
  // Animate feature cards
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card, index) => {
    card.style.animationDelay = `${0.3 + index * 0.1}s`;
  });
  
  // Animate service cards
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${0.3 + index * 0.1}s`;
  });
  
  // Animate testimonial cards
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  testimonialCards.forEach((card, index) => {
    card.style.animationDelay = `${0.3 + index * 0.1}s`;
  });
  
  // Animate social links
  const socialLinks = document.querySelectorAll(".social-links a");
  socialLinks.forEach((link, index) => {
    link.style.animationDelay = `${0.3 + index * 0.1}s`;
  });
});
