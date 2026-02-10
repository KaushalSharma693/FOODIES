const product = [
  {
    id: 0,
    image: '/images/b1.jpeg',
    title: 'NAAN',
    price: 1,
    prepTime: '1 hour 30 mins',
    cookTime: '10 mins',
    servings: 8,
    description: 'Soft, pillowy Indian flatbread perfect for scooping up curries and sauces. This traditional naan is made with yogurt for extra tenderness and cooked to perfection!',
    ingredients: [
      '3 cups all-purpose flour',
      '1 cup warm milk (110°F)',
      '2 tsp active dry yeast',
      '2 tsp sugar',
      '1/2 cup plain yogurt',
      '1 large egg, beaten',
      '2 tsp salt',
      '1/4 cup melted butter',
      '4 tbsp ghee or butter for brushing',
      'Fresh cilantro, chopped',
      '2 cloves garlic, minced (optional)'
    ],
    instructions: [
      'In a small bowl, combine warm milk, yeast, and 1 teaspoon sugar. Let stand for 10 minutes until foamy.',
      'In a large bowl, mix flour, remaining sugar, and salt.',
      'Add yeast mixture, yogurt, beaten egg, and melted butter to the flour. Mix until a dough forms.',
      'Knead the dough on a floured surface for 8-10 minutes until smooth and elastic.',
      'Place dough in a greased bowl, cover, and let rise in a warm place for 1 hour until doubled.',
      'Divide dough into 8 equal pieces and roll each into a ball.',
      'Roll each ball into an oval shape about 1/4 inch thick.',
      'Heat a skillet or griddle over high heat. Cook each naan for 2-3 minutes per side until bubbles form and it gets charred spots.',
      'Brush hot naan with ghee or butter and sprinkle with garlic and cilantro if desired.',
      'Serve warm with your favorite curry or dips.'
    ],
    nutrition: {
      calories: 265,
      protein: '8g',
      carbs: '42g',
      fat: '7g'
    },
    tips: [
      'For garlic naan, brush with garlic butter before serving',
      'Keep cooked naan warm wrapped in a kitchen towel',
      'Freeze extras for up to 3 months - reheat in a skillet'
    ]
  },
  {
    id: 1,
    image: '/images/b2.jpeg',
    title: 'ENGLISH MUFFINS',
    price: 2,
    prepTime: '2 hours',
    cookTime: '20 mins',
    servings: 12,
    description: 'Homemade English muffins with those iconic nooks and crannies! Perfect for breakfast sandwiches or toasted with butter and jam.',
    ingredients: [
      '4 cups all-purpose flour',
      '1 1/2 cups warm milk',
      '2 tbsp active dry yeast',
      '2 tbsp sugar',
      '1 tsp salt',
      '1/4 cup melted butter',
      '1/2 cup cornmeal for dusting',
      '2 tbsp vegetable oil'
    ],
    instructions: [
      'Combine warm milk, yeast, and sugar in a bowl. Let stand 10 minutes until foamy.',
      'Mix flour and salt in a large bowl.',
      'Add yeast mixture and melted butter to flour. Stir until a sticky dough forms.',
      'Knead dough for 5-7 minutes until smooth (it will still be slightly sticky).',
      'Place in greased bowl, cover, and let rise 1 hour until doubled.',
      'Roll dough out to 3/4 inch thickness on a floured surface.',
      'Cut into circles using a 3-inch round cutter. Dust both sides with cornmeal.',
      'Place on baking sheets, cover, and let rise 30 minutes.',
      'Heat a griddle or large skillet over medium-low heat. Lightly oil the surface.',
      'Cook muffins for 7-10 minutes per side until golden brown and cooked through.',
      'Let cool completely, then split with a fork (not a knife!) to preserve the nooks and crannies.',
      'Toast and serve with butter and jam.'
    ],
    nutrition: {
      calories: 215,
      protein: '6g',
      carbs: '37g',
      fat: '5g'
    },
    tips: [
      'Don\'t rush the cooking - low and slow heat is key',
      'Always split with a fork to create those signature nooks and crannies',
      'Store in an airtight container for up to 5 days or freeze for 3 months'
    ]
  },
  {
    id: 2,
    image: '/images/b3.jpeg',
    title: 'AMERICAN INDIAN FRY BREAD',
    price: 18.89,
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 8,
    description: 'Traditional Native American fry bread - crispy on the outside, soft and fluffy inside. Perfect as a base for tacos or drizzled with honey!',
    ingredients: [
      '4 cups all-purpose flour',
      '2 tbsp baking powder',
      '1 tsp salt',
      '2 tbsp sugar',
      '1 1/2 cups warm water',
      '2 tbsp vegetable oil',
      'Oil for frying',
      'Powdered sugar or honey for serving'
    ],
    instructions: [
      'In a large bowl, combine flour, baking powder, salt, and sugar.',
      'Add warm water and 2 tablespoons oil. Mix until a soft dough forms.',
      'Knead dough for 5 minutes until smooth and elastic.',
      'Divide dough into 8 equal pieces and roll into balls.',
      'Cover and let rest for 10 minutes.',
      'Roll each ball into a circle about 1/4 inch thick. Poke a small hole in the center.',
      'Heat 2 inches of oil in a deep skillet to 375°F.',
      'Carefully slide dough into hot oil. Fry for 2-3 minutes per side until golden brown and puffy.',
      'Drain on paper towels.',
      'Serve warm, topped with powdered sugar, honey, or use as a base for Indian tacos.'
    ],
    nutrition: {
      calories: 385,
      protein: '7g',
      carbs: '51g',
      fat: '16g'
    },
    tips: [
      'The hole in the center helps the bread cook evenly',
      'Oil temperature is crucial - use a thermometer',
      'Top with seasoned ground beef, lettuce, tomatoes, and cheese for Indian tacos'
    ]
  },
  {
    id: 3,
    image: '/images/b4.jpeg',
    title: 'CIABATTA (ITALIAN SLIPPER BREAD)',
    price: 5.99,
    prepTime: '24 hours (includes rising)',
    cookTime: '25 mins',
    servings: 2,
    description: 'Authentic Italian ciabatta with a crispy crust and airy, open crumb. This artisan bread is perfect for sandwiches or dipping in olive oil!',
    ingredients: [
      '3 1/2 cups bread flour',
      '2 cups warm water',
      '2 tsp active dry yeast',
      '2 tsp salt',
      '2 tbsp olive oil',
      '1 tsp sugar',
      'Extra flour for dusting'
    ],
    instructions: [
      'Mix warm water, yeast, and sugar. Let stand 10 minutes until foamy.',
      'In a large bowl, combine flour and salt.',
      'Add yeast mixture and olive oil. Mix until a very wet, sticky dough forms.',
      'Cover and refrigerate for 12-24 hours for flavor development.',
      'Remove from refrigerator 2 hours before baking to come to room temperature.',
      'Turn dough onto a heavily floured surface. Divide into 2 pieces without deflating too much.',
      'Shape each piece into a rough rectangle, stretching gently. Let rest 30 minutes.',
      'Preheat oven to 425°F with a baking stone or inverted baking sheet inside.',
      'Transfer loaves to parchment paper. Dimple the surface with your fingers.',
      'Slide onto hot baking stone. Bake 20-25 minutes until golden with a hollow sound when tapped.',
      'Cool on a wire rack before slicing.'
    ],
    nutrition: {
      calories: 175,
      protein: '6g',
      carbs: '34g',
      fat: '2g'
    },
    tips: [
      'Don\'t add extra flour - the dough should be very wet',
      'Handle gently to preserve the air bubbles',
      'Steam in the oven for a crustier bread - place a pan of water on bottom rack'
    ]
  },
  {
    id: 4,
    image: '/images/b5.jpg',
    title: 'ALOO PARATHA',
    price: 1.5,
    prepTime: '30 mins',
    cookTime: '20 mins',
    servings: 6,
    description: 'Popular Indian flatbread stuffed with spiced potato filling. Crispy on the outside with a flavorful, soft filling - perfect for breakfast!',
    ingredients: [
      '2 cups whole wheat flour',
      '3 large potatoes, boiled and mashed',
      '1/2 cup water',
      '1 tsp cumin seeds',
      '1 tsp garam masala',
      '1/2 tsp turmeric',
      '1/2 tsp red chili powder',
      '2 green chilies, minced',
      '2 tbsp fresh cilantro, chopped',
      '1 tsp salt',
      'Ghee or butter for cooking',
      'Yogurt or pickle for serving'
    ],
    instructions: [
      'Mix whole wheat flour with a pinch of salt. Add water gradually and knead into a soft dough. Cover and rest 15 minutes.',
      'For filling: Mix mashed potatoes with cumin, garam masala, turmeric, chili powder, green chilies, cilantro, and salt.',
      'Divide dough into 6 balls.',
      'Roll each ball into a 4-inch circle.',
      'Place 2-3 tablespoons of potato filling in the center.',
      'Gather edges to seal the filling inside, then flatten gently.',
      'Roll out carefully into a 7-8 inch circle, ensuring filling doesn\'t leak out.',
      'Heat a griddle over medium-high heat.',
      'Cook paratha for 2 minutes, then flip and cook 2 minutes more.',
      'Brush both sides with ghee and cook until golden brown spots appear.',
      'Serve hot with yogurt, pickle, or butter.'
    ],
    nutrition: {
      calories: 215,
      protein: '6g',
      carbs: '38g',
      fat: '5g'
    },
    tips: [
      'Make sure potatoes are completely cooled before mixing with spices',
      'Roll gently to prevent the filling from breaking through',
      'These taste best when served fresh and hot'
    ]
  },
  {
    id: 5,
    image: '/images/b6.jpg',
    title: 'QUICK SOFT BREADSTICKS',
    price: 3.29,
    prepTime: '15 mins',
    cookTime: '15 mins',
    servings: 12,
    description: 'Soft, buttery breadsticks that come together in minutes! Perfect as a side for pasta, soup, or salad.',
    ingredients: [
      '3 cups all-purpose flour',
      '1 tbsp instant yeast',
      '2 tbsp sugar',
      '1 tsp salt',
      '1 cup warm water',
      '1/4 cup melted butter',
      '3 tbsp butter for brushing',
      '1 tsp garlic powder',
      '2 tbsp grated Parmesan cheese',
      '1 tbsp Italian seasoning',
      'Marinara sauce for dipping'
    ],
    instructions: [
      'Preheat oven to 400°F. Line a baking sheet with parchment paper.',
      'Mix flour, yeast, sugar, and salt in a bowl.',
      'Add warm water and melted butter. Mix until a dough forms.',
      'Knead for 3-4 minutes until smooth.',
      'Divide dough into 12 equal pieces.',
      'Roll each piece into an 8-inch rope.',
      'Place on prepared baking sheet.',
      'Cover and let rise 10 minutes.',
      'Bake for 12-15 minutes until golden.',
      'Melt remaining butter with garlic powder.',
      'Brush hot breadsticks with garlic butter and sprinkle with Parmesan and Italian seasoning.',
      'Serve warm with marinara sauce.'
    ],
    nutrition: {
      calories: 165,
      protein: '4g',
      carbs: '26g',
      fat: '5g'
    },
    tips: [
      'Don\'t skip the quick rise - it makes them extra soft',
      'Brush with butter immediately after baking for maximum flavor',
      'These are best eaten the same day but can be frozen'
    ]
  },
  {
    id: 6,
    image: '/images/b7.jpg',
    title: 'SWEET CORNBREAD',
    price: 1.1,
    prepTime: '10 mins',
    cookTime: '25 mins',
    servings: 12,
    description: 'Moist, sweet cornbread that\'s perfect alongside chili, barbecue, or enjoyed on its own with honey butter!',
    ingredients: [
      '1 cup cornmeal',
      '1 cup all-purpose flour',
      '1/2 cup sugar',
      '1 tbsp baking powder',
      '1/2 tsp salt',
      '1 cup milk',
      '2 large eggs',
      '1/3 cup melted butter',
      '1/3 cup honey',
      'Optional: 1 cup corn kernels'
    ],
    instructions: [
      'Preheat oven to 400°F. Grease a 9x9 inch baking pan.',
      'In a large bowl, whisk together cornmeal, flour, sugar, baking powder, and salt.',
      'In another bowl, whisk milk, eggs, melted butter, and honey.',
      'Pour wet ingredients into dry ingredients and stir until just combined.',
      'Fold in corn kernels if using.',
      'Pour batter into prepared pan.',
      'Bake for 22-25 minutes until golden and a toothpick comes out clean.',
      'Let cool for 10 minutes before cutting.',
      'Serve warm with butter and honey.'
    ],
    nutrition: {
      calories: 195,
      protein: '4g',
      carbs: '31g',
      fat: '7g'
    },
    tips: [
      'Don\'t overmix - lumps are okay and keep it tender',
      'For extra moisture, add a can of creamed corn',
      'Store covered at room temperature for 2 days or refrigerate for up to a week'
    ]
  },
  {
    id: 7,
    image: '/images/b8.jpg',
    title: 'ROTI CANAI (AUTHENTIC MALAYSIAN RECIPE)',
    price: 9.87,
    prepTime: '3 hours',
    cookTime: '20 mins',
    servings: 8,
    description: 'Flaky, crispy Malaysian flatbread with beautiful layers. This authentic roti canai is perfect for dipping in curry or dal!',
    ingredients: [
      '3 cups all-purpose flour',
      '1 tsp salt',
      '1 tbsp sugar',
      '1 large egg',
      '3/4 cup water',
      '1/3 cup condensed milk',
      '1/4 cup ghee or butter, melted',
      'Extra ghee for folding and cooking',
      'Curry or dal for serving'
    ],
    instructions: [
      'Mix flour, salt, and sugar in a large bowl.',
      'In another bowl, whisk egg, water, condensed milk, and melted ghee.',
      'Add wet ingredients to flour and knead for 10 minutes until very smooth and elastic.',
      'Divide into 8 balls and coat each generously with ghee.',
      'Cover and rest for at least 2 hours (overnight is even better).',
      'On an oiled surface, flatten one ball and stretch it paper-thin, creating a large square.',
      'Fold the dough into pleats like a fan, then coil it into a spiral.',
      'Flatten the spiral slightly with your palm. Repeat with remaining dough.',
      'Let rest 10 minutes.',
      'Heat a griddle over medium heat. Cook each roti for 2-3 minutes per side until golden with crispy spots.',
      'Remove from pan and clap between your hands to separate the layers.',
      'Serve immediately with curry or dal.'
    ],
    nutrition: {
      calories: 285,
      protein: '6g',
      carbs: '40g',
      fat: '11g'
    },
    tips: [
      'The dough must rest - this is crucial for stretchability',
      'Work on an oiled surface to stretch the dough thin without tearing',
      'The "clapping" technique creates those signature flaky layers'
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
            <i class='fa-solid fa-bread-slice'></i> Recipe
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
      id: "bread-" + p.id,
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