const product = [
  {
    id: 0,
    image: '/images/air1.webp',
    title: 'AIR FRYER CRISPY PANKO SHRIMP',
    price: 4.97,
    prepTime: '10 mins',
    cookTime: '8 mins',
    servings: 4,
    description: 'These crispy air fryer shrimp are coated in a delicious panko breading and cook to perfection in just minutes! A healthier alternative to deep-fried shrimp.',
    ingredients: [
      '1 lb large shrimp, peeled and deveined',
      '1 cup panko breadcrumbs',
      '1/2 cup all-purpose flour',
      '2 large eggs, beaten',
      '1 tsp garlic powder',
      '1 tsp paprika',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      'Cooking spray',
      'Lemon wedges for serving'
    ],
    instructions: [
      'Pat the shrimp dry with paper towels and season with salt and pepper.',
      'Set up three shallow bowls: one with flour, one with beaten eggs, and one with panko breadcrumbs mixed with garlic powder and paprika.',
      'Dredge each shrimp in flour, dip in egg, then coat with panko mixture, pressing to adhere.',
      'Preheat air fryer to 400°F (200°C).',
      'Arrange shrimp in a single layer in the air fryer basket, spray with cooking spray.',
      'Cook for 4 minutes, flip, spray again, and cook for another 4 minutes until golden and crispy.',
      'Serve immediately with lemon wedges and your favorite dipping sauce.'
    ],
    nutrition: {
      calories: 245,
      protein: '28g',
      carbs: '18g',
      fat: '6g'
    }
  },
  {
    id: 1,
    image: '/images/air2.jpeg',
    title: 'AIR FRYER MISO GLAZED SALMON WITH BRUSSELS SPROUTS',
    price: 7,
    prepTime: '15 mins',
    cookTime: '12 mins',
    servings: 2,
    description: 'This elegant yet simple dish features perfectly cooked salmon with a sweet and savory miso glaze, paired with crispy Brussels sprouts.',
    ingredients: [
      '2 salmon fillets (6 oz each)',
      '2 cups Brussels sprouts, halved',
      '3 tbsp white miso paste',
      '2 tbsp maple syrup',
      '1 tbsp rice vinegar',
      '1 tbsp soy sauce',
      '2 tsp sesame oil',
      '2 cloves garlic, minced',
      '1 tsp grated ginger',
      'Sesame seeds for garnish',
      'Green onions, sliced'
    ],
    instructions: [
      'In a small bowl, whisk together miso paste, maple syrup, rice vinegar, soy sauce, and half the sesame oil.',
      'Toss Brussels sprouts with remaining sesame oil, garlic, and ginger.',
      'Preheat air fryer to 400°F (200°C).',
      'Place Brussels sprouts in air fryer basket and cook for 8 minutes, shaking halfway through.',
      'Move sprouts to the sides and place salmon fillets in the center.',
      'Brush salmon generously with miso glaze.',
      'Cook for 6-8 minutes until salmon reaches desired doneness and Brussels sprouts are crispy.',
      'Garnish with sesame seeds and green onions before serving.'
    ],
    nutrition: {
      calories: 425,
      protein: '38g',
      carbs: '28g',
      fat: '18g'
    }
  },
  {
    id: 2,
    image: '/images/air3.jpeg',
    title: 'AIR FRYER BEEF JERKY',
    price: 6.49,
    prepTime: '4 hours (marinating)',
    cookTime: '3 hours',
    servings: 8,
    description: 'Homemade beef jerky made easy in the air fryer! This protein-packed snack is perfect for on-the-go and much healthier than store-bought versions.',
    ingredients: [
      '2 lbs lean beef (flank steak or sirloin)',
      '1/2 cup soy sauce',
      '1/4 cup Worcestershire sauce',
      '2 tbsp brown sugar',
      '2 tsp black pepper',
      '2 tsp garlic powder',
      '1 tsp onion powder',
      '1 tsp smoked paprika',
      '1/2 tsp red pepper flakes',
      '1/4 tsp liquid smoke (optional)'
    ],
    instructions: [
      'Slice beef against the grain into 1/4-inch thick strips. Partially freezing the meat makes slicing easier.',
      'In a large bowl, combine soy sauce, Worcestershire sauce, brown sugar, and all spices.',
      'Add beef strips and toss to coat. Cover and refrigerate for at least 4 hours or overnight.',
      'Remove beef from marinade and pat dry with paper towels.',
      'Preheat air fryer to 160°F (70°C) or lowest setting.',
      'Arrange beef strips in a single layer in the air fryer basket, not touching.',
      'Cook for 2-3 hours, flipping every 30 minutes, until jerky is dried to your preference.',
      'Let cool completely before storing in an airtight container.'
    ],
    nutrition: {
      calories: 180,
      protein: '32g',
      carbs: '4g',
      fat: '4g'
    }
  },
  {
    id: 3,
    image: '/images/air4.webp',
    title: 'AIR FRYER BREAKFAST BAKE',
    price: 9,
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4,
    description: 'A complete breakfast in one pan! This hearty breakfast bake combines eggs, sausage, cheese, and vegetables for the perfect morning meal.',
    ingredients: [
      '6 large eggs',
      '1/4 cup milk',
      '1 cup cooked breakfast sausage, crumbled',
      '1 cup diced bell peppers',
      '1/2 cup diced onion',
      '1 cup shredded cheddar cheese',
      '1 cup frozen hash browns, thawed',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '1/4 tsp garlic powder',
      'Fresh chives for garnish'
    ],
    instructions: [
      'Grease a 7-inch round baking pan that fits in your air fryer.',
      'In a large bowl, whisk together eggs, milk, salt, pepper, and garlic powder.',
      'Layer hash browns on the bottom of the pan.',
      'Top with sausage, bell peppers, and onions.',
      'Pour egg mixture over the top and sprinkle with cheese.',
      'Preheat air fryer to 350°F (175°C).',
      'Place pan in air fryer and cook for 18-20 minutes until eggs are set and top is golden.',
      'Let cool for 5 minutes, garnish with chives, and serve.'
    ],
    nutrition: {
      calories: 385,
      protein: '24g',
      carbs: '16g',
      fat: '25g'
    }
  },
  {
    id: 4,
    image: '/images/air4.jpeg',
    title: 'BBQ CHICKEN FLATBREADS',
    price: 6.99,
    prepTime: '10 mins',
    cookTime: '8 mins',
    servings: 4,
    description: 'These quick and easy BBQ chicken flatbreads are perfect for lunch or dinner. Crispy, cheesy, and loaded with flavor!',
    ingredients: [
      '4 small flatbreads or naan',
      '2 cups cooked chicken, shredded',
      '1/2 cup BBQ sauce',
      '1 1/2 cups mozzarella cheese, shredded',
      '1/2 red onion, thinly sliced',
      '1/4 cup fresh cilantro, chopped',
      '1/4 cup ranch dressing',
      'Olive oil spray'
    ],
    instructions: [
      'In a bowl, toss shredded chicken with BBQ sauce until well coated.',
      'Brush flatbreads lightly with olive oil.',
      'Spread BBQ chicken evenly over each flatbread.',
      'Top with mozzarella cheese and red onion slices.',
      'Preheat air fryer to 375°F (190°C).',
      'Place flatbreads in air fryer basket (work in batches if needed).',
      'Cook for 6-8 minutes until cheese is melted and edges are crispy.',
      'Drizzle with ranch dressing and garnish with fresh cilantro before serving.'
    ],
    nutrition: {
      calories: 425,
      protein: '32g',
      carbs: '38g',
      fat: '16g'
    }
  },
  {
    id: 5,
    image: '/images/air5.webp',
    title: 'SHRIMP SCAMPI',
    price: 11.99,
    prepTime: '10 mins',
    cookTime: '10 mins',
    servings: 4,
    description: 'Classic shrimp scampi made healthier in the air fryer! Juicy shrimp in a garlicky lemon butter sauce that\'s ready in minutes.',
    ingredients: [
      '1 lb large shrimp, peeled and deveined',
      '4 tbsp butter, melted',
      '4 cloves garlic, minced',
      '1/4 cup white wine or chicken broth',
      '2 tbsp lemon juice',
      '1 tsp lemon zest',
      '1/4 tsp red pepper flakes',
      '1/4 cup fresh parsley, chopped',
      'Salt and pepper to taste',
      'Crusty bread for serving'
    ],
    instructions: [
      'In a bowl, combine melted butter, garlic, white wine, lemon juice, lemon zest, and red pepper flakes.',
      'Add shrimp and toss to coat. Season with salt and pepper.',
      'Preheat air fryer to 400°F (200°C).',
      'Transfer shrimp and sauce to an air fryer-safe baking dish.',
      'Cook for 8-10 minutes, stirring halfway through, until shrimp are pink and cooked through.',
      'Garnish with fresh parsley.',
      'Serve immediately with crusty bread to soak up the delicious sauce.'
    ],
    nutrition: {
      calories: 245,
      protein: '24g',
      carbs: '4g',
      fat: '14g'
    }
  },
  {
    id: 6,
    image: '/images/air6.jpg',
    title: '5-INGREDIENT BROWNIES',
    price: 4.79,
    prepTime: '5 mins',
    cookTime: '15 mins',
    servings: 6,
    description: 'Incredibly easy and fudgy brownies with just 5 ingredients! Perfect for satisfying your chocolate cravings quickly.',
    ingredients: [
      '1 cup chocolate chips',
      '1/2 cup butter',
      '2 large eggs',
      '1/2 cup sugar',
      '1/3 cup all-purpose flour',
      'Optional: vanilla extract, chocolate chips for topping'
    ],
    instructions: [
      'Melt chocolate chips and butter together in the microwave, stirring every 30 seconds until smooth.',
      'Let cool slightly, then whisk in eggs and sugar until well combined.',
      'Fold in flour until just incorporated.',
      'Pour batter into a greased 7-inch round pan that fits your air fryer.',
      'Preheat air fryer to 320°F (160°C).',
      'Place pan in air fryer and cook for 12-15 minutes until edges are set but center is still slightly gooey.',
      'Let cool for 10 minutes before cutting into squares.',
      'Serve warm with ice cream or enjoy at room temperature.'
    ],
    nutrition: {
      calories: 285,
      protein: '4g',
      carbs: '32g',
      fat: '16g'
    }
  },
  {
    id: 7,
    image: '/images/air7.webp',
    title: 'AIR FRIED PEPPERONI WRAPS',
    price: 6.87,
    prepTime: '10 mins',
    cookTime: '8 mins',
    servings: 4,
    description: 'Crispy, cheesy pepperoni wraps that are perfect as a snack, appetizer, or quick meal. Kids and adults love these!',
    ingredients: [
      '4 large flour tortillas',
      '1 cup mozzarella cheese, shredded',
      '1/2 cup pepperoni slices',
      '1/2 cup pizza sauce',
      '1/4 cup Parmesan cheese, grated',
      '1 tsp Italian seasoning',
      '1/2 tsp garlic powder',
      'Olive oil spray',
      'Marinara sauce for dipping'
    ],
    instructions: [
      'Lay tortillas flat and spread 2 tablespoons of pizza sauce on each.',
      'Sprinkle mozzarella cheese over the sauce.',
      'Layer pepperoni slices on one half of each tortilla.',
      'Fold tortillas in half and press edges to seal.',
      'Brush tops with olive oil and sprinkle with Parmesan and Italian seasoning.',
      'Preheat air fryer to 380°F (193°C).',
      'Place wraps in air fryer basket (work in batches if needed).',
      'Cook for 6-8 minutes, flipping halfway, until golden and crispy.',
      'Cut into wedges and serve with marinara sauce for dipping.'
    ],
    nutrition: {
      calories: 325,
      protein: '16g',
      carbs: '28g',
      fat: '16g'
    }
  }
];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
  initMobileMenu();
  updateCartCount();
});

