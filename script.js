// ============================================
// PRODUCT DATA
// ============================================
const product = [
  {
    id: 0,
    image: 'r1.jpeg',
    title: 'FARMERS QUICHE',
    price: 1.70,
  },
  {
    id: 1,
    image: 'r2.webp',
    title: 'BAGEL FRENCH TOAST CASSEROLE',
    price: 0.53,
  },
  {
    id: 2,
    image: 'r7.jpeg',
    title: 'OPPOSITE OF A SMOOTHIE: BREAKFAST CRUNCHY',
    price: 1.2,
  },
  {
    id: 3,
    image: 'r4.jpeg',
    title: 'MONTE CRISTO SANDWICH',
    price: 15.99,
  },
  {
    id: 4,
    image: 'r5.jpg',
    title: 'DUTCH BABY',
    price: 25,
  },
  {
    id: 5,
    image: 'r8.jpeg',
    title: 'ISRAELI SHAKSHUKA',
    price: 10,
  },
  {
    id: 6,
    image: 'r9.jpeg',
    title: 'FLUFFY MATCHA HOTCAKES',
    price: 16.25,
  },
  {
    id: 7,
    image: 'R3.jpeg',
    title: 'EASY BREAKFAST TACOS',
    price: 1.4,
  },
];

// ============================================
// CART MANAGEMENT
// ============================================
let cart = JSON.parse(localStorage.getItem('foodiesCart')) || [];

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('foodiesCart', JSON.stringify(cart));
}

// ============================================
// DISPLAY PRODUCTS
// ============================================
function displayProducts() {
  const root = document.querySelector("#root");
  if (!root) return;

  root.innerHTML = product.map((item, index) => {
    const { image, title, price } = item;
    const isInCart = cart.some(cartItem => cartItem.id === item.id);
    
    return `
      <div class='product-card' data-product-id="${item.id}">
        <div class='product-image-wrapper'>
          <img class='product-image' src='${image}' alt='${title}' loading="lazy">
          ${isInCart ? '<span class="in-cart-badge"><i class="fa-solid fa-check"></i> In Cart</span>' : ''}
        </div>
        <div class='product-details'>
          <h3 class='product-title'>${title}</h3>
          <p class='product-price'>$ ${price.toFixed(2)}</p>
          <button class='add-to-cart-btn ${isInCart ? 'added' : ''}' 
                  onclick='addToCart(${index})' 
                  data-id="${item.id}">
            <i class="fa-solid fa-cart-${isInCart ? 'check' : 'plus'}"></i>
            ${isInCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>`;
  }).join('');
}

// ============================================
// ADD TO CART
// ============================================
function addToCart(index) {
  const item = product[index];
  
  // Check if item already exists in cart
  const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
  
  if (existingItemIndex !== -1) {
    // Increment quantity if item exists
    cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + 1;
    showNotification(`Added another ${item.title} to cart!`, 'success');
  } else {
    // Add new item with quantity 1
    cart.push({ ...item, quantity: 1 });
    showNotification(`${item.title} added to cart!`, 'success');
  }
  
  saveCart();
  displayCart();
  displayProducts(); // Refresh to show "In Cart" badge
  animateCartIcon();
}

// ============================================
// UPDATE QUANTITY
// ============================================
function updateQuantity(index, change) {
  if (!cart[index]) return;
  
  const newQuantity = (cart[index].quantity || 1) + change;
  
  if (newQuantity <= 0) {
    removeFromCart(index);
    return;
  }
  
  cart[index].quantity = newQuantity;
  saveCart();
  displayCart();
}

// ============================================
// REMOVE FROM CART
// ============================================
function removeFromCart(index) {
  const removedItem = cart[index];
  cart.splice(index, 1);
  saveCart();
  displayCart();
  displayProducts(); // Refresh to remove "In Cart" badge
  showNotification(`${removedItem.title} removed from cart`, 'warning');
}

