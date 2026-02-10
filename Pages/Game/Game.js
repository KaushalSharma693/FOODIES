// ============================================
// PRODUCT DATA WITH RECIPES
// ============================================
const product = [
  {
    id: 0,
    image: '/images/g1.webp',
    title: 'ORANGE CREAMSICLE CHEESECAKE BASKETBALL',
    price: 24.00,
    time: '4 hours',
    servings: '12 servings',
    difficulty: 'Medium',
    ingredients: [
      '2 cups graham cracker crumbs',
      '1/2 cup melted butter',
      '3 packages (8 oz each) cream cheese, softened',
      '1 cup sugar',
      '3 eggs',
      '1 cup sour cream',
      '1/4 cup orange juice',
      '2 tsp orange zest',
      '1 tsp vanilla extract',
      'Orange food coloring',
      'Whipped cream for decoration'
    ],
    instructions: [
      'Preheat oven to 325°F (165°C). Mix graham cracker crumbs with melted butter and press into bottom of 9-inch springform pan.',
      'Beat cream cheese and sugar until smooth. Add eggs one at a time, beating well after each addition.',
      'Mix in sour cream, orange juice, orange zest, and vanilla. Add orange food coloring until desired color.',
      'Pour filling over crust. Bake for 55-60 minutes until center is almost set.',
      'Cool completely, then refrigerate for at least 3 hours.',
      'Decorate with whipped cream to create basketball lines. Serve chilled.'
    ]
  },
  {
    id: 1,
    image: '/images/g2.webp',
    title: 'CHARRED JALAPENO POPPERS',
    price: 52.00,
    time: '45 minutes',
    servings: '24 poppers',
    difficulty: 'Easy',
    ingredients: [
      '12 large jalapeño peppers',
      '8 oz cream cheese, softened',
      '1 cup shredded cheddar cheese',
      '1/2 cup shredded monterey jack cheese',
      '1/2 tsp garlic powder',
      '1/2 tsp onion powder',
      '12 slices bacon, halved',
      'Salt and pepper to taste',
      'Fresh cilantro for garnish'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C). Line a baking sheet with parchment paper.',
      'Cut jalapeños in half lengthwise and remove seeds and membranes (wear gloves!).',
      'Mix cream cheese, cheddar, monterey jack, garlic powder, and onion powder in a bowl.',
      'Fill each jalapeño half with cheese mixture.',
      'Wrap each pepper with a half slice of bacon and secure with toothpick.',
      'Bake for 25-30 minutes until bacon is crispy and peppers are charred.',
      'Let cool for 5 minutes, garnish with cilantro, and serve hot.'
    ]
  },
  {
    id: 2,
    image: '/images/g3.webp',
    title: 'MINI PIZZAS',
    price: 15.49,
    time: '30 minutes',
    servings: '12 mini pizzas',
    difficulty: 'Easy',
    ingredients: [
      '6 English muffins, split',
      '1 cup pizza sauce',
      '2 cups shredded mozzarella cheese',
      '1/2 cup mini pepperoni slices',
      '1/4 cup sliced black olives',
      '1/4 cup diced bell peppers',
      '1/4 cup sliced mushrooms',
      '1 tsp Italian seasoning',
      'Fresh basil leaves',
      'Olive oil for brushing'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C). Place English muffin halves on baking sheet.',
      'Lightly brush each muffin half with olive oil.',
      'Spread 1-2 tablespoons pizza sauce on each muffin half.',
      'Sprinkle generously with mozzarella cheese.',
      'Add your choice of toppings: pepperoni, olives, bell peppers, mushrooms.',
      'Sprinkle with Italian seasoning.',
      'Bake for 12-15 minutes until cheese is bubbly and golden.',
      'Garnish with fresh basil and serve immediately.'
    ]
  },
  {
    id: 3,
    image: '/images/g4.webp',
    title: 'CHOCOLATE PEANUT BUTTER RICE KRISPIES TREATS',
    price: 8.54,
    time: '20 minutes',
    servings: '16 squares',
    difficulty: 'Easy',
    ingredients: [
      '3 tablespoons butter',
      '4 cups mini marshmallows',
      '6 cups Rice Krispies cereal',
      '1 cup peanut butter',
      '1 1/2 cups chocolate chips',
      '2 tablespoons vegetable oil',
      'Sea salt for topping',
      'Crushed peanuts (optional)'
    ],
    instructions: [
      'Grease a 9x13 inch pan with butter.',
      'In large pot, melt butter over low heat. Add marshmallows and stir until completely melted.',
      'Remove from heat and stir in peanut butter until smooth.',
      'Add Rice Krispies cereal and mix until well coated.',
      'Press mixture evenly into prepared pan using buttered spatula.',
      'Melt chocolate chips with vegetable oil in microwave, stirring every 30 seconds.',
      'Pour chocolate over Rice Krispies mixture and spread evenly.',
      'Sprinkle with sea salt and crushed peanuts if desired. Let cool completely before cutting.'
    ]
  },
  {
    id: 4,
    image: '/images/g5.webp',
    title: 'LINDAS TACO SCOOP APPETIZERS',
    price: 13.00,
    time: '15 minutes',
    servings: '30 scoops',
    difficulty: 'Very Easy',
    ingredients: [
      '1 lb ground beef',
      '1 packet taco seasoning',
      '1 cup sour cream',
      '1 cup salsa',
      '2 cups shredded lettuce',
      '1 cup shredded cheddar cheese',
      '1 cup diced tomatoes',
      '1/2 cup sliced jalapeños',
      '30 scoop-shaped tortilla chips',
      'Fresh cilantro for garnish'
    ],
    instructions: [
      'Brown ground beef in skillet over medium-high heat. Drain excess fat.',
      'Add taco seasoning and 1/4 cup water. Simmer for 5 minutes until thickened.',
      'Arrange tortilla scoops on a large serving platter.',
      'Fill each scoop with seasoned ground beef.',
      'Top with a small dollop of sour cream.',
      'Add shredded lettuce, diced tomatoes, and shredded cheese.',
      'Garnish with jalapeño slices, cilantro, and a drizzle of salsa.',
      'Serve immediately while meat is still warm.'
    ]
  },
  {
    id: 5,
    image: '/images/g6.webp',
    title: 'RANCH SALAD',
    price: 13.29,
    time: '15 minutes',
    servings: '8 servings',
    difficulty: 'Very Easy',
    ingredients: [
      '1 head romaine lettuce, chopped',
      '1 cup cherry tomatoes, halved',
      '1 cup cucumber, diced',
      '1/2 cup red onion, thinly sliced',
      '1 cup shredded cheddar cheese',
      '1 cup croutons',
      '6 strips bacon, cooked and crumbled',
      '1 cup ranch dressing',
      '1/2 cup shredded carrots',
      'Black pepper to taste'
    ],
    instructions: [
      'Wash and thoroughly dry all vegetables.',
      'In a large bowl, combine chopped romaine lettuce.',
      'Add cherry tomatoes, cucumber, and red onion.',
      'Toss in shredded carrots and cheddar cheese.',
      'Add croutons just before serving to keep them crispy.',
      'Drizzle with ranch dressing and toss gently to coat.',
      'Top with crumbled bacon and fresh black pepper.',
      'Serve immediately for best texture and freshness.'
    ]
  },
  {
    id: 6,
    image: '/images/g7.webp',
    title: 'BEER JELLO SHOTS',
    price: 25.99,
    time: '4 hours',
    servings: '24 shots',
    difficulty: 'Easy',
    ingredients: [
      '2 cups light beer',
      '3 packets unflavored gelatin',
      '1/2 cup sugar',
      '1 cup vodka or rum',
      '1/4 cup lemon juice',
      'Yellow food coloring (optional)',
      'Whipped cream for topping',
      'Lemon zest for garnish'
    ],
    instructions: [
      'Pour beer into saucepan and sprinkle gelatin over surface. Let stand 2 minutes.',
      'Heat beer mixture over medium heat, stirring until gelatin dissolves completely.',
      'Remove from heat and stir in sugar until dissolved.',
      'Add vodka or rum and lemon juice. Stir well.',
      'Add yellow food coloring if desired for authentic beer color.',
      'Pour mixture into 2 oz plastic shot cups, filling 3/4 full.',
      'Refrigerate for at least 4 hours or until fully set.',
      'Top with whipped cream and lemon zest before serving to mimic beer foam.'
    ]
  },
  {
    id: 7,
    image: '/images/g8.webp',
    title: 'YUMMY BAKED POTATO SKINS',
    price: 12.87,
    time: '1 hour',
    servings: '16 skins',
    difficulty: 'Easy',
    ingredients: [
      '8 medium russet potatoes',
      '1/4 cup olive oil',
      '2 cups shredded cheddar cheese',
      '1 cup cooked bacon, crumbled',
      '1/2 cup sour cream',
      '1/4 cup green onions, chopped',
      '1 tsp garlic powder',
      '1 tsp paprika',
      'Salt and pepper to taste',
      'Ranch dressing for dipping'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C). Scrub potatoes and pierce with fork.',
      'Bake potatoes for 50-60 minutes until tender. Let cool.',
      'Cut each potato in half lengthwise. Scoop out most of flesh, leaving 1/4 inch shell.',
      'Brush potato skins inside and out with olive oil.',
      'Season with garlic powder, paprika, salt, and pepper.',
      'Place on baking sheet and bake 10 minutes until crispy.',
      'Fill each skin with cheddar cheese and bacon. Bake 5 more minutes until cheese melts.',
      'Top with sour cream and green onions. Serve hot with ranch dressing.'
    ]
  }
];