// Render products
function renderProducts() {
  const root = document.querySelector("#root");
  
  root.innerHTML = product.map((item, i) => {
    const { image, title, price } = item;
    return `
      <div class='box'>
        <div class='img-box'>
          <img class='images' src='${image}' alt='${title}'>
          <div class='recipe-badge'>
            <i class='fa-solid fa-utensils'></i> Recipe
          </div>
        </div>
        <div class='bottom'>
          <p>${title}</p>
          <div class='price-row'>
            <h2>$${price.toFixed(2)}</h2>
          </div>
          <div class='button-group'>
            <button class='add-to-cart-btn' onClick='addtocart(${i})'>
              <i class='fa-solid fa-cart-plus'></i> Add to Cart
            </button>
            <button class='view-recipe-btn' onClick='viewRecipe(${i})'>
              <i class='fa-solid fa-book-open'></i> Recipe
            </button>
          </div>
        </div>
      </div>`;
  }).join('');
}

// Add to cart function
function addtocart(i) {
  const p = product[i];

  // Call the global addToCart function from cart.js
  if (typeof addToCart === 'function') {
    addToCart({
      id: "air-" + p.id,
      title: p.title,
      price: p.price,
      image: p.image
    });
    updateCartCount();
  } else {
    console.error('addToCart function not found');
  }
}

