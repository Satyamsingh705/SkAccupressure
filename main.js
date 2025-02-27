// Product data
const products = [
    // {
    //     id: 1,
    //     name: "Herbal Supplements",
    //     price: 1999,
    //     category: "mats",
    //     image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    //     description: "Premium natural healing supplements for holistic wellness",
    //     badge: "Bestseller",
    //     phone: "+917879925587"
    // },
    // {
    //     id: 2,
    //     name: "Essential Oils",
    //     price: 1499,
    //     category: "oils",
    //     image: "https://images.unsplash.com/photo-1552693673-1bf958298935",
    //     description: "Pure therapeutic grade essential oils for aromatherapy",
    //     badge: "New",
    //     phone: "+917879925587"
    // },
    // {
    //     id: 3,
    //     name: "Healing Crystals",
    //     price: 2499,
    //     category: "tools",
    //     image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    //     description: "Natural energy balancing stones for chakra healing",
    //     badge: "Popular",
    //     phone: "+917879925587"
    // },
    // {
    //     id: 4,
    //     name: "Natural Balms",
    //     price: 999,
    //     category: "oils",
    //     image: "https://images.unsplash.com/photo-1552693673-1bf958298935",
    //     description: "Soothing relief balms made from organic ingredients",
    //     badge: "Limited",
    //     phone: "+917879925587"
    // },
    {
        id: 5,
        name: "Acupuncture Super Set",
        price: 750,
        category: "tools",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK9cMHWXTc3Vm0POEEfFtxx43bv_SAzkpH9ACaVnV4ypsRLVYNq_b18BoYpuU0r7uRJJBy7oObj13_509voI9iNyIZkqBXmAaw-8gssQrm4nyWwhQEjI0bZ6FJ_5c3GKA0rxJ7kDa8WlmdtGm3Wc1bGnEWCSbiL01-MVueO6xv2xoB7LV8hyphenhyphenqRQuFLOKL3/s1650/AcupunctureSuperSet.jpg",
        description: "5-Head Electronic Acupuncture Pen+ Gua Sha Tool+600 Ear Seeds+ Retractable Acupuncture Pen+ 4 x Extra Massaging Gel+ Tweezers+ Manual+ Batteries + 2 x Acupoint Chart Acupuncture Set(with Chart)",
        badge: "Limited",
        phone: "+917879925587"
    },
    {
        id: 6,
        name: "Acupressure Reflexology Magnetic Pyramidal Therapy Power Pain Relief ",
        price: 400,
        category: "FootHeal",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_mpMwy6XSjW7dbnx63q2APbaoBf5uFlo9wPhYqQ1elkAW9Kr54ZLZLGnVobALjCApI15Wfh02dphXznyERoUS4b4-JkdMSJp3Va9gqa7nRj8pTgOfZbcItfervP1oGQ48IUg6Anhwo4SvUA4QDhyX50cmLyJHmHMjGQmy1zR_iA3G3vmEBZXi_tdwCuFj/s736/FootMassageMatAcupressureMat1.jpg",
        description: "Energy Foot Health Mat Set of 1 + Sujok Rings Set of 5 L X W X H – 30 X 30 X 7 cm Yellow Mat",
        badge: "Limited",
        phone: "+917879925587"
    },
    {
        id: 7,
        name: "Massage Slippers Sandals Flip Flops",
        price: 990,
        category: "FootHeal",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNSuAFUbpGjvCycDwv4N4TZ3T8rxVwuNf_9xariWUKTvHIqABkxnDiimN-emtuqAa6QS960DMojIDcDjanzwbQ4TLM94S_nBoXDVmazpXn02q_aIy-gDCVvdL9T43NE4jcCoglp70inIdrNaX6vhnJwkNL9JUlG0Dmoa0XwCQ9CSHviL6rhJXcmt0sLZ2w/s736/Massage%20Slippers%20Sandals%20Flip%20Flops.jpg",
        description: "Neuropathy Arthritis Back Plantar Fasciitis Pain Relief, Xmas Gifts for Dad Mom Coworkers Runners(02XS)",
        badge: "Limited",
        phone: "+917879925587"
    },
    {
        id: 8,
        name: "Acupressure SELF MASSAGE ROLLER FOR ALL",
        price: 150,
        category: "kit",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYIIYa9m_ET-o60jedESGHsbFM6dAKHcdzctchtaXerKH0ikRSs7tO6duAd9MX6H39f0tVzBmcrehsQ2M4WLp1kV1UYH3hY_z7uuMI0K1KxnhQgxECfaIPx08hGeTT8c30T_joExdLO87HvGoWQrEaeLqg4A0fu1UFHn0YfUw2ZB1MM1loC_M_FSDpgS6i/s737/Acupressure%20SELF%20MASSAGE%20ROLLER%20FOR%20ALL.jpg",
        description: "The universal roller Acupressure device has been developed especially keeping in mind the needs of the modern professional.",
        badge: "Limited",
        phone: "+917879925587"
    },
    {
        id: 9,
        name: "Acupressure SELF MASSAGE ROLLER FOR ALL",
        price: 200,
        category: "FootHeal",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjwb-GqRGUaf29-b7MirZe6_noo1EbodjMlKoE8_loQlygea9_-w_FBI60dbelpEfKQgE4iq7jcm3BaizT4fjtI9rfmE4nl4YxUKO_4PuaI3gx46ZBXNZEpGaekCiNRjmCDgZfkeY_HLGDuRNBeXAb63kEcHBL19ZjadKTa3RjDTFxFkoLgWD7mYgr7saA/s800/Magnet%20Plantar%20Massage%20Insoles%20For%20Men%20and%20Women.jpg",
        description: "Type: Massage Insoles Material: Magnet Plantar Size: 36-40 Women; 41-46 Men Free cutting",
        badge: "Limited",
        phone: "+917879925587"
    },
    {
        id: 10,
        name: "Hand Massage Wearable Acupressure",
        price: 45,
        category: "kit",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLqjrroyKwOq2npsRgsse5N02C_rhFVGdHN51UL62FLlpBN9EoLey6KZUDfUL69ZrTYgJXKIm9256TQsMGp6CJnvRUPCLv0q9Mc-_1eXAz7-896I-Vqa3HYjC5_WwBXohVrWpJkyh24UuRCXPjAafLLxDnDgZ8nlbRI9-AqmjCp9nuarl_XNH35pf8fkPg/s736/Headache,%20Tension%20&%20Pain%20Relief!.jpg",
        description: "Headache, Tension & Pain Relief!",
        badge: "Limited",
        phone: "+917879925587"
    },
    ,
    {
        id: 11,
        name: "Wooden Gua Sha Tools Manual Back Massage Sticks Bar Therapy Scraping Lymphatic Drainage",
        price: 999,
        category: "tools",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjy2TmTh9PDlsyalLAoFQKz4w1pr2a1pjYjHrwzd36xsd6GX8ItUN2HMNbXEe1aZbJ_FSkHmca0OsMKdB0-7tRCZWWYkpTS7rMToLnqTI2oUqX9pW3ZRZZTK87S73ipckHYP7qEO54o9rkpml7hIkqmqs1d336604mzZTFu9FgMoSszq8DXgua0i-dnChoz/s747/Wooden%20Gua%20Sha%20Tools%20Manual%20Back%20Massage.jpg",
        description: "Body Massager Sculpting Guasha Tools for Neck Shoulder Back abdomen Leg Double Row 20 Beads SPA",
        badge: "Limited",
        phone: "+917879925587"
    },
    {
        id: 12,
        name: "Suction Cupping Therapy Set",
        price: 2999,
        category: "kit",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_waY4ffZ9D6CpSQbW8oZ9Q-qPdKcPRPeRFR5i2WN4okCtcOSWSAOooMVNHDp4LU-XgWUoBjo8HUWTeR65U0194KkQGTU07Nr04EfoizdP4X-hNHQKdZYSBtd0ahGS4apDjSA01kYWXftD0O0Fq0YcIRWnahhhn2A0Z8T3gBxMHW_uFa_QFon5J5-vZLI0/s1080/Suction%20Cup.jpg",
        description: "Suction Cupping Therapy Set, Anti Cellulite Cup and Cellul",
        badge: "Limited",
        phone: "+917879925587"
    },
    {
        id: 13,
        name: "Acupressure Mat",
        price: 380,
        category: "FootHeal",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0gYsZWIC3ynesXY8Vm137anoPJ5UdgE31jygSQIa0ekeeewXvDXdPYcoU7AW6iD8x1DZxefhEwN7mqXtF6TP4OQC41V-1OFkVQJ9bsusab0QGLOf5fxSKmEGf5vCGnuiTZiadTjrRyFj4NWUxLh5cQoI6q3Dmi_5ATxMoxbijPZ3lP0WSanL6rRTeGHc7/s300/mat.jpg",
        description: "Acupressure Mat foot Massage",
        badge: "Limited",
        phone: "+917879925587"
    },
    ,
    {
        id: 14,
        name: "Acupressure Mat Foot Massage",
        price: 410,
        category: "FootHeal",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOJM6cf-aAOzmQCyG8pT1GxNz7geUuWMprA01wRSnYdj7vkLjjj1VmH0nmGBtG3onICr0Jf7EDTdoJVUqY1G4K9pRjUo6KN2CArzB5aK7CXHuPIAXYGb2sdSOQ67pgyHNM3Ba4UHPjuTPgnO-Be0eyIZVmM8Q36f5TCvroDgaJVmeRUylG2lPNfj6PZ4dp/s736/FootMassageMatAcupressureMat.jpg",
        description: "Acupressure Mat Foot Massage",
        badge: "Limited",
        phone: "+917879925587"
    },
    {
        id: 15,
        name: "Acupressure Sandal",
        price: 750,
        category: "FootHeal",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv9K3RakgRiiW8GGOH3dWWXvEozPpGmoCHW0dKsMeg3kbPXxPSer6eZUHv98VziBhA2Joptc_Fkibq6bS9DNwzhBEhOriwyQFAgh5CM7G-Jg1-wqD2g3WsL7vHn36aCQftl3Veeg-3DAbXCC4RCcAzKRgNwNCgGmU6Yk-ozZZDo67sI41l6J486xobVAZT/s546/Acupressure%20Sandals.jpg",
        description: "Acupressure sandal, arranged points according to scientific foot acupuncture points",
        badge: "Limited",
        phone: "+917879925587"
    },
    {
        id: 16,
        name: "WOODEN Acupressure kit",
        price: 999,
        category: "tools",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_nXRZugYDWcqwkynOGbiHnppTYeXJngfUaU2dwxI-Ta4-KV4F7xKxHBCHH34XF9g4_3pMVesTMbN0D-swIh3g0MWy_eRyocICTfJh0CyQ8U75M8DFz3ude1EFhokbOad4S71uuyvPl7BmSM1RIXQ9RPfZvf-bKNAYqxP0otlDRaYOASyCUzBN7d8rIbxy/s735/WOODEN%20Acupressure%20Massage.jpg",
        description: "acupressure kit the healing art of acupressure is at least 5000 years old and remains the 3rd most popular method for pain and illness relief in the world.",
        badge: "Limited",
        phone: "+917879925587"
    },
    {
        id: 17,
        name: "Magnetic Therapy Pain Plaster Acupuncture Points Pain Relief",
        price: 99,
        category: "kit",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-nahMzEkXczvqmHSS9e6jK3jBgP3FISVDuzDlPDgcujxcmJAkV6E798wnUm7Dj_Nvx7EF4guao1TJhwGcUQkKEQt_HafjCk5TvPmM-JLSn-4QOgbtNNfQHRUSj14eDAcOdFIL2Zq9WH3QVblzpJb774RN6rrzCT6y-YgiZPoBKFDYLpepqNKUJ0hL72Zd/s736/Magnetic%20Therapy%20Pain.jpg",
        description: "Chinese Magnetic Therapy Pain Plaster Acupuncture Points Pain Relief",
        badge: "Limited",
        phone: "+917879925587"
    },
    {
        id: 18,
        name: "Natural Balms",
        price: 999,
        category: "Facial",
        image: "https://images.unsplash.com/photo-1552693673-1bf958298935",
        description: "Soothing relief balms made from organic ingredients",
        badge: "Limited",
        phone: "+917879925587"
    },
    {
        id: 19,
        name: "All one tech 3 Pair Gel Heel Cups",
        price: 199,
        category: "FootHeal",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSUgAVc_-nrsGKqYn8pqwxdgOwqwOgaiHu-2PsVgdFXovqraPVGrBsTl1yAL89c0Kag-V0XXf6KrF7Gj4OLl_G4DX2dMdvSoMlgaygjNAM0kMWuO041wmx0GdmpS8RgBghpgOsa3UUbaYxSIlsoUDSfj9RliD9ALQJ_PQESyeWgMQ47HpiEXDJyYEG1SKh/s1093/All%20one%20tech%203%20Pair%20Gel%20Heel%20Cups.jpg",
        description: "Plantar Fasciitis Inserts - Silicone Gel Heel Pads For Heel Pain, Bone Spur & Achilles Pain, Gel Heel Cushions And Cups, Pad & Shock Absorbing Support",
        badge: "Limited",
        phone: "+917879925587"
    },


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
