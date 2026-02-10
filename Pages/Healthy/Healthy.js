// ============================================
// HEALTHY RECIPES DATA
// ============================================
const product = [
  {
    id: 0,
    image: '/images/h1.jpg',
    title: 'TILAPIA AL AJILLO (GARLIC TILAPIA)',
    price: 13.00,
    time: '20 minutes',
    servings: '4 servings',
    calories: '185 cal',
    ingredients: [
      '4 tilapia fillets (6 oz each)',
      '6 cloves garlic, minced',
      '1/4 cup olive oil',
      '1/4 cup white wine',
      '2 tablespoons fresh lemon juice',
      '1 teaspoon red pepper flakes',
      '1/4 cup fresh parsley, chopped',
      'Salt and black pepper to taste',
      'Lemon wedges for serving'
    ],
    instructions: [
      'Pat tilapia fillets dry and season both sides with salt and pepper.',
      'Heat olive oil in large skillet over medium-high heat.',
      'Add minced garlic and red pepper flakes, sauté for 30 seconds until fragrant.',
      'Add tilapia fillets and cook 3-4 minutes per side until golden and cooked through.',
      'Remove fish to a plate and keep warm.',
      'Add white wine and lemon juice to pan, simmer for 2 minutes.',
      'Pour sauce over fish and garnish with fresh parsley.',
      'Serve immediately with lemon wedges and steamed vegetables.'
    ],
    nutrition: {
      calories: 185,
      protein: '28g',
      carbs: '2g',
      fat: '7g',
      fiber: '0g',
      sodium: '95mg'
    }
  },
  {
    id: 1,
    image: '/images/h2.webp',
    title: 'HONEY GINGER GRILLED SALMON',
    price: 18.99,
    time: '25 minutes',
    servings: '4 servings',
    calories: '295 cal',
    ingredients: [
      '4 salmon fillets (6 oz each)',
      '3 tablespoons honey',
      '2 tablespoons soy sauce (low sodium)',
      '2 tablespoons fresh ginger, grated',
      '2 cloves garlic, minced',
      '1 tablespoon sesame oil',
      '1 tablespoon rice vinegar',
      '1 teaspoon sesame seeds',
      'Green onions for garnish',
      'Lime wedges for serving'
    ],
    instructions: [
      'Preheat grill to medium-high heat (about 400°F).',
      'In a bowl, whisk together honey, soy sauce, grated ginger, garlic, sesame oil, and rice vinegar.',
      'Reserve 2 tablespoons of marinade for serving.',
      'Brush salmon fillets generously with remaining marinade.',
      'Lightly oil the grill grates to prevent sticking.',
      'Place salmon skin-side down on grill. Cook 4-5 minutes.',
      'Carefully flip and cook another 4-5 minutes until salmon flakes easily.',
      'Sprinkle with sesame seeds and green onions. Serve with reserved sauce and lime wedges.'
    ],
    nutrition: {
      calories: 295,
      protein: '34g',
      carbs: '14g',
      fat: '12g',
      fiber: '0g',
      sodium: '320mg'
    }
  },
  {
    id: 2,
    image: '/images/h3.webp',
    title: 'VEGGIE PACKED CHEESY CHICKEN SALAD (REDUCED FAT)',
    price: 15.49,
    time: '15 minutes',
    servings: '6 servings',
    calories: '220 cal',
    ingredients: [
      '3 cups cooked chicken breast, diced',
      '1/2 cup reduced-fat Greek yogurt',
      '2 tablespoons light mayonnaise',
      '1 cup celery, finely diced',
      '1/2 cup red bell pepper, diced',
      '1/2 cup carrots, shredded',
      '1/4 cup red onion, minced',
      '1/2 cup reduced-fat cheddar cheese, shredded',
      '1 tablespoon Dijon mustard',
      '1 teaspoon garlic powder',
      'Salt and pepper to taste',
      'Fresh dill for garnish'
    ],
    instructions: [
      'In a large bowl, combine Greek yogurt, mayonnaise, and Dijon mustard.',
      'Add garlic powder, salt, and pepper. Mix well.',
      'Fold in diced chicken breast until evenly coated.',
      'Add celery, bell pepper, carrots, and red onion. Mix thoroughly.',
      'Gently fold in shredded cheese.',
      'Taste and adjust seasoning as needed.',
      'Refrigerate for at least 30 minutes to allow flavors to meld.',
      'Garnish with fresh dill. Serve on whole grain bread, lettuce wraps, or crackers.'
    ],
    nutrition: {
      calories: 220,
      protein: '28g',
      carbs: '8g',
      fat: '8g',
      fiber: '2g',
      sodium: '280mg'
    }
  },
  {
    id: 3,
    image: '/images/h4.webp',
    title: 'CITRUSY KALE SALAD W/ BLUEBERRIES AND PEPITAS',
    price: 14.00,
    time: '15 minutes',
    servings: '4 servings',
    calories: '165 cal',
    ingredients: [
      '6 cups fresh kale, stems removed and chopped',
      '1 cup fresh blueberries',
      '1/2 cup pepitas (pumpkin seeds), toasted',
      '1/4 cup red onion, thinly sliced',
      '1/4 cup feta cheese, crumbled',
      '3 tablespoons extra virgin olive oil',
      '2 tablespoons fresh orange juice',
      '1 tablespoon fresh lemon juice',
      '1 teaspoon honey',
      '1 teaspoon Dijon mustard',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Massage kale with a pinch of salt for 2-3 minutes until softened.',
      'In a small bowl, whisk together olive oil, orange juice, lemon juice, honey, and Dijon mustard.',
      'Season dressing with salt and pepper.',
      'In a large bowl, combine massaged kale with blueberries and red onion.',
      'Drizzle dressing over salad and toss well to coat.',
      'Top with toasted pepitas and crumbled feta cheese.',
      'Let sit for 5 minutes before serving to allow flavors to develop.',
      'Serve immediately or refrigerate for up to 2 hours.'
    ],
    nutrition: {
      calories: 165,
      protein: '6g',
      carbs: '15g',
      fat: '11g',
      fiber: '3g',
      sodium: '125mg'
    }
  },
  {
    id: 4,
    image: '/images/h5.webp',
    title: 'TOMATO AND BARLEY SOUP',
    price: 12.34,
    time: '45 minutes',
    servings: '6 servings',
    calories: '158 cal',
    ingredients: [
      '1 cup pearl barley',
      '1 can (28 oz) crushed tomatoes',
      '4 cups low-sodium vegetable broth',
      '2 cups water',
      '1 large onion, diced',
      '3 cloves garlic, minced',
      '2 carrots, diced',
      '2 celery stalks, diced',
      '2 tablespoons olive oil',
      '1 teaspoon dried basil',
      '1 teaspoon dried oregano',
      '1 bay leaf',
      'Salt and pepper to taste',
      'Fresh basil for garnish'
    ],
    instructions: [
      'Heat olive oil in large pot over medium heat.',
      'Sauté onion, carrots, and celery for 5-7 minutes until softened.',
      'Add garlic and cook for 1 minute until fragrant.',
      'Stir in crushed tomatoes, vegetable broth, and water.',
      'Add pearl barley, basil, oregano, and bay leaf.',
      'Bring to a boil, then reduce heat and simmer for 30-35 minutes until barley is tender.',
      'Remove bay leaf. Season with salt and pepper to taste.',
      'Garnish with fresh basil. Serve hot with whole grain bread.'
    ],
    nutrition: {
      calories: 158,
      protein: '5g',
      carbs: '30g',
      fat: '3g',
      fiber: '7g',
      sodium: '195mg'
    }
  },
  {
    id: 5,
    image: '/images/h6.webp',
    title: 'WW 0 POINT WEIGHT WATCHERS CABBAGE SOUP',
    price: 12.00,
    time: '35 minutes',
    servings: '8 servings',
    calories: '45 cal',
    ingredients: [
      '1 small head green cabbage, chopped',
      '2 large carrots, diced',
      '2 celery stalks, diced',
      '1 large onion, diced',
      '1 green bell pepper, diced',
      '4 cloves garlic, minced',
      '1 can (28 oz) diced tomatoes',
      '6 cups low-sodium vegetable broth',
      '1 teaspoon dried thyme',
      '1 teaspoon dried oregano',
      '1 bay leaf',
      'Salt and pepper to taste',
      'Fresh parsley for garnish'
    ],
    instructions: [
      'Spray large pot with cooking spray and heat over medium heat.',
      'Add onion, carrots, celery, and bell pepper. Sauté for 5 minutes.',
      'Add garlic and cook for 1 minute until aromatic.',
      'Stir in chopped cabbage and cook for 3-4 minutes until slightly wilted.',
      'Add diced tomatoes, vegetable broth, thyme, oregano, and bay leaf.',
      'Bring to a boil, then reduce heat and simmer for 20-25 minutes.',
      'Remove bay leaf. Season with salt and pepper.',
      'Garnish with fresh parsley. This soup can be eaten unlimited on Weight Watchers!'
    ],
    nutrition: {
      calories: 45,
      protein: '2g',
      carbs: '10g',
      fat: '0g',
      fiber: '3g',
      sodium: '145mg'
    }
  },
  {
    id: 6,
    image: '/images/h7.webp',
    title: 'COUSCOUS-CHICKPEA SALAD',
    price: 10.00,
    time: '20 minutes',
    servings: '6 servings',
    calories: '210 cal',
    ingredients: [
      '1 1/2 cups whole wheat couscous',
      '1 can (15 oz) chickpeas, drained and rinsed',
      '1 cup cherry tomatoes, halved',
      '1 cucumber, diced',
      '1/2 red onion, finely diced',
      '1/2 cup fresh parsley, chopped',
      '1/4 cup fresh mint, chopped',
      '1/4 cup extra virgin olive oil',
      '3 tablespoons lemon juice',
      '2 cloves garlic, minced',
      '1/2 teaspoon cumin',
      'Salt and pepper to taste',
      '1/4 cup feta cheese (optional)'
    ],
    instructions: [
      'Prepare couscous according to package directions. Fluff with fork and let cool.',
      'In a small bowl, whisk together olive oil, lemon juice, garlic, and cumin.',
      'Season dressing with salt and pepper.',
      'In a large bowl, combine cooled couscous, chickpeas, tomatoes, cucumber, and red onion.',
      'Add fresh parsley and mint.',
      'Pour dressing over salad and toss well to combine.',
      'Top with crumbled feta if desired.',
      'Serve immediately or refrigerate for up to 3 days. Great for meal prep!'
    ],
    nutrition: {
      calories: 210,
      protein: '7g',
      carbs: '32g',
      fat: '7g',
      fiber: '6g',
      sodium: '155mg'
    }
  },
  {
    id: 7,
    image: '/images/h8.webp',
    title: 'GRILLED ORANGE CHICKEN BREASTS',
    price: 13.99,
    time: '30 minutes',
    servings: '4 servings',
    calories: '245 cal',
    ingredients: [
      '4 boneless, skinless chicken breasts (6 oz each)',
      '1/2 cup fresh orange juice',
      'Zest of 1 orange',
      '2 tablespoons olive oil',
      '2 tablespoons honey',
      '2 cloves garlic, minced',
      '1 teaspoon fresh thyme',
      '1/2 teaspoon paprika',
      'Salt and pepper to taste',
      'Orange slices for garnish',
      'Fresh thyme for garnish'
    ],
    instructions: [
      'In a bowl, combine orange juice, orange zest, olive oil, honey, garlic, thyme, and paprika.',
      'Season chicken breasts with salt and pepper.',
      'Reserve 1/4 cup marinade for basting. Pour rest over chicken.',
      'Marinate in refrigerator for at least 30 minutes (or up to 4 hours).',
      'Preheat grill to medium-high heat (about 400°F).',
      'Remove chicken from marinade and place on grill.',
      'Grill 6-7 minutes per side, basting with reserved marinade.',
      'Cook until internal temperature reaches 165°F. Let rest 5 minutes before serving.',
      'Garnish with orange slices and fresh thyme.'
    ],
    nutrition: {
      calories: 245,
      protein: '38g',
      carbs: '12g',
      fat: '6g',
      fiber: '0g',
      sodium: '125mg'
    }
  }
];