// ============================================
// DISPLAY PRODUCTS
// ============================================
function displayProducts() {
  const root = document.querySelector("#root");
  if (!root) return;

  root.innerHTML = product.map((item, i) => {
    const { image, title, price, time, servings, difficulty } = item;
    return `
      <div class='box' data-index="${i}">
        <div class='img-box'>
          <img class='images' src='${image}' alt='${title}' loading="lazy">
          <span class="recipe-badge">${difficulty}</span>
        </div>
        <div class='bottom'>
          <p>${title}</p>
          <div class="recipe-info">
            <span><i class="fa-regular fa-clock"></i> ${time}</span>
            <span><i class="fa-solid fa-utensils"></i> ${servings}</span>
          </div>
          <div class="price-row">
            <h2>$ ${price.toFixed(2)}</h2>
          </div>
          <div class="action-buttons">
            <button class="view-recipe-btn" onclick="openRecipeModal(${i})">
              <i class="fa-solid fa-book-open"></i> View Recipe
            </button>
            <button class="add-cart-btn" onclick="addToCartFromGrid(${i})">
              <i class="fa-solid fa-cart-plus"></i> Add
            </button>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ============================================
// MODAL FUNCTIONS
// ============================================
let currentRecipeIndex = null;

function openRecipeModal(index) {
  currentRecipeIndex = index;
  const item = product[index];
  const modal = document.getElementById('recipeModal');
  
  // Populate modal content
  document.getElementById('modalImage').src = item.image;
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalTime').textContent = item.time;
  document.getElementById('modalServings').textContent = item.servings;
  document.getElementById('modalDifficulty').textContent = item.difficulty;
  document.getElementById('modalPrice').textContent = `$ ${item.price.toFixed(2)}`;
  
  // Populate ingredients
  const ingredientsList = document.getElementById('ingredientsList');
  ingredientsList.innerHTML = item.ingredients.map(ing => `<li>${ing}</li>`).join('');
  
  // Populate instructions
  const instructionsList = document.getElementById('instructionsList');
  instructionsList.innerHTML = item.instructions.map(inst => `<li>${inst}</li>`).join('');
  
  // Show modal
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeRecipeModal() {
  const modal = document.getElementById('recipeModal');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
  currentRecipeIndex = null;
}

function showTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Remove active class from all buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show selected tab
  document.getElementById(tabName).classList.add('active');
  
  // Add active class to clicked button
  event.target.classList.add('active');
}

// ============================================
// CART FUNCTIONS
// ============================================
function addToCartFromGrid(index) {
  const item = product[index];
  addToCartWithNotification(item);
}

function addToCartFromModal() {
  if (currentRecipeIndex !== null) {
    const item = product[currentRecipeIndex];
    addToCartWithNotification(item);
    closeRecipeModal();
  }
}

function addToCartWithNotification(item) {
  // Check if addToCart function exists (from cart.js)
  if (typeof addToCart === 'function') {
    addToCart({
      id: "game-" + item.id,
      title: item.title,
      price: item.price,
      image: item.image
    });
    showNotification(`${item.title} added to cart!`, 'success');
  } else {
    // Fallback if cart.js is not loaded
    console.log('Cart system not available');
    alert(`${item.title} added to cart!\nPrice: $${item.price.toFixed(2)}`);
  }
  
  updateCartCount();
}

// ============================================
// CART COUNT UPDATE
// ============================================
function updateCartCount() {
  const countElement = document.getElementById('count');
  if (countElement && typeof getCartCount === 'function') {
    countElement.textContent = getCartCount();
  } else if (countElement) {
    // Fallback: try to get from localStorage
    const cart = JSON.parse(localStorage.getItem('foodiesCart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    countElement.textContent = totalItems;
  }
}

// ============================================
// NOTIFICATIONS
// ============================================
function showNotification(message, type = 'success') {
  // Remove existing notifications
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = `toast-notification toast-${type}`;
  
  const icons = {
    success: 'fa-check-circle',
    warning: 'fa-exclamation-triangle',
    info: 'fa-info-circle',
    error: 'fa-times-circle'
  };
  
  notification.innerHTML = `
    <i class="fa-solid ${icons[type] || 'fa-check-circle'}"></i>
    <span>${message}</span>
  `;
  
  document.body.appendChild(notification);
  
  // Show notification
  setTimeout(() => notification.classList.add('show'), 10);
  
  // Auto-hide after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add notification styles
const style = document.createElement('style');
style.textContent = `
  .toast-notification {
    position: fixed;
    top: 100px;
    right: -350px;
    background: white;
    padding: 16px 24px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 10000;
    transition: right 0.3s ease;
    min-width: 280px;
  }
  
  .toast-notification.show {
    right: 20px;
  }
  
  .toast-notification i {
    font-size: 24px;
  }
  
  .toast-success {
    border-left: 4px solid #27ae60;
  }
  
  .toast-success i {
    color: #27ae60;
  }
  
  .toast-warning {
    border-left: 4px solid #f39c12;
  }
  
  .toast-warning i {
    color: #f39c12;
  }
`;
document.head.appendChild(style);

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const burger = document.getElementById('burgerMenu');
  const navList = document.getElementById('navList');
  
  if (burger && navList) {
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      navList.classList.toggle('active');
      burger.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar') && navList.classList.contains('active')) {
        navList.classList.remove('active');
        burger.classList.remove('active');
      }
    });
  }
}

// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Display products
  displayProducts();
  
  // Update cart count
  updateCartCount();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Modal close button
  const closeBtn = document.querySelector('.close-modal');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeRecipeModal);
  }
  
  // Modal add to cart button
  const modalAddBtn = document.getElementById('modalAddToCart');
  if (modalAddBtn) {
    modalAddBtn.addEventListener('click', addToCartFromModal);
  }
  
  // Close modal when clicking outside
  const modal = document.getElementById('recipeModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeRecipeModal();
      }
    });
  }
  
  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeRecipeModal();
    }
  });
  
  console.log('🏈 Game Day Recipes loaded successfully!');
});

// Export functions for HTML onclick handlers
window.openRecipeModal = openRecipeModal;
window.closeRecipeModal = closeRecipeModal;
window.showTab = showTab;
window.addToCartFromGrid = addToCartFromGrid;
window.addToCartFromModal = addToCartFromModal;