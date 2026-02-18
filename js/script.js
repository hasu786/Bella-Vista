// DOM Elements
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const menuGrid = document.getElementById('menuGrid');
const galleryGrid = document.getElementById('galleryGrid');
const bookingForm = document.getElementById('bookingForm');
const timeSelect = document.getElementById('time');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');

// Updated Menu Data with Images
// Updated Menu Data with Images (12 items)
const menuItems = [
    {
        id: 1,
        name: 'Bruschetta Classica',
        description: 'Toasted bread with fresh tomatoes, garlic, and basil',
        price: '$12',
        category: 'appetizers',
        image: 'images/bruschetta.jpg',
        alt: 'Fresh bruschetta with tomatoes and basil'
    },
    {
        id: 2,
        name: 'Calamari Fritti',
        description: 'Crispy fried calamari with lemon aioli',
        price: '$16',
        category: 'appetizers',
        image: 'images/Calamari-Fritti.jpg',
        alt: 'Crispy fried calamari with lemon'
    },
    {
        id: 3,
        name: 'Osso Buco',
        description: 'Braised veal shanks with gremolata and saffron risotto',
        price: '$38',
        category: 'mains',
        image: 'images/Osso-Bucco-34.webp',
        alt: 'Braised veal shanks with risotto'
    },
    {
        id: 4,
        name: 'Branzino al Forno',
        description: 'Roasted Mediterranean sea bass with herbs',
        price: '$34',
        category: 'mains',
        image: 'images/Branzino-recipe.webp',
        alt: 'Roasted sea bass with herbs'
    },
    {
        id: 5,
        name: 'Tagliatelle al Tartufo',
        description: 'Fresh pasta with black truffle and mushrooms',
        price: '$28',
        category: 'pasta',
        image: 'images/tagliatelle-al-tartufo.webp',
        alt: 'Fresh pasta with truffle'
    },
    {
        id: 6,
        name: 'Risotto ai Funghi',
        description: 'Carnaroli rice with wild mushrooms and parmesan',
        price: '$26',
        category: 'pasta',
        image: 'images/risotto_ai_funghi.jpg',
        alt: 'Creamy mushroom risotto'
    },
    {
        id: 7,
        name: 'Gnocchi al Pesto',
        description: 'Homemade potato gnocchi with fresh basil pesto, pine nuts, and parmesan cheese',
        price: '$24',
        category: 'pasta',
        image: 'images/pesto-gnocchi.jpg',
        alt: 'Potato gnocchi with green pesto sauce'
    },
    {
        id: 8,
        name: 'Saltimbocca alla Romana',
        description: 'Veal cutlets topped with prosciutto and sage, cooked in white wine and butter sauce',
        price: '$36',
        category: 'mains',
        image: 'images/Saltimbocca-alla-Romana.jpg',
        alt: 'Veal saltimbocca with prosciutto and sage'
    },
    {
        id: 9,
        name: 'Tiramisu Classico',
        description: 'Traditional coffee-flavored Italian dessert',
        price: '$10',
        category: 'desserts',
        image: 'images/Tiramisu.webp',
        alt: 'Classic tiramisu dessert'
    },
    {
        id: 10,
        name: 'Panna Cotta',
        description: 'Vanilla bean panna cotta with berry compote',
        price: '$10',
        category: 'desserts',
        image: 'images/wild+berry+panna+cotta+1.webp',
        alt: 'Panna cotta with berries'
    },
    {
        id: 11,
        name: 'Barolo Riserva',
        description: 'Nebbiolo, aged 5 years, Piedmont',
        price: '$85',
        category: 'wines',
        image: 'images/Viberti.webp',
        alt: 'Barolo wine bottle'
    },
    {
        id: 12,
        name: 'Brunello di Montalcino',
        description: 'Sangiovese, Tuscany',
        price: '$95',
        category: 'wines',
        image: 'images/Brunello-di-Montalcino.jpg',
        alt: 'Brunello wine bottle'
    }
];

// Gallery Data
const galleryImages = [
    { id: 1, src: 'images/gallery1.avif', alt: 'Grilled steak with vegetables', category: 'mains' },
    { id: 2, src: 'images/Black-Truffle-Pasta3.jpg', alt: 'Fresh pasta with truffle', category: 'pasta' },
    { id: 3, src: 'images/Elegant dining room.jpg', alt: 'Elegant dining room', category: 'interior' },
    { id: 4, src: 'images/Decadent chocolate dessert.jpg', alt: 'Decadent chocolate dessert', category: 'desserts' },
    { id: 5, src: 'images/Wine selection.jpg', alt: 'Wine selection', category: 'wines' },
    { id: 6, src: 'images/Seafood platter.jpg', alt: 'Seafood platter', category: 'seafood' },
    { id: 7, src: 'images/Restaurant terrace.webp', alt: 'Restaurant terrace', category: 'exterior' },
    { id: 8, src: 'images/Chef preparing food.jpg', alt: 'Chef preparing food', category: 'kitchen' },
    { id: 9, src: 'images/Cheese Board.jpg', alt: 'Cheese Board', category: 'appetizers' }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    initializeGallery();
    initializeTimeSlots();
    initializeEventListeners();
    checkScroll();
});

