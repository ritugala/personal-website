// You can add this to your HTML file or create a separate JS file

// Typing effect for the introduction
const introElement = document.querySelector('.intro');
const originalText = introElement.innerHTML;
introElement.innerHTML = '';

function typeEffect(element, text, i = 0, speed = 50) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeEffect(element, text, i, speed), speed);
    }
}

// Start the typing effect after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        typeEffect(introElement, originalText);
    }, 500);
});

// Toggle mobile menu
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '☰';
document.querySelector('header .container').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});

// Add scroll reveal animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
});

// Initialize sections as not visible
document.querySelectorAll('section').forEach(section => {
    if (section !== document.querySelector('.hero')) {
        section.classList.add('hidden');
    }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    section.hidden {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    section.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    @media (max-width: 768px) {
        .menu-toggle {
            display: block;
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        nav {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background-color: var(--secondary-bg);
            display: none;
            padding: 1rem;
        }
        
        nav.active {
            display: block;
        }
        
        nav ul {
            flex-direction: column;
        }
        
        nav ul li {
            margin: 0.5rem 0;
        }
    }
`;
document.head.appendChild(style);
