// Product data
const products = [
    {
        id: 1,
        name: "Herbal Supplements",
        price: 1999,
        category: "mats",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
        description: "Premium natural healing supplements for holistic wellness",
        badge: "Bestseller",
        phone: "+917879925587"
    },
    {
        id: 2,
        name: "Essential Oils",
        price: 1499,
        category: "oils",
        image: "https://images.unsplash.com/photo-1552693673-1bf958298935",
        description: "Pure therapeutic grade essential oils for aromatherapy",
        badge: "New",
        phone: "+917879925587"
    },
    {
        id: 3,
        name: "Healing Crystals",
        price: 2499,
        category: "tools",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
        description: "Natural energy balancing stones for chakra healing",
        badge: "Popular",
        phone: "+917879925587"
    },
    {
        id: 4,
        name: "Natural Balms",
        price: 999,
        category: "oils",
        image: "https://images.unsplash.com/photo-1552693673-1bf958298935",
        description: "Soothing relief balms made from organic ingredients",
        badge: "Limited",
        phone: "+917879925587"
    }
];

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');

// Event Listeners
searchInput.addEventListener('input', handleSearch);
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        filterProducts(category);
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Functions
function displayProducts(productsToShow = products) {
    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">₹${product.price}</span>
                    <a href="tel:${product.phone}" class="call-to-order">
                        <i class="fas fa-phone"></i>
                        Call to Order
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

function filterProducts(category) {
    if (category === 'all') {
        displayProducts();
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}// Add event listeners for navigation buttons
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const section = e.target.dataset.section;
        if (section === 'products') {
            // Get the products section and navbar height
            const productsSection = document.getElementById('products-grid');
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar.offsetHeight;

            // Scroll to products section with offset for navbar
            window.scrollTo({
                top: productsSection.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
            
            // Update active button state
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
        }
    });
});

// Initialize
displayProducts();
