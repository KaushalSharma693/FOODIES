const product = [
  {
    id: 0,
    image: '/images/A1.jpeg',
    title: 'MOZZARELLA STICKS',
    price: 2.4,
    prepTime: '15 mins',
    cookTime: '10 mins',
    servings: 6,
    description: 'Crispy, golden mozzarella sticks with a gooey, melted cheese center. Perfect for parties or game day! These homemade sticks are better than any restaurant version.',
    ingredients: [
      '12 mozzarella string cheese sticks',
      '1/2 cup all-purpose flour',
      '2 large eggs, beaten',
      '1 1/2 cups Italian breadcrumbs',
      '1/2 cup panko breadcrumbs',
      '1/2 tsp garlic powder',
      '1/2 tsp Italian seasoning',
      '1/4 tsp salt',
      'Vegetable oil for frying',
      'Marinara sauce for serving'
    ],
    instructions: [
      'Cut mozzarella sticks in half and place on a baking sheet. Freeze for at least 1 hour.',
      'Set up three shallow bowls: one with flour, one with beaten eggs, and one with combined breadcrumbs, garlic powder, Italian seasoning, and salt.',
      'Working quickly, coat each frozen cheese stick in flour, then egg, then breadcrumb mixture.',
      'Repeat the egg and breadcrumb coating for a double layer.',
      'Place coated sticks back in freezer for 30 minutes.',
      'Heat oil in a deep pan to 365°F (185°C).',
      'Fry mozzarella sticks in batches for 1-2 minutes until golden brown.',
      'Drain on paper towels and serve immediately with warm marinara sauce.'
    ],
    nutrition: {
      calories: 245,
      protein: '14g',
      carbs: '22g',
      fat: '12g'
    },
    tips: [
      'Keep the cheese sticks frozen until right before frying to prevent the cheese from leaking out',
      'Don\'t overcrowd the pan - fry in small batches for best results',
      'Serve immediately for the best gooey texture'
    ]
  },
  {
    id: 1,
    image: '/images/A2.jpeg',
    title: 'CHEESY SHELL TACO BITES',
    price: 6,
    prepTime: '20 mins',
    cookTime: '12 mins',
    servings: 24,
    description: 'Mini taco shells filled with seasoned beef, cheese, and your favorite toppings. These bite-sized appetizers are always a crowd favorite!',
    ingredients: [
      '24 mini taco shells',
      '1 lb ground beef',
      '1 packet taco seasoning',
      '1/4 cup water',
      '2 cups shredded Mexican cheese blend',
      '1 cup sour cream',
      '1 cup diced tomatoes',
      '1/2 cup diced onions',
      '1/2 cup sliced black olives',
      'Shredded lettuce',
      'Fresh cilantro for garnish',
      'Salsa for serving'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Arrange mini taco shells on a baking sheet.',
      'Cook ground beef in a large skillet over medium-high heat until browned.',
      'Drain excess fat and add taco seasoning and water. Simmer for 5 minutes.',
      'Fill each taco shell with seasoned beef.',
      'Top each with a generous amount of shredded cheese.',
      'Bake for 8-10 minutes until cheese is melted and shells are crispy.',
      'Remove from oven and let cool for 2 minutes.',
      'Top with sour cream, tomatoes, onions, olives, and lettuce.',
      'Garnish with fresh cilantro and serve with salsa.'
    ],
    nutrition: {
      calories: 125,
      protein: '8g',
      carbs: '9g',
      fat: '7g'
    },
    tips: [
      'Prepare the taco shells on a muffin tin to help them hold their shape',
      'Set up a topping bar so guests can customize their own bites',
      'Ground turkey or chicken works great as a lighter alternative'
    ]
  },
  {
    id: 2,
    image: '/images/A3.jpeg',
    title: 'CARAMELIZED ONION-CRANBERRY CREAM CHEESE BITES',
    price: 5.49,
    prepTime: '30 mins',
    cookTime: '15 mins',
    servings: 20,
    description: 'Elegant appetizer featuring sweet caramelized onions, tart cranberries, and creamy cheese on crispy phyllo cups. Perfect for holiday gatherings!',
    ingredients: [
      '20 mini phyllo cups',
      '8 oz cream cheese, softened',
      '2 large onions, thinly sliced',
      '1/2 cup dried cranberries',
      '2 tbsp butter',
      '2 tbsp brown sugar',
      '1 tbsp balsamic vinegar',
      '1/4 cup crumbled goat cheese',
      'Fresh thyme leaves',
      'Salt and pepper to taste',
      'Honey for drizzling'
    ],
    instructions: [
      'Melt butter in a large skillet over medium heat. Add sliced onions.',
      'Cook onions for 20-25 minutes, stirring occasionally, until caramelized and golden.',
      'Add brown sugar, balsamic vinegar, and cranberries. Cook for 5 more minutes.',
      'Season with salt and pepper. Let cool slightly.',
      'Mix cream cheese with goat cheese until smooth.',
      'Preheat oven to 350°F (175°C).',
      'Fill each phyllo cup with a spoonful of cream cheese mixture.',
      'Top with caramelized onion-cranberry mixture.',
      'Bake for 8-10 minutes until phyllo is crispy.',
      'Garnish with fresh thyme and a drizzle of honey before serving.'
    ],
    nutrition: {
      calories: 95,
      protein: '3g',
      carbs: '11g',
      fat: '5g'
    },
    tips: [
      'Caramelize the onions low and slow for the best flavor',
      'These can be assembled up to 2 hours ahead and baked just before serving',
      'Try adding chopped walnuts for extra crunch'
    ]
  },
  {
    id: 3,
    image: '/images/A4.jpeg',
    title: 'EASY APRICOT BITES',
    price: 15,
    prepTime: '15 mins',
    cookTime: '18 mins',
    servings: 16,
    description: 'Sweet and savory bites featuring bacon-wrapped apricots with a cream cheese filling. These elegant appetizers are surprisingly simple to make!',
    ingredients: [
      '16 dried apricots',
      '4 oz cream cheese, softened',
      '2 tbsp honey',
      '1/4 cup chopped pecans',
      '8 slices bacon, cut in half',
      '2 tbsp brown sugar',
      'Fresh rosemary for garnish',
      'Toothpicks'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C). Line a baking sheet with parchment paper.',
      'In a small bowl, mix cream cheese, honey, and chopped pecans.',
      'Make a small slit in each apricot and fill with about 1 teaspoon of cream cheese mixture.',
      'Wrap each stuffed apricot with half a slice of bacon and secure with a toothpick.',
      'Place on prepared baking sheet and sprinkle with brown sugar.',
      'Bake for 15-18 minutes until bacon is crispy.',
      'Let cool for 5 minutes before serving.',
      'Garnish with fresh rosemary sprigs.'
    ],
    nutrition: {
      calories: 115,
      protein: '4g',
      carbs: '9g',
      fat: '7g'
    },
    tips: [
      'Soak toothpicks in water for 30 minutes before using to prevent burning',
      'For extra sweetness, brush with maple syrup during the last 5 minutes of baking',
      'These can be prepped the night before and refrigerated until ready to bake'
    ]
  },
  {
    id: 4,
    image: '/images/A5.jpeg',
    title: 'SAUSAGE BALLS',
    price: 15,
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 36,
    description: 'Classic party appetizer made with sausage, cheese, and biscuit mix. These savory bites are always the first to disappear at any gathering!',
    ingredients: [
      '1 lb breakfast sausage',
      '3 cups shredded sharp cheddar cheese',
      '2 cups biscuit baking mix',
      '1/4 cup milk',
      '1/2 tsp garlic powder',
      '1/2 tsp onion powder',
      '1/4 tsp cayenne pepper (optional)',
      '2 tbsp chopped fresh parsley',
      'Ranch or honey mustard for dipping'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C). Line a baking sheet with parchment paper.',
      'In a large bowl, combine uncooked sausage, shredded cheese, and biscuit mix.',
      'Add milk, garlic powder, onion powder, and cayenne pepper. Mix until well combined.',
      'Roll mixture into 1-inch balls and place on prepared baking sheet.',
      'Bake for 18-20 minutes until golden brown and cooked through.',
      'Let cool for 5 minutes.',
      'Sprinkle with fresh parsley.',
      'Serve warm with ranch dressing or honey mustard for dipping.'
    ],
    nutrition: {
      calories: 85,
      protein: '5g',
      carbs: '5g',
      fat: '5g'
    },
    tips: [
      'Use a cookie scoop for uniform-sized balls',
      'These freeze beautifully - make a double batch and freeze half for later',
      'Try using different cheese varieties like pepper jack for a spicy kick'
    ]
  },
  {
    id: 5,
    image: '/images/A6.jpeg',
    title: 'CHEESY ARTICHOKE CHICKEN BALLS',
    price: 3.29,
    prepTime: '20 mins',
    cookTime: '18 mins',
    servings: 24,
    description: 'Flavorful chicken meatballs with artichokes and cheese. A healthier appetizer option that doesn\'t compromise on taste!',
    ingredients: [
      '1 lb ground chicken',
      '1 cup canned artichoke hearts, chopped',
      '1 cup shredded mozzarella cheese',
      '1/2 cup panko breadcrumbs',
      '1/4 cup grated Parmesan cheese',
      '2 cloves garlic, minced',
      '1 large egg',
      '1 tsp Italian seasoning',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      'Marinara or alfredo sauce for dipping'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C). Line a baking sheet with parchment paper.',
      'Drain and chop artichoke hearts, squeezing out excess moisture.',
      'In a large bowl, combine ground chicken, chopped artichokes, mozzarella, breadcrumbs, Parmesan, garlic, egg, and seasonings.',
      'Mix until well combined but don\'t overmix.',
      'Roll mixture into 1.5-inch balls and place on prepared baking sheet.',
      'Bake for 16-18 minutes until golden and cooked through (internal temp 165°F).',
      'Let rest for 5 minutes.',
      'Serve warm with marinara or alfredo sauce for dipping.'
    ],
    nutrition: {
      calories: 65,
      protein: '7g',
      carbs: '3g',
      fat: '3g'
    },
    tips: [
      'Pat the artichokes very dry to prevent the mixture from being too wet',
      'These can be made ahead and reheated in a 350°F oven for 10 minutes',
      'Add a pinch of red pepper flakes for a subtle heat'
    ]
  },
  {
    id: 6,
    image: '/images/A7.jpg',
    title: 'EASY BACON-WRAPPED DATES',
    price: 7.79,
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 20,
    description: 'Sweet dates stuffed with creamy goat cheese and wrapped in crispy bacon. The perfect combination of sweet, salty, and savory!',
    ingredients: [
      '20 Medjool dates, pitted',
      '4 oz goat cheese, softened',
      '10 slices bacon, cut in half',
      '2 tbsp honey',
      '1 tbsp balsamic glaze',
      '1/4 cup chopped almonds',
      'Fresh thyme for garnish',
      'Toothpicks'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C). Line a baking sheet with foil and place a wire rack on top.',
      'Make a slit in each date and remove the pit if not already pitted.',
      'Mix goat cheese with chopped almonds.',
      'Stuff each date with about 1 teaspoon of the goat cheese mixture.',
      'Wrap each stuffed date with half a slice of bacon and secure with a toothpick.',
      'Place on wire rack and brush with honey.',
      'Bake for 18-20 minutes until bacon is crispy, flipping halfway through.',
      'Drizzle with balsamic glaze and garnish with fresh thyme.',
      'Serve warm.'
    ],
    nutrition: {
      calories: 95,
      protein: '3g',
      carbs: '12g',
      fat: '4g'
    },
    tips: [
      'Use a wire rack to allow bacon to crisp evenly on all sides',
      'Try blue cheese instead of goat cheese for a stronger flavor',
      'These are best served warm but can be made 2 hours ahead and reheated'
    ]
  },
  {
    id: 7,
    image: '/images/A8.jpeg',
    title: 'STUFFED MUSHROOMS WITH ROASTED RED PEPPERS AND MANCHEGO CHEESE',
    price: 6.87,
    prepTime: '20 mins',
    cookTime: '22 mins',
    servings: 18,
    description: 'Elegant stuffed mushrooms filled with roasted red peppers, Manchego cheese, and herbs. A sophisticated appetizer perfect for entertaining!',
    ingredients: [
      '18 large button mushrooms',
      '1/2 cup roasted red peppers, chopped',
      '1 cup shredded Manchego cheese',
      '4 oz cream cheese, softened',
      '1/2 cup panko breadcrumbs',
      '3 cloves garlic, minced',
      '2 tbsp fresh parsley, chopped',
      '1 tbsp fresh basil, chopped',
      '3 tbsp olive oil',
      'Salt and pepper to taste',
      'Balsamic reduction for drizzling'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C). Grease a baking dish.',
      'Clean mushrooms and remove stems. Chop stems finely.',
      'In a skillet, heat 2 tablespoons olive oil over medium heat. Sauté chopped mushroom stems and garlic for 3-4 minutes.',
      'In a bowl, combine sautéed stems, roasted red peppers, Manchego cheese, cream cheese, half the breadcrumbs, parsley, and basil. Season with salt and pepper.',
      'Brush mushroom caps with remaining olive oil and place in baking dish.',
      'Fill each mushroom cap with the cheese mixture.',
      'Top with remaining breadcrumbs.',
      'Bake for 18-20 minutes until mushrooms are tender and tops are golden.',
      'Drizzle with balsamic reduction and garnish with fresh herbs.',
      'Serve warm.'
    ],
    nutrition: {
      calories: 75,
      protein: '4g',
      carbs: '5g',
      fat: '5g'
    },
    tips: [
      'Choose mushrooms that are similar in size for even cooking',
      'Don\'t skip removing the gills - it makes room for more filling',
      'These can be stuffed up to 24 hours ahead and baked when ready to serve'
    ]
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
      id: "appetizer-" + p.id,
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
      
      ${recipe.tips ? `
        <div class='tips-box'>
          <h4><i class='fa-solid fa-lightbulb'></i> Pro Tips</h4>
          <ul>
            ${recipe.tips.map(tip => `<li>${tip}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
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