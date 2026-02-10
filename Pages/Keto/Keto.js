const product = [
  {
    id: 0,
    image: '/images/k1.webp',
    title: 'CHICKEN PARMESAN (LOW-CARB, KETO)',
    price: 12.95,
    cookTime: '35 minutes',
    servings: '4 servings',
    difficulty: 'Medium',
    netCarbs: '4g net carbs',
    macros: {
      calories: '485',
      protein: '42g',
      fat: '32g',
      carbs: '6g',
      fiber: '2g'
    },
    ingredients: [
      '4 boneless, skinless chicken breasts',
      '1 cup almond flour',
      '½ cup grated Parmesan cheese',
      '2 large eggs, beaten',
      '1 teaspoon Italian seasoning',
      '1 teaspoon garlic powder',
      '½ teaspoon salt',
      '¼ teaspoon black pepper',
      '1 cup sugar-free marinara sauce',
      '1 cup shredded mozzarella cheese',
      'Fresh basil for garnish',
      '3 tablespoons olive oil for frying'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C). Pound chicken breasts to even thickness (about ¾ inch).',
      'In a shallow bowl, mix almond flour, Parmesan cheese, Italian seasoning, garlic powder, salt, and pepper.',
      'Dip each chicken breast in beaten eggs, then coat thoroughly with the almond flour mixture.',
      'Heat olive oil in a large oven-safe skillet over medium-high heat. Cook chicken for 3-4 minutes per side until golden brown.',
      'Pour marinara sauce over the chicken breasts and top each with mozzarella cheese.',
      'Transfer skillet to oven and bake for 15-20 minutes until chicken reaches internal temperature of 165°F and cheese is melted and bubbly.',
      'Remove from oven and let rest for 5 minutes. Garnish with fresh basil before serving.',
      'Serve with zucchini noodles or a side salad for a complete keto meal.'
    ],
    tips: 'The almond flour coating keeps this dish low-carb while still achieving that crispy texture you love! Make sure to use sugar-free marinara sauce - check labels as many brands add sugar. You can prep the breaded chicken ahead and refrigerate for up to 24 hours before cooking. Leftovers reheat beautifully in the oven at 350°F.'
  },
  {
    id: 1,
    image: '/images/k2.webp',
    title: 'CAJUN SHRIMP AND MASHED CAULIFLOWER',
    price: 16.00,
    cookTime: '25 minutes',
    servings: '4 servings',
    difficulty: 'Easy',
    netCarbs: '7g net carbs',
    macros: {
      calories: '340',
      protein: '28g',
      fat: '22g',
      carbs: '10g',
      fiber: '3g'
    },
    ingredients: [
      '1.5 lbs large shrimp, peeled and deveined',
      '2 tablespoons Cajun seasoning',
      '3 tablespoons butter, divided',
      '3 cloves garlic, minced',
      'For Cauliflower Mash: 1 large head cauliflower (about 2 lbs), 4 oz cream cheese, ¼ cup heavy cream, 3 tablespoons butter, ½ cup shredded cheddar cheese, Salt and pepper to taste',
      'Fresh parsley and lemon wedges for serving'
    ],
    instructions: [
      'Cut cauliflower into florets and steam or boil for 12-15 minutes until very tender. Drain well and pat dry with paper towels to remove excess moisture.',
      'While cauliflower is hot, add cream cheese, heavy cream, butter, and cheddar cheese. Use an immersion blender or potato masher to blend until smooth and creamy. Season with salt and pepper. Keep warm.',
      'Pat shrimp dry and toss with Cajun seasoning until evenly coated.',
      'Heat 2 tablespoons butter in a large skillet over medium-high heat. Add minced garlic and cook for 30 seconds until fragrant.',
      'Add seasoned shrimp to the skillet in a single layer. Cook for 2-3 minutes per side until pink and cooked through.',
      'Add remaining 1 tablespoon butter to the pan and toss shrimp to coat.',
      'Serve Cajun shrimp over mashed cauliflower. Garnish with fresh parsley and lemon wedges.'
    ],
    tips: 'The secret to perfect cauliflower mash is removing all excess moisture - this prevents it from being watery! For spicier shrimp, add extra Cajun seasoning or a pinch of cayenne. This dish is naturally gluten-free and packed with protein. You can meal prep the cauliflower mash and store it in the fridge for up to 3 days - just reheat gently with a splash of cream.'
  },
  {
    id: 2,
    image: '/images/k3.webp',
    title: 'STUFFED BELL PEPPERS (VEGETARIAN OR BEEF)',
    price: 8.99,
    cookTime: '50 minutes',
    servings: '6 servings',
    difficulty: 'Easy',
    netCarbs: '8g net carbs',
    macros: {
      calories: '295',
      protein: '18g',
      fat: '20g',
      carbs: '12g',
      fiber: '4g'
    },
    ingredients: [
      '6 large bell peppers (any color)',
      '1 lb ground beef or crumbled tempeh (for vegetarian)',
      '1 small onion, diced',
      '2 cloves garlic, minced',
      '1 cup cauliflower rice',
      '1 can (14 oz) diced tomatoes, drained',
      '1 cup shredded cheddar cheese',
      '½ cup shredded mozzarella cheese',
      '2 teaspoons Italian seasoning',
      '1 teaspoon cumin',
      'Salt and pepper to taste',
      '2 tablespoons olive oil',
      'Fresh cilantro or parsley for garnish'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C). Cut the tops off peppers and remove seeds and membranes. Place peppers in a baking dish.',
      'Heat olive oil in a large skillet over medium heat. Add onion and cook until softened, about 5 minutes. Add garlic and cook for 1 minute.',
      'Add ground beef (or tempeh) and cook until browned, breaking it up as it cooks. Drain excess fat if using beef.',
      'Stir in cauliflower rice, diced tomatoes, Italian seasoning, cumin, salt, and pepper. Cook for 5 minutes, stirring occasionally.',
      'Remove from heat and stir in ½ cup cheddar cheese.',
      'Stuff each bell pepper with the meat mixture, packing it down gently. Top each with remaining cheddar and mozzarella cheese.',
      'Cover the baking dish with foil and bake for 30 minutes. Remove foil and bake for an additional 10-15 minutes until peppers are tender and cheese is golden.',
      'Let cool for 5 minutes before serving. Garnish with fresh herbs.'
    ],
    tips: 'Using cauliflower rice instead of regular rice keeps these peppers keto-friendly! You can prep these ahead - stuff the peppers and refrigerate for up to 24 hours before baking. For a vegetarian version, crumbled tempeh or extra-firm tofu work great. These freeze well too - freeze before baking, then bake from frozen adding 15-20 extra minutes.'
  },
  {
    id: 3,
    image: '/images/k4.webp',
    title: 'KETO RAINBOW PIZZA',
    price: 13.56,
    cookTime: '40 minutes',
    servings: '4 servings',
    difficulty: 'Medium',
    netCarbs: '6g net carbs',
    macros: {
      calories: '380',
      protein: '24g',
      fat: '28g',
      carbs: '9g',
      fiber: '3g'
    },
    ingredients: [
      'For Crust: 2 cups shredded mozzarella cheese, ¾ cup almond flour, 2 oz cream cheese, 1 egg, 1 teaspoon Italian seasoning',
      'For Toppings: ½ cup sugar-free pizza sauce, 1 cup shredded mozzarella, ½ red bell pepper (sliced), ½ yellow bell pepper (sliced), ½ orange bell pepper (sliced), ½ cup cherry tomatoes (halved), ¼ red onion (sliced), ½ cup mushrooms (sliced), Fresh basil leaves'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C). Line a baking sheet with parchment paper.',
      'Make the crust: Microwave mozzarella and cream cheese together for 1 minute, stir, then microwave for another 30 seconds until melted.',
      'Add almond flour, egg, and Italian seasoning to the melted cheese. Mix until a dough forms. If too sticky, wet your hands slightly.',
      'Place dough on parchment paper and press or roll into a 12-inch circle, about ¼ inch thick.',
      'Pre-bake the crust for 8-10 minutes until it starts to turn golden. Remove from oven.',
      'Spread pizza sauce over the crust, leaving a small border. Sprinkle with shredded mozzarella.',
      'Arrange rainbow bell peppers, tomatoes, onions, and mushrooms artistically on top.',
      'Bake for 12-15 minutes until cheese is melted and bubbly and edges are golden brown.',
      'Remove from oven, top with fresh basil, slice, and serve immediately.'
    ],
    tips: 'The mozzarella and almond flour crust is a keto game-changer! Make sure to pre-bake the crust to prevent sogginess. You can customize toppings with your favorites - just avoid high-carb options like pineapple or corn. The crust can be made ahead and frozen for quick pizza nights. For extra flavor, brush the crust edges with garlic butter before baking.'
  },
  {
    id: 4,
    image: '/images/k5.webp',
    title: 'KETO TURKEY SANDWICH WITH CRANBERRY RELISH',
    price: 12.00,
    cookTime: '15 minutes',
    servings: '2 servings',
    difficulty: 'Easy',
    netCarbs: '5g net carbs',
    macros: {
      calories: '420',
      protein: '32g',
      fat: '30g',
      carbs: '8g',
      fiber: '3g'
    },
    ingredients: [
      'For "Bread": 4 slices of keto cloud bread or 2 large lettuce leaves',
      '8 oz sliced roasted turkey breast',
      '4 slices Swiss or provolone cheese',
      '4 strips cooked bacon',
      '¼ avocado, sliced',
      'For Cranberry Relish: ½ cup fresh cranberries, 2 tablespoons erythritol or monk fruit sweetener, 1 tablespoon water, ¼ teaspoon orange zest',
      'Mayonnaise, mustard, salt and pepper to taste'
    ],
    instructions: [
      'Make cranberry relish: In a small saucepan, combine cranberries, sweetener, water, and orange zest. Cook over medium heat for 8-10 minutes, stirring occasionally, until cranberries burst and mixture thickens. Let cool.',
      'If using cloud bread, lightly toast it. If using lettuce, pat dry.',
      'Spread mayonnaise and mustard on bread or lettuce.',
      'Layer turkey slices, cheese, bacon, and avocado.',
      'Top with a spoonful of cranberry relish.',
      'Add the top piece of bread or wrap with lettuce. Secure with toothpicks if needed.',
      'Cut in half and serve immediately.'
    ],
    tips: 'Cloud bread is a fantastic keto bread alternative made from eggs and cream cheese! For an even lower-carb option, use large lettuce leaves as wraps. The cranberry relish is naturally low-carb when made with sugar-free sweetener - it adds that perfect tangy-sweet flavor. You can make the relish ahead and store it in the fridge for up to a week. This is perfect for using up Thanksgiving leftovers in a keto-friendly way!'
  },
  {
    id: 5,
    image: '/images/h6.webp',
    title: 'CINNAMON FLAX MUFFINS',
    price: 7.99,
    cookTime: '25 minutes',
    servings: '12 muffins',
    difficulty: 'Easy',
    netCarbs: '2g net carbs',
    macros: {
      calories: '155',
      protein: '6g',
      fat: '13g',
      carbs: '5g',
      fiber: '3g'
    },
    ingredients: [
      '2 cups golden flaxseed meal',
      '1 tablespoon baking powder',
      '2 teaspoons ground cinnamon',
      '½ teaspoon salt',
      '5 large eggs',
      '½ cup melted coconut oil or butter',
      '½ cup unsweetened almond milk',
      '⅓ cup erythritol or monk fruit sweetener',
      '1 teaspoon vanilla extract',
      'Optional: ½ cup chopped walnuts or sugar-free chocolate chips'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Line a 12-cup muffin tin with paper liners or grease well.',
      'In a large bowl, whisk together flaxseed meal, baking powder, cinnamon, and salt.',
      'In another bowl, beat eggs. Add melted coconut oil, almond milk, sweetener, and vanilla. Mix well.',
      'Pour wet ingredients into dry ingredients and stir until just combined. Don\'t overmix.',
      'Fold in walnuts or chocolate chips if using.',
      'Divide batter evenly among muffin cups, filling each about ⅔ full.',
      'Bake for 18-22 minutes until a toothpick inserted in the center comes out clean and tops are golden.',
      'Let cool in pan for 5 minutes, then transfer to a wire rack to cool completely. Store in an airtight container for up to 5 days or freeze for up to 3 months.'
    ],
    tips: 'These fiber-rich muffins are perfect for meal prep! Flaxseed meal is packed with omega-3s and has a nutty flavor. Golden flaxseed has a milder taste than brown flaxseed. These muffins are slightly dense but very satisfying. They\'re great for breakfast on the go or as a snack. Top with butter or cream cheese for extra fat and flavor. You can also add sugar-free jam for a special treat!'
  },
  {
    id: 6,
    image: '/images/h7.jpg',
    title: 'CAULIFLOWER GRILLED CHEESE',
    price: 18.99,
    cookTime: '30 minutes',
    servings: '2 servings',
    difficulty: 'Medium',
    netCarbs: '4g net carbs',
    macros: {
      calories: '385',
      protein: '22g',
      fat: '30g',
      carbs: '8g',
      fiber: '4g'
    },
    ingredients: [
      'For Cauliflower Bread: 2 cups riced cauliflower, 1 cup shredded mozzarella cheese, 1 egg, ½ teaspoon garlic powder, ½ teaspoon Italian seasoning, Salt and pepper',
      'For Filling: 4 slices cheddar cheese, 2 slices provolone cheese, 2 tablespoons butter for grilling'
    ],
    instructions: [
      'Preheat oven to 450°F (230°C). Line a baking sheet with parchment paper.',
      'Microwave riced cauliflower for 4 minutes. Let cool, then squeeze out ALL excess moisture using a clean kitchen towel or cheesecloth. This step is crucial!',
      'In a bowl, mix dried cauliflower, mozzarella, egg, garlic powder, Italian seasoning, salt, and pepper until well combined.',
      'Divide mixture into 4 portions on the parchment paper. Shape each into a square or rectangle about ¼ inch thick.',
      'Bake for 15-18 minutes until golden and firm. Let cool for 5 minutes - they\'ll firm up more.',
      'Heat a skillet over medium heat. Butter one side of two cauliflower "bread" pieces.',
      'Place butter-side down in the skillet. Top each with cheddar and provolone cheese. Place remaining bread slices on top, butter the top sides.',
      'Cook for 3-4 minutes per side until cheese is melted and bread is golden and crispy. Serve hot.'
    ],
    tips: 'The key to success with cauliflower bread is removing ALL the moisture - seriously, squeeze it really well! These "bread" slices are surprisingly sturdy and perfect for grilled cheese. You can make the cauliflower bread ahead and store in the fridge for up to 3 days. Reheat in a toaster before making your sandwich. Try adding bacon, tomato, or avocado for extra flavor!'
  },
  {
    id: 7,
    image: '/images/k8.webp',
    title: 'MY FAMOUS BACON WRAPPED JALAPENOS (POPPERS)',
    price: 6.87,
    cookTime: '35 minutes',
    servings: '24 poppers',
    difficulty: 'Easy',
    netCarbs: '1g net carbs',
    macros: {
      calories: '75',
      protein: '4g',
      fat: '6g',
      carbs: '1g',
      fiber: '0g'
    },
    ingredients: [
      '12 large jalapeño peppers',
      '8 oz cream cheese, softened',
      '1 cup shredded cheddar cheese',
      '½ teaspoon garlic powder',
      '½ teaspoon onion powder',
      '¼ teaspoon smoked paprika',
      '12 strips bacon, cut in half',
      'Toothpicks for securing',
      'Optional: chopped fresh chives for garnish'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C). Line a baking sheet with foil and place a wire rack on top.',
      'Cut jalapeños in half lengthwise and remove seeds and membranes. Wear gloves to protect your hands!',
      'In a bowl, mix cream cheese, cheddar cheese, garlic powder, onion powder, and smoked paprika until smooth.',
      'Fill each jalapeño half with the cream cheese mixture, mounding it slightly.',
      'Wrap each stuffed jalapeño with a half-strip of bacon, securing with a toothpick.',
      'Place poppers on the wire rack (this allows bacon to crisp on all sides).',
      'Bake for 25-30 minutes until bacon is crispy and peppers are tender.',
      'For extra crispy bacon, broil for the last 2-3 minutes, watching carefully to prevent burning.',
      'Let cool for 5 minutes before serving. Remove toothpicks and garnish with chives if desired.'
    ],
    tips: 'These are the ultimate keto party appetizer! The cream cheese filling balances the heat of the jalapeños perfectly. For milder poppers, remove all the seeds and membranes. For extra heat, leave some seeds in. You can prep these ahead - stuff and wrap them, then refrigerate for up to 24 hours before baking. They also freeze well before baking - just add 5-10 minutes to cooking time when baking from frozen.'
  }
];

