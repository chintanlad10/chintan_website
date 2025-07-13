// Mobile hamburger menu toggle
const hamburgerToggle = document.querySelector('[data-collapse-toggle="navbar-hamburger"]');
const hamburgerMenu = document.getElementById('navbar-hamburger');

if (hamburgerToggle && hamburgerMenu) {
    hamburgerToggle.addEventListener('click', function() {
        const isExpanded = hamburgerToggle.getAttribute('aria-expanded') === 'true';
        
        // Toggle menu visibility
        hamburgerMenu.classList.toggle('hidden');
        
        // Update ARIA attributes
        hamburgerToggle.setAttribute('aria-expanded', !isExpanded);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const hamburgerMenu = document.getElementById('navbar-hamburger');
            const hamburgerToggle = document.querySelector('[data-collapse-toggle="navbar-hamburger"]');
            if (hamburgerMenu && hamburgerToggle) {
                hamburgerMenu.classList.add('hidden');
                hamburgerToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// Active navigation highlighting and logo animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-yinmn-blue-500');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-yinmn-blue-500');
        }
    });
    
    // Logo animation on scroll
    const logoFull = document.querySelector('.logo-full');
    const logoInitials = document.querySelector('.logo-initials');
    
    if (logoFull && logoInitials) {
        if (window.scrollY > 50) {
            // Hide full name, show initials
            logoFull.classList.remove('opacity-100', 'translate-x-0');
            logoFull.classList.add('opacity-0', '-translate-x-full');
            
            logoInitials.classList.remove('opacity-0', 'translate-x-full');
            logoInitials.classList.add('opacity-100', 'translate-x-0');
        } else {
            // Show full name, hide initials
            logoFull.classList.remove('opacity-0', '-translate-x-full');
            logoFull.classList.add('opacity-100', 'translate-x-0');
            
            logoInitials.classList.remove('opacity-100', 'translate-x-0');
            logoInitials.classList.add('opacity-0', 'translate-x-full');
        }
    }
});

// Add scroll effect to navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
        nav.classList.remove('bg-white/80');
        nav.classList.add('bg-white/95');
    } else {
        nav.classList.remove('shadow-lg');
        nav.classList.remove('bg-white/95');
        nav.classList.add('bg-white/80');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
        }
    });
}, observerOptions);

// Observe all sections for animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Add CSS animation classes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-fadeInUp {
        animation: fadeInUp 0.6s ease-out;
    }
    
    .hover-scale {
        transition: transform 0.3s ease;
    }
    
    .hover-scale:hover {
        transform: scale(1.05);
    }
    
    .hover-lift {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .hover-lift:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(13, 27, 42, 0.15);
    }
`;
document.head.appendChild(style);