// ============================================
// DISPLAY PRODUCTS
// ============================================
function displayProducts() {
  const root = document.querySelector("#root");
  if (!root) return;

  root.innerHTML = product.map((item, i) => {
    const { image, title, price, time, servings, calories } = item;
    return `
      <div class='box' data-index="${i}">
        <div class='img-box'>
          <img class='images' src='${image}' alt='${title}' loading="lazy">
          <span class="recipe-badge">${calories}</span>
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
  document.getElementById('modalCalories').textContent = item.calories;
  document.getElementById('modalPrice').textContent = `$ ${item.price.toFixed(2)}`;
  
  // Populate ingredients
  const ingredientsList = document.getElementById('ingredientsList');
  ingredientsList.innerHTML = item.ingredients.map(ing => `<li>${ing}</li>`).join('');
  
  // Populate instructions
  const instructionsList = document.getElementById('instructionsList');
  instructionsList.innerHTML = item.instructions.map(inst => `<li>${inst}</li>`).join('');
  
  // Populate nutrition
  const nutritionInfo = document.getElementById('nutritionInfo');
  nutritionInfo.innerHTML = `
    <div class="nutrition-item">
      <strong>${item.nutrition.calories}</strong>
      <span>Calories</span>
    </div>
    <div class="nutrition-item">
      <strong>${item.nutrition.protein}</strong>
      <span>Protein</span>
    </div>
    <div class="nutrition-item">
      <strong>${item.nutrition.carbs}</strong>
      <span>Carbs</span>
    </div>
    <div class="nutrition-item">
      <strong>${item.nutrition.fat}</strong>
      <span>Fat</span>
    </div>
    <div class="nutrition-item">
      <strong>${item.nutrition.fiber}</strong>
      <span>Fiber</span>
    </div>
    <div class="nutrition-item">
      <strong>${item.nutrition.sodium}</strong>
      <span>Sodium</span>
    </div>
  `;
  
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
      id: "healthy-" + item.id,
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
  
  setTimeout(() => notification.classList.add('show'), 10);
  
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
  displayProducts();
  updateCartCount();
  initMobileMenu();
  
  const closeBtn = document.querySelector('.close-modal');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeRecipeModal);
  }
  
  const modalAddBtn = document.getElementById('modalAddToCart');
  if (modalAddBtn) {
    modalAddBtn.addEventListener('click', addToCartFromModal);
  }
  
  const modal = document.getElementById('recipeModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeRecipeModal();
      }
    });
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeRecipeModal();
    }
  });
  
  console.log('🥗 Healthy Recipes loaded successfully!');
});

// Export functions
window.openRecipeModal = openRecipeModal;
window.closeRecipeModal = closeRecipeModal;
window.showTab = showTab;
window.addToCartFromGrid = addToCartFromGrid;
window.addToCartFromModal = addToCartFromModal;