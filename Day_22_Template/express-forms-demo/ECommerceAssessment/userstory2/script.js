// JavaScript for Product Listing Page
// Handles fetching, displaying, filtering, and sorting of products

// DOM elements
const productContainer = document.getElementById('productContainer');
const categoryFilter = document.getElementById('categoryFilter');
const priceSort = document.getElementById('priceSort');
const loadingMessage = document.getElementById('loading');

// Array to store products data
let products = [];

// Function to fetch products from JSON file
async function fetchProducts() {
    loadingMessage.style.display = 'block';
    try {
        const response = await fetch('products.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        productContainer.innerHTML = '<p class="text-danger">Failed to load products. Please try again later.</p>';
    } finally {
        loadingMessage.style.display = 'none';
    }
}

// Function to display products in the container
function displayProducts(productsToDisplay) {
    productContainer.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Category: ${product.category}</p>
                        <p class="card-text">Price: $${product.price}</p>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

// Function to filter and sort products based on user selections
function filterAndSortProducts() {
    let filteredProducts = products;

    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    const sortOrder = priceSort.value;
    if (sortOrder === 'low-to-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-to-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(filteredProducts);
}

// Event listeners for filter and sort controls
categoryFilter.addEventListener('change', filterAndSortProducts);
priceSort.addEventListener('change', filterAndSortProducts);

// Initial fetch of products on page load
fetchProducts();
