/* ===================================
   Hamburger Menu Toggle
   =================================== */

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle hamburger menu on click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

/* ===================================
   Button Click Effects
   =================================== */

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

/* ===================================
   Smooth Scroll Spy (Optional)
   =================================== */

window.addEventListener('scroll', () => {
    // Add scroll animation effects here if needed
});

/* ===================================
   Form Submission (Optional)
   =================================== */

// Example: Handle CTA button click
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Cảm ơn bạn quan tâm! Vui lòng điền form đăng ký.');
    });
}

/* ===================================
   Contact Form Handler
   =================================== */

const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Validate form
        if (!data.name || !data.email || !data.subject || !data.message) {
            showMessage('error');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showMessage('error');
            return;
        }

        // Simulate sending (In real application, this would send to a server)
        console.log('Form Data:', data);
        
        // Show success message
        showMessage('success');

        // Reset form
        contactForm.reset();

        // Hide messages after 5 seconds
        setTimeout(() => {
            hideMessages();
        }, 5000);
    });
}

// Show message function
function showMessage(type) {
    if (type === 'success') {
        successMessage.classList.add('show');
        errorMessage.classList.remove('show');
    } else {
        errorMessage.classList.add('show');
        successMessage.classList.remove('show');
    }
}

// Hide all messages
function hideMessages() {
    successMessage.classList.remove('show');
    errorMessage.classList.remove('show');
}
