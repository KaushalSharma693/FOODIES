const product = [
  {
    id: 0,
    image: '/images/p1.jpeg',
    title: 'PANDA EXPRESS ORANGE CHICKEN',
    price: 9.15,
    restaurant: 'Panda Express',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '1 1/2 lbs boneless skinless chicken breast, cut into 1-inch cubes',
      '3 eggs, beaten',
      '1 cup cornstarch',
      '1/3 cup vegetable oil for frying',
      'For the Orange Sauce:',
      '1 1/2 cups orange juice',
      '1/2 cup sugar',
      '1/3 cup rice vinegar',
      '1/4 cup soy sauce',
      '1 tbsp orange zest',
      '1 tsp fresh ginger, minced',
      '2 cloves garlic, minced',
      '1/4 tsp red pepper flakes',
      '2 tbsp cornstarch mixed with 2 tbsp water',
      'Green onions and sesame seeds for garnish'
    ],
    instructions: [
      'In a bowl, coat chicken cubes with beaten eggs, then dredge in cornstarch until fully covered.',
      'Heat oil in a large skillet or wok over medium-high heat. Fry chicken in batches until golden brown and crispy, about 3-4 minutes per side. Remove and drain on paper towels.',
      'In a saucepan, combine orange juice, sugar, rice vinegar, soy sauce, orange zest, ginger, garlic, and red pepper flakes. Bring to a boil.',
      'Reduce heat and simmer for 5 minutes. Add the cornstarch slurry and stir until sauce thickens, about 2 minutes.',
      'Toss the crispy chicken in the orange sauce until well coated.',
      'Serve immediately over steamed rice, garnished with sliced green onions and sesame seeds.',
      'For extra crispiness, you can double-fry the chicken by frying once, letting it rest, then frying again briefly before saucing.'
    ],
    nutrition: {
      calories: 485,
      protein: '38g',
      carbs: '52g',
      fat: '14g',
      fiber: '1g'
    },
    tips: 'The secret to authentic Panda Express taste is in the double-frying technique and fresh orange zest! For a healthier version, you can bake the breaded chicken at 425°F for 20 minutes instead of frying. The sauce can be made ahead and stored in the fridge for up to a week.'
  },
  {
    id: 1,
    image: '/images/p2.jpeg',
    title: 'COPYCAT CHIPOTLE GRILLED ADOBO CHICKEN BURRITO',
    price: 6.00,
    restaurant: 'Chipotle',
    prepTime: '15 mins + marinating',
    cookTime: '12 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'For the Chicken:',
      '1 1/2 lbs boneless skinless chicken thighs',
      '3 chipotle peppers in adobo sauce',
      '2 tbsp adobo sauce',
      '3 cloves garlic',
      '1 tsp cumin',
      '1 tsp oregano',
      '1/4 cup vegetable oil',
      'Juice of 2 limes',
      'Salt and pepper to taste',
      'For the Burrito:',
      '4 large flour tortillas',
      '2 cups cilantro-lime rice',
      '1 1/2 cups black beans',
      '1 cup corn salsa',
      '1 cup pico de gallo',
      '1 cup sour cream',
      '2 cups shredded cheese',
      '1 cup shredded lettuce',
      'Guacamole (optional)'
    ],
    instructions: [
      'In a blender, combine chipotle peppers, adobo sauce, garlic, cumin, oregano, oil, and lime juice. Blend until smooth.',
      'Place chicken thighs in a bowl or ziplock bag. Pour marinade over chicken and refrigerate for at least 2 hours, preferably overnight.',
      'Preheat grill or grill pan to medium-high heat. Remove chicken from marinade and season with salt and pepper.',
      'Grill chicken for 5-6 minutes per side until cooked through and slightly charred. Let rest for 5 minutes, then dice into small pieces.',
      'Warm flour tortillas on the grill or in a dry skillet for 30 seconds per side.',
      'To assemble: Place tortilla on a flat surface. Add a line of cilantro-lime rice down the center, then layer with black beans, grilled chicken, corn salsa, pico de gallo, cheese, sour cream, and lettuce.',
      'Fold in the sides of the tortilla, then roll tightly from the bottom up.',
      'Optional: Grill the wrapped burrito seam-side down for 1-2 minutes to seal and create grill marks.',
      'Cut in half diagonally and serve with guacamole and extra salsa on the side.'
    ],
    nutrition: {
      calories: 725,
      protein: '42g',
      carbs: '68g',
      fat: '32g',
      fiber: '8g'
    },
    tips: 'The key to Chipotle-style chicken is the overnight marinade! For authentic cilantro-lime rice, cook white rice and toss with fresh lime juice, cilantro, and a pinch of salt. Don\'t overfill your burrito or it won\'t roll properly - less is more!'
  },
  {
    id: 2,
    image: '/images/p3.jpeg',
    title: 'ROMANOS MACARONI GRILL PENNE RUSTICA',
    price: 23.58,
    restaurant: 'Romano\'s Macaroni Grill',
    prepTime: '20 mins',
    cookTime: '25 mins',
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      '1 lb penne pasta',
      '3 boneless skinless chicken breasts, cut into strips',
      '1/2 lb Italian sausage, casings removed',
      '8 oz button mushrooms, sliced',
      '3 cups heavy cream',
      '1/2 cup chicken broth',
      '1/2 cup white wine',
      '3/4 cup sun-dried tomatoes, julienned',
      '4 cloves garlic, minced',
      '1 cup Parmesan cheese, grated',
      '1/4 cup butter',
      '2 tbsp olive oil',
      '2 tsp Italian seasoning',
      '1/2 tsp red pepper flakes',
      'Salt and pepper to taste',
      'Fresh rosemary for garnish',
      'Fresh parsley, chopped'
    ],
    instructions: [
      'Cook penne pasta according to package directions until al dente. Drain and set aside.',
      'In a large skillet, heat olive oil over medium-high heat. Season chicken strips with salt, pepper, and Italian seasoning. Cook until golden brown and cooked through, about 6-7 minutes. Remove and set aside.',
      'In the same skillet, cook Italian sausage, breaking it up with a spoon, until browned. Remove and set aside with chicken.',
      'Add butter to the skillet. Sauté mushrooms until golden, about 5 minutes. Add garlic and cook for 1 minute.',
      'Pour in white wine and scrape up any browned bits. Let reduce by half, about 2 minutes.',
      'Add heavy cream, chicken broth, sun-dried tomatoes, and red pepper flakes. Bring to a simmer and cook for 5 minutes until slightly thickened.',
      'Return chicken and sausage to the skillet. Stir in Parmesan cheese until melted and smooth.',
      'Add cooked penne to the sauce and toss until well coated. Cook for 2-3 minutes to heat through.',
      'Season with salt and pepper to taste. Garnish with fresh rosemary and parsley.',
      'Serve immediately with extra Parmesan cheese and crusty bread.'
    ],
    nutrition: {
      calories: 785,
      protein: '45g',
      carbs: '58g',
      fat: '42g',
      fiber: '3g'
    },
    tips: 'This is a rich, indulgent dish - perfect for special occasions! Use oil-packed sun-dried tomatoes for the best flavor. If the sauce is too thick, add a splash of pasta water. For a lighter version, substitute half-and-half for heavy cream.'
  },
  {
    id: 3,
    image: '/images/p4.jpeg',
    title: 'COPYCAT TACO BELL NACHO FRIES BELLGRANDE',
    price: 7.19,
    restaurant: 'Taco Bell',
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'For the Fries:',
      '2 lbs russet potatoes, cut into fries',
      '3 tbsp vegetable oil',
      '1 tsp Mexican seasoning',
      '1/2 tsp paprika',
      '1/4 tsp garlic powder',
      'Salt to taste',
      'For the Toppings:',
      '1 lb ground beef',
      '1 packet taco seasoning',
      '2 cups shredded cheddar cheese',
      '1 cup nacho cheese sauce',
      '1 cup sour cream',
      '1 cup diced tomatoes',
      '1/2 cup sliced jalapeños',
      '1/4 cup sliced black olives',
      '2 green onions, sliced'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C). Line a baking sheet with parchment paper.',
      'Toss potato fries with oil, Mexican seasoning, paprika, garlic powder, and salt until evenly coated.',
      'Spread fries in a single layer on the baking sheet. Bake for 25-30 minutes, flipping halfway through, until golden and crispy.',
      'While fries cook, brown ground beef in a skillet over medium-high heat. Drain fat and add taco seasoning with water according to packet directions. Simmer until thickened.',
      'Warm nacho cheese sauce in a small saucepan or microwave.',
      'To assemble: Arrange hot fries on a large plate or platter.',
      'Top with seasoned ground beef, then drizzle generously with nacho cheese sauce.',
      'Sprinkle shredded cheddar cheese over the top.',
      'Add dollops of sour cream, diced tomatoes, jalapeños, olives, and green onions.',
      'Serve immediately while fries are hot and crispy. Provide extra nacho cheese for dipping!'
    ],
    nutrition: {
      calories: 825,
      protein: '35g',
      carbs: '68g',
      fat: '48g',
      fiber: '6g'
    },
    tips: 'For crispier fries, soak cut potatoes in cold water for 30 minutes before baking, then pat completely dry. You can also air fry the potatoes at 400°F for 20 minutes. Make it vegetarian by substituting refried beans for ground beef!'
  },
  {
    id: 4,
    image: '/images/p5.jpeg',
    title: 'BONEFISH GRILLS BANG BANG SHRIMP',
    price: 13.90,
    restaurant: 'Bonefish Grill',
    prepTime: '15 mins',
    cookTime: '10 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'For the Shrimp:',
      '1 lb large shrimp, peeled and deveined',
      '1/2 cup cornstarch',
      '1/2 cup panko breadcrumbs',
      '2 eggs, beaten',
      'Vegetable oil for frying',
      'For the Bang Bang Sauce:',
      '1/2 cup mayonnaise',
      '1/4 cup Thai sweet chili sauce',
      '2 tbsp honey',
      '1 tsp Sriracha sauce (adjust to taste)',
      '1/4 tsp garlic powder',
      'For Serving:',
      'Shredded lettuce',
      'Sliced green onions',
      'Sesame seeds',
      'Lime wedges'
    ],
    instructions: [
      'In a bowl, whisk together all sauce ingredients until smooth. Refrigerate until ready to use.',
      'Pat shrimp dry with paper towels. Season lightly with salt and pepper.',
      'Set up breading station: Place cornstarch in one bowl, beaten eggs in another, and panko breadcrumbs in a third.',
      'Dip each shrimp in cornstarch, then egg, then coat thoroughly in panko breadcrumbs.',
      'Heat 2 inches of oil in a deep skillet to 375°F (190°C).',
      'Fry shrimp in batches for 2-3 minutes until golden brown and crispy. Don\'t overcrowd the pan.',
      'Remove with a slotted spoon and drain on paper towels.',
      'In a large bowl, toss hot fried shrimp with Bang Bang sauce until well coated.',
      'Arrange shredded lettuce on a serving plate. Top with sauced shrimp.',
      'Garnish with sliced green onions, sesame seeds, and serve with lime wedges. Serve immediately while crispy!'
    ],
    nutrition: {
      calories: 425,
      protein: '28g',
      carbs: '38g',
      fat: '18g',
      fiber: '1g'
    },
    tips: 'The secret is the double coating! For extra crispy shrimp, freeze the breaded shrimp for 15 minutes before frying. You can also bake them at 425°F for 12-15 minutes, flipping halfway. Adjust the Sriracha in the sauce to control the heat level.'
  },
  {
    id: 5,
    image: '/images/p6.jpeg',
    title: 'WAFFLE HOUSE WAFFLES',
    price: 2.29,
    restaurant: 'Waffle House',
    prepTime: '10 mins',
    cookTime: '5 mins per waffle',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '2 cups all-purpose flour',
      '1 tbsp sugar',
      '1 tbsp baking powder',
      '1/2 tsp salt',
      '2 eggs, separated',
      '1 3/4 cups milk',
      '1/2 cup vegetable oil',
      '1 tsp vanilla extract',
      'Butter for greasing waffle iron',
      'Butter and syrup for serving'
    ],
    instructions: [
      'Preheat waffle iron to medium-high heat. Lightly grease with butter.',
      'In a large bowl, whisk together flour, sugar, baking powder, and salt.',
      'In a separate bowl, whisk together egg yolks, milk, oil, and vanilla extract.',
      'In another clean bowl, beat egg whites with an electric mixer until stiff peaks form.',
      'Pour the wet ingredients into the dry ingredients and stir until just combined. Don\'t overmix - lumps are okay!',
      'Gently fold in the beaten egg whites until just incorporated. The batter should be light and fluffy.',
      'Pour about 1/2 to 3/4 cup batter onto the center of the hot waffle iron (amount depends on your waffle iron size).',
      'Close lid and cook for 4-5 minutes until golden brown and crispy. Don\'t open too early or the waffle will stick!',
      'Carefully remove waffle and serve immediately with butter and warm syrup.',
      'Repeat with remaining batter, keeping finished waffles warm in a 200°F oven.'
    ],
    nutrition: {
      calories: 485,
      protein: '11g',
      carbs: '54g',
      fat: '25g',
      fiber: '2g'
    },
    tips: 'The secret to fluffy Waffle House waffles is beating the egg whites separately! Don\'t skip this step. For extra crispy waffles, let them cook an extra 30 seconds. These freeze beautifully - just pop them in the toaster to reheat!'
  },
  {
    id: 6,
    image: '/images/p7.jpg',
    title: 'AUNTIE ANNES PRETZELS - COPYCAT',
    price: 5.79,
    restaurant: 'Auntie Anne\'s',
    prepTime: '20 mins + rising',
    cookTime: '15 mins',
    servings: 8,
    difficulty: 'Medium',
    ingredients: [
      'For the Dough:',
      '1 1/2 cups warm water (110°F)',
      '2 tbsp brown sugar',
      '1 packet active dry yeast (2 1/4 tsp)',
      '3 tbsp melted butter',
      '1 tsp salt',
      '4 to 4 1/2 cups all-purpose flour',
      'For the Bath:',
      '9 cups water',
      '1/2 cup baking soda',
      'For the Topping:',
      '4 tbsp melted butter',
      'Coarse salt or cinnamon sugar'
    ],
    instructions: [
      'In a large bowl, combine warm water, brown sugar, and yeast. Let sit for 5 minutes until foamy.',
      'Add melted butter, salt, and 3 cups of flour. Mix until combined. Gradually add remaining flour until dough is soft and slightly sticky.',
      'Knead dough on a floured surface for 5-7 minutes until smooth and elastic.',
      'Place dough in a greased bowl, cover with a damp towel, and let rise in a warm place for 1 hour until doubled in size.',
      'Preheat oven to 425°F (220°C). Line two baking sheets with parchment paper.',
      'Punch down dough and divide into 8 equal pieces. Roll each piece into a 24-inch rope.',
      'Shape into pretzels: Form a U-shape, cross the ends, twist once, then press ends onto the bottom of the U.',
      'In a large pot, bring 9 cups water and baking soda to a boil. Carefully drop pretzels one at a time into the boiling water for 30 seconds.',
      'Remove with a slotted spoon and place on prepared baking sheets. Brush with melted butter and sprinkle with coarse salt.',
      'Bake for 12-15 minutes until deep golden brown. Brush with more butter immediately after removing from oven.',
      'For cinnamon sugar pretzels: Mix 1/2 cup sugar with 2 tsp cinnamon and toss warm pretzels in the mixture.'
    ],
    nutrition: {
      calories: 285,
      protein: '7g',
      carbs: '52g',
      fat: '6g',
      fiber: '2g'
    },
    tips: 'The baking soda bath is crucial for that authentic pretzel taste and color! Make sure your water is warm (not hot) for the yeast. These are best fresh from the oven but can be reheated in a 350°F oven for 5 minutes. Serve with cheese sauce or honey mustard!'
  },
  {
    id: 7,
    image: '/images/p8.jpeg',
    title: 'COPYCAT KFC COLESLAW: THE REAL THING',
    price: 6.87,
    restaurant: 'KFC',
    prepTime: '15 mins + chilling',
    cookTime: '0 mins',
    servings: 8,
    difficulty: 'Easy',
    ingredients: [
      '8 cups finely chopped green cabbage (about 1 medium head)',
      '1/4 cup shredded carrot',
      '2 tbsp minced onion',
      'For the Dressing:',
      '1/3 cup sugar',
      '1/2 tsp salt',
      '1/8 tsp black pepper',
      '1/4 cup milk',
      '1/2 cup mayonnaise',
      '1/4 cup buttermilk',
      '1 1/2 tbsp white vinegar',
      '2 1/2 tbsp lemon juice'
    ],
    instructions: [
      'Finely chop cabbage into very small pieces - the smaller the better for authentic KFC texture. You can use a food processor with a pulse function.',
      'Shred carrot using a box grater or food processor.',
      'Mince onion very finely.',
      'In a large bowl, combine chopped cabbage, shredded carrot, and minced onion.',
      'In a separate bowl, whisk together sugar, salt, and pepper until sugar begins to dissolve.',
      'Add milk, mayonnaise, buttermilk, vinegar, and lemon juice. Whisk until smooth and creamy.',
      'Pour dressing over cabbage mixture and toss until thoroughly combined.',
      'Cover and refrigerate for at least 4 hours, or preferably overnight. This allows the flavors to meld and the cabbage to soften slightly.',
      'Before serving, drain any excess liquid that has accumulated and stir well.',
      'Taste and adjust seasoning if needed. Serve cold as a side dish.'
    ],
    nutrition: {
      calories: 145,
      protein: '2g',
      carbs: '14g',
      fat: '10g',
      fiber: '2g'
    },
    tips: 'The secret to KFC coleslaw is the very finely chopped cabbage and the overnight rest! Don\'t skip the chilling time - it really makes a difference. If you can\'t find buttermilk, make your own by adding 1 tbsp lemon juice to 1/4 cup regular milk and letting it sit for 5 minutes.'
  }
];