// Update cart count
function updateCartCount() {
  const cartCount = document.getElementById('count');
  if (cartCount && typeof getCartItemCount === 'function') {
    cartCount.textContent = getCartItemCount();
  }
}

// View recipe modal
function viewRecipe(i) {
  const recipe = product[i];
  const modal = document.getElementById('recipeModal');
  const modalBody = document.getElementById('modalBody');
  
  modalBody.innerHTML = `
    <div class='recipe-header'>
      <img src='${recipe.image}' alt='${recipe.title}'>
      <div class='recipe-header-overlay'>
        <h2>${recipe.title}</h2>
        <div class='recipe-meta'>
          <div class='meta-item'>
            <i class='fa-solid fa-clock'></i>
            <span>Prep: ${recipe.prepTime}</span>
          </div>
          <div class='meta-item'>
            <i class='fa-solid fa-fire'></i>
            <span>Cook: ${recipe.cookTime}</span>
          </div>
          <div class='meta-item'>
            <i class='fa-solid fa-utensils'></i>
            <span>Serves: ${recipe.servings}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class='recipe-content'>
      <div class='recipe-section'>
        <p class='recipe-description'>${recipe.description}</p>
      </div>
      
      <div class='recipe-section'>
        <h3><i class='fa-solid fa-list'></i> Ingredients</h3>
        <ul class='ingredients-list'>
          ${recipe.ingredients.map(ingredient => `
            <li><i class='fa-solid fa-check'></i> ${ingredient}</li>
          `).join('')}
        </ul>
      </div>
      
      <div class='recipe-section'>
        <h3><i class='fa-solid fa-book-open'></i> Instructions</h3>
        <ol class='instructions-list'>
          ${recipe.instructions.map(instruction => `
            <li>${instruction}</li>
          `).join('')}
        </ol>
      </div>
      
      <div class='recipe-section'>
        <h3><i class='fa-solid fa-chart-pie'></i> Nutrition Information (per serving)</h3>
        <div class='nutrition-grid'>
          <div class='nutrition-item'>
            <div class='value'>${recipe.nutrition.calories}</div>
            <div class='label'>Calories</div>
          </div>
          <div class='nutrition-item'>
            <div class='value'>${recipe.nutrition.protein}</div>
            <div class='label'>Protein</div>
          </div>
          <div class='nutrition-item'>
            <div class='value'>${recipe.nutrition.carbs}</div>
            <div class='label'>Carbs</div>
          </div>
          <div class='nutrition-item'>
            <div class='value'>${recipe.nutrition.fat}</div>
            <div class='label'>Fat</div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close recipe modal
function closeRecipeModal() {
  const modal = document.getElementById('recipeModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Mobile menu toggle
function initMobileMenu() {
  const burger = document.getElementById('burger');
  const navList = document.getElementById('navList');
  const dropdowns = document.querySelectorAll('.dropdown');

  if (burger) {
    burger.addEventListener('click', () => {
      navList.classList.toggle('active');
      burger.classList.toggle('active');
    });
  }

  // Mobile dropdown toggle
  if (window.innerWidth <= 768) {
    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('a');
      link.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
      });
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navList && navList.classList.contains('active')) {
      navList.classList.remove('active');
      if (burger) burger.classList.remove('active');
    }
  });
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  const modal = document.getElementById('recipeModal');
  if (e.target.classList.contains('modal-overlay')) {
    closeRecipeModal();
  }
});

// Keyboard support for modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeRecipeModal();
  }
});