// Initialize Event Listeners
function initializeEventListeners() {
    // Navbar scroll effect
    window.addEventListener('scroll', checkScroll);

    // Mobile menu toggle
    menuToggle.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Category filter buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', filterMenu);
    });

    // Booking form submission
    bookingForm.addEventListener('submit', handleBookingSubmit);

    // Modal close
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Input validation on blur
    const formInputs = bookingForm.querySelectorAll('input, select');
    formInputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
    });
}

// Check scroll position for navbar
function checkScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

// Initialize Menu
function initializeMenu() {
    renderMenuItems(menuItems);
}

// Render Menu Items with Images
function renderMenuItems(items) {
    menuGrid.innerHTML = '';
    items.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.style.animationDelay = `${index * 0.1}s`;

        // Add image with error handling
        const img = new Image();
        img.src = item.image;
        img.alt = item.alt;
        img.className = 'menu-item-image';
        img.onerror = function () {
            this.src = 'images/placeholder.jpg'; // Fallback image
            this.alt = 'Image not available';
        };

        menuItem.innerHTML = `
            <div class="menu-item-image-container">
                <img src="${item.image}" 
                     alt="${item.alt}" 
                     class="menu-item-image"
                     loading="lazy"
                     onerror="this.src='images/placeholder.jpg'; this.alt='Image not available';">
            </div>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">${item.price}</span>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Filter Menu by Category
function filterMenu(e) {
    const category = e.target.dataset.category;

    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');

    // Filter items
    const filteredItems = category === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === category);

    renderMenuItems(filteredItems);
}

// Initialize Gallery
function initializeGallery() {
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.1}s`;
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
            <span>${image.alt}</span>
        `;

        galleryItem.addEventListener('click', () => openModal(image.src));
        galleryGrid.appendChild(galleryItem);
    });
}

// Initialize Time Slots
function initializeTimeSlots() {
    const timeSlots = [
        '17:00', '17:30', '18:00', '18:30', '19:00',
        '19:30', '20:00', '20:30', '21:00', '21:30'
    ];

    timeSlots.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });
}

// Validate Form Field
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.id;
    const errorElement = document.getElementById(`${fieldName}Error`);

    if (!errorElement) return true;

    let isValid = true;
    let errorMessage = '';

    switch (fieldName) {
        case 'name':
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters';
            }
            break;

        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
            break;

        case 'phone':
            const phoneRegex = /^[0-9+\-\s()]+$/;
            if (!phoneRegex.test(value) || value.length < 10) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
            break;

        case 'date':
            const selectedDate = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                isValid = false;
                errorMessage = 'Please select a future date';
            }
            break;

        case 'time':
            if (!value) {
                isValid = false;
                errorMessage = 'Please select a time';
            }
            break;

        case 'guests':
            const guests = parseInt(value);
            if (isNaN(guests) || guests < 1 || guests > 20) {
                isValid = false;
                errorMessage = 'Please enter a valid number of guests (1-20)';
            }
            break;
    }

    if (!isValid) {
        field.classList.add('error');
        errorElement.textContent = errorMessage;
    } else {
        field.classList.remove('error');
        errorElement.textContent = '';
    }

    return isValid;
}

// Handle Booking Form Submission
function handleBookingSubmit(e) {
    e.preventDefault();

    // Validate all fields
    const fields = ['name', 'email', 'phone', 'date', 'time', 'guests'];
    let isValid = true;

    fields.forEach(field => {
        const input = document.getElementById(field);
        if (!validateField(input)) {
            isValid = false;
        }
    });

    if (!isValid) return;

    // Disable submit button and show loading state
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Booking...';

    // Simulate API call
    setTimeout(() => {
        alert('Booking confirmed! We look forward to serving you.');
        bookingForm.reset();

        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Confirm Reservation';
    }, 1500);
}

// Open Modal for Gallery Image
function openModal(imageSrc) {
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

// Set minimum date for booking
function setMinDate() {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
}

// Call setMinDate on page load
setMinDate();

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.menu-item, .gallery-item, .contact-info > *');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// Handle active navigation based on scroll
const sections = document.querySelectorAll('section');
const updateActiveNav = () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', updateActiveNav);

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function () {
        this.style.animation = 'fadeIn 0.5s ease';
    });
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// Add keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

// Preload images
function preloadImages() {
    const imageUrls = [...galleryImages.map(img => img.src)];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Call preloadImages after page load
window.addEventListener('load', preloadImages);