// ============================================
// DISPLAY CART
// ============================================
function displayCart() {
  const cartItemContainer = document.querySelector(".cartItem");
  const countElement = document.getElementById("count");
  const totalElement = document.getElementById("total");
  
  if (!cartItemContainer) return;
  
  // Calculate total items
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  if (countElement) {
    countElement.textContent = totalItems;
    countElement.style.display = totalItems > 0 ? 'inline-block' : 'none';
  }
  
  // Empty cart state
  if (cart.length === 0) {
    cartItemContainer.innerHTML = `
      <div class="empty-cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Your cart is empty</p>
        <small>Add some delicious recipes!</small>
      </div>`;
    if (totalElement) totalElement.textContent = "$ 0.00";
    return;
  }
  
  // Display cart items
  let total = 0;
  cartItemContainer.innerHTML = cart.map((item, index) => {
    const { image, title, price, quantity = 1 } = item;
    const itemTotal = price * quantity;
    total += itemTotal;
    
    return `
      <div class="cart-item" data-index="${index}">
        <div class="cart-item-image">
          <img src='${image}' alt='${title}'>
        </div>
        <div class="cart-item-info">
          <h4 class="cart-item-title">${title}</h4>
          <p class="cart-item-price">$ ${price.toFixed(2)} each</p>
          <div class="quantity-controls">
            <button onclick='updateQuantity(${index}, -1)' class="qty-btn" aria-label="Decrease quantity">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span class="quantity">${quantity}</span>
            <button onclick='updateQuantity(${index}, 1)' class="qty-btn" aria-label="Increase quantity">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <div class="cart-item-total">
          <p class="item-total-price">$ ${itemTotal.toFixed(2)}</p>
          <button onclick='removeFromCart(${index})' class="remove-btn" aria-label="Remove item">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>`;
  }).join('');
  
  if (totalElement) {
    totalElement.textContent = "$ " + total.toFixed(2);
  }
}

// ============================================
// CLEAR CART
// ============================================
function clearCart() {
  if (cart.length === 0) {
    showNotification('Your cart is already empty!', 'info');
    return;
  }
  
  if (confirm('Are you sure you want to clear your entire cart?')) {
    cart = [];
    saveCart();
    displayCart();
    displayProducts();
    showNotification('Cart cleared successfully', 'warning');
  }
}

// ============================================
// CHECKOUT
// ============================================
function checkout() {
  if (cart.length === 0) {
    showNotification('Your cart is empty! Add some items first.', 'warning');
    return;
  }
  
  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  
  showNotification(`Checkout: ${itemCount} items - $${total.toFixed(2)}\n\nCheckout feature coming soon!`, 'success');
}

// ============================================
// NOTIFICATIONS
// ============================================
function showNotification(message, type = 'success') {
  // Remove existing notifications
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  
  const icons = {
    success: 'check-circle',
    warning: 'exclamation-triangle',
    info: 'info-circle',
    error: 'times-circle'
  };
  
  notification.innerHTML = `
    <i class="fa-solid fa-${icons[type] || 'check-circle'}"></i>
    <span>${message}</span>
  `;
  
  document.body.appendChild(notification);
  
  // Trigger animation
  setTimeout(() => notification.classList.add('show'), 10);
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ============================================
// CART ICON ANIMATION
// ============================================
function animateCartIcon() {
  const cartIcon = document.querySelector('.fa-shopping-cart');
  if (cartIcon) {
    cartIcon.classList.add('bounce');
    setTimeout(() => cartIcon.classList.remove('bounce'), 500);
  }
}

// ============================================
// SCROLL EFFECTS
// ============================================
function initScrollEffects() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

// ============================================
// LAZY LOADING IMAGES
// ============================================
function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list a');
  
  if (!burger || !navList) return;
  
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    navList.classList.toggle('active');
    burger.classList.toggle('active');
  });
  
  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navList.classList.remove('active');
        burger.classList.remove('active');
      }
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navList.classList.contains('active')) {
      navList.classList.remove('active');
      burger.classList.remove('active');
    }
  });
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  
  if (!searchInput || !searchBtn) return;
  
  const performSearch = () => {
    const query = searchInput.value.trim();
    if (query) {
      // In a real app, this would search the recipes
      showNotification(`Searching for: "${query}"\n\nSearch feature coming soon!`, 'info');
      searchInput.value = '';
    } else {
      showNotification('Please enter a search term', 'warning');
    }
  };
  
  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 70;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Display products and cart
  displayProducts();
  displayCart();
  
  // Initialize features
  initMobileMenu();
  initScrollEffects();
  initLazyLoading();
  initSearch();
  initSmoothScroll();
  
  console.log('🍔 Foodies app initialized successfully!');
});

// ============================================
// EXPORT FUNCTIONS FOR HTML
// ============================================
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.clearCart = clearCart;
window.checkout = checkout;
window.displayCart = displayCart;
window.displayProducts = displayProducts;