// Render products
document.querySelector("#root").innerHTML = product.map((item, i) => {
  const { image, title, price, restaurant } = item;
  return `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src='${image}' alt='${title}'></img>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <div class='price-badge'>
          <h2>$ ${price.toFixed(2)}</h2>
          <span class='restaurant-badge'>${restaurant}</span>
        </div>
        <div class='button-group'>
          <button class='add-to-cart-btn' onClick='addtocart(${i})'>
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
          <button class='view-recipe-btn' onClick='viewRecipe(${i})'>
            <i class="fa-solid fa-book"></i> Recipe
          </button>
        </div>
      </div>
    </div>`;
}).join('');

// Add to cart function
function addtocart(i) {
  const p = product[i];
  addToCart({
    id: "copycat-" + p.id,
    title: p.title,
    price: p.price,
    image: p.image
  });
}

// View recipe function
function viewRecipe(i) {
  const recipe = product[i];
  const modal = document.getElementById('recipeModal');
  const recipeDetails = document.getElementById('recipeDetails');
  
  recipeDetails.innerHTML = `
    <div class='recipe-header'>
      <h2>${recipe.title}</h2>
      <span class='restaurant-tag'>Copycat: ${recipe.restaurant}</span>
      <div class='recipe-meta'>
        <div class='meta-item'>
          <i class="fa-solid fa-clock"></i>
          <span><strong>Prep:</strong> ${recipe.prepTime}</span>
        </div>
        <div class='meta-item'>
          <i class="fa-solid fa-fire"></i>
          <span><strong>Cook:</strong> ${recipe.cookTime}</span>
        </div>
        <div class='meta-item'>
          <i class="fa-solid fa-utensils"></i>
          <span><strong>Servings:</strong> ${recipe.servings}</span>
        </div>
        <div class='meta-item'>
          <i class="fa-solid fa-signal"></i>
          <span><strong>Level:</strong> ${recipe.difficulty}</span>
        </div>
      </div>
    </div>
    
    <div class='recipe-section'>
      <h3><i class="fa-solid fa-list"></i> Ingredients</h3>
      <ul class='ingredients-list'>
        ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
      </ul>
    </div>
    
    <div class='recipe-section'>
      <h3><i class="fa-solid fa-clipboard-list"></i> Instructions</h3>
      <ol class='instructions-list'>
        ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
      </ol>
    </div>
    
    <div class='recipe-section'>
      <h3><i class="fa-solid fa-chart-pie"></i> Nutrition Information (per serving)</h3>
      <div class='nutrition-info'>
        <div class='nutrition-item'>
          <strong>${recipe.nutrition.calories}</strong>
          <span>Calories</span>
        </div>
        <div class='nutrition-item'>
          <strong>${recipe.nutrition.protein}</strong>
          <span>Protein</span>
        </div>
        <div class='nutrition-item'>
          <strong>${recipe.nutrition.carbs}</strong>
          <span>Carbs</span>
        </div>
        <div class='nutrition-item'>
          <strong>${recipe.nutrition.fat}</strong>
          <span>Fat</span>
        </div>
        <div class='nutrition-item'>
          <strong>${recipe.nutrition.fiber}</strong>
          <span>Fiber</span>
        </div>
      </div>
    </div>
    
    <div class='tips-section'>
      <h4><i class="fa-solid fa-lightbulb"></i> Secret Tips & Tricks</h4>
      <p>${recipe.tips}</p>
    </div>
  `;
  
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
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
});