const categories = product.map(item => item.title);

// Render products
document.querySelector("#root").innerHTML = product.map((item, i) => {
  const { image, title, price } = item;
  return `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src='${image}' alt='${title}'>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price.toFixed(2)}</h2>
        <div class='button-group'>
          <button class='view-recipe-btn' onClick='viewRecipe(${i})'>
            <i class="fa-solid fa-book-open"></i> Recipe
          </button>
          <button class='add-to-cart-btn' onClick='addtocart(${i})'>
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>`;
}).join('');

// Add to cart function
function addtocart(i) {
  const p = product[i];
  addToCart({
    id: "keto-" + p.id,
    title: p.title,
    price: p.price,
    image: p.image
  });
}

// View recipe function
function viewRecipe(index) {
  const recipe = product[index];
  const modal = document.getElementById('recipeModal');
  
  // Populate modal with recipe data
  document.getElementById('recipeImage').src = recipe.image;
  document.getElementById('recipeTitle').textContent = recipe.title;
  document.getElementById('recipeCookTime').textContent = recipe.cookTime;
  document.getElementById('recipeServings').textContent = recipe.servings;
  document.getElementById('recipeDifficulty').textContent = recipe.difficulty;
  document.getElementById('netCarbs').textContent = recipe.netCarbs;
  
  // Populate macros
  const macrosGrid = document.getElementById('recipeMacros');
  macrosGrid.innerHTML = `
    <div class="macro-item">
      <div class="macro-value">${recipe.macros.calories}</div>
      <div class="macro-label">Calories</div>
    </div>
    <div class="macro-item">
      <div class="macro-value">${recipe.macros.protein}</div>
      <div class="macro-label">Protein</div>
    </div>
    <div class="macro-item">
      <div class="macro-value">${recipe.macros.fat}</div>
      <div class="macro-label">Fat</div>
    </div>
    <div class="macro-item">
      <div class="macro-value">${recipe.macros.carbs}</div>
      <div class="macro-label">Total Carbs</div>
    </div>
    <div class="macro-item">
      <div class="macro-value">${recipe.macros.fiber}</div>
      <div class="macro-label">Fiber</div>
    </div>
  `;
  
  // Populate ingredients
  const ingredientsList = document.getElementById('recipeIngredients');
  ingredientsList.innerHTML = recipe.ingredients.map(ingredient => 
    `<li>${ingredient}</li>`
  ).join('');
  
  // Populate instructions
  const instructionsList = document.getElementById('recipeInstructions');
  instructionsList.innerHTML = recipe.instructions.map(instruction => 
    `<li>${instruction}</li>`
  ).join('');
  
  // Populate tips
  document.getElementById('recipeTips').textContent = recipe.tips;
  
  // Show modal
  modal.style.display = 'block';
}

// Modal close functionality
const modal = document.getElementById('recipeModal');
const closeBtn = document.querySelector('.close');

closeBtn.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modal.style.display === 'block') {
    modal.style.display = 'none';
  }
});