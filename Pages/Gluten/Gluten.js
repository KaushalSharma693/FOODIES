const product = [
  {
    id: 0,
    image: '/images/g1.jpg',
    title: 'THAI CHICKEN NOODLE SALAD (GLUTEN FREE)',
    price: 4.18,
    cookTime: '25 minutes',
    servings: '4 servings',
    difficulty: 'Easy',
    ingredients: [
      '8 oz rice noodles (gluten-free)',
      '2 cups cooked chicken breast, shredded',
      '2 cups shredded red cabbage',
      '1 cup shredded carrots',
      '1 red bell pepper, thinly sliced',
      '1 cup edamame, shelled',
      '1/4 cup fresh cilantro, chopped',
      '1/4 cup fresh mint, chopped',
      '1/4 cup crushed peanuts',
      'For Dressing: 3 tbsp tamari or gluten-free soy sauce, 2 tbsp lime juice, 2 tbsp rice vinegar, 1 tbsp honey, 1 tbsp sesame oil, 1 clove garlic minced, 1 tsp fresh ginger grated, 1 tsp sriracha'
    ],
    instructions: [
      'Cook rice noodles according to package directions. Drain and rinse with cold water. Set aside.',
      'In a large bowl, combine shredded chicken, red cabbage, carrots, bell pepper, and edamame.',
      'In a small bowl, whisk together all dressing ingredients: tamari, lime juice, rice vinegar, honey, sesame oil, garlic, ginger, and sriracha until well combined.',
      'Add the cooled rice noodles to the bowl with vegetables and chicken.',
      'Pour the dressing over the salad and toss everything together until evenly coated.',
      'Add fresh cilantro and mint, tossing gently to incorporate.',
      'Divide salad among serving bowls and top with crushed peanuts. Serve immediately or chill for 30 minutes for flavors to meld.'
    ],
    tips: 'Make sure to use certified gluten-free tamari or soy sauce. This salad is perfect for meal prep - store the dressing separately and add just before serving to keep the noodles from getting soggy. You can substitute chicken with tofu or shrimp for variety. For extra crunch, add sliced cucumbers or bean sprouts.'
  },
  {
    id: 1,
    image: '/images/g2.webp',
    title: 'GLUTEN-FREE PIZZA CRUST',
    price: 3.79,
    cookTime: '30 minutes',
    servings: '1 large pizza (8 slices)',
    difficulty: 'Medium',
    ingredients: [
      '1½ cups gluten-free all-purpose flour blend',
      '½ cup tapioca flour',
      '2 teaspoons instant yeast',
      '2 teaspoons sugar',
      '1 teaspoon salt',
      '1 teaspoon xanthan gum (if not in your flour blend)',
      '1 teaspoon Italian seasoning',
      '¾ cup warm water (110°F)',
      '2 tablespoons olive oil',
      '1 teaspoon apple cider vinegar',
      'Additional olive oil for brushing'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C). Line a pizza pan or baking sheet with parchment paper and lightly oil it.',
      'In a large bowl, whisk together gluten-free flour, tapioca flour, yeast, sugar, salt, xanthan gum, and Italian seasoning.',
      'In a separate bowl, combine warm water, olive oil, and apple cider vinegar.',
      'Pour wet ingredients into dry ingredients and mix with a spoon until combined, then knead with your hands for about 2 minutes. The dough will be softer and stickier than regular pizza dough.',
      'Place dough on the prepared parchment paper. Wet your hands and press the dough out into a 12-inch circle, about ¼ inch thick.',
      'Brush the crust with olive oil and use a fork to poke holes all over to prevent bubbling.',
      'Pre-bake the crust for 10-12 minutes until it starts to firm up and edges are lightly golden.',
      'Remove from oven, add your favorite toppings, and bake for another 12-15 minutes until cheese is melted and bubbly. Let cool for 5 minutes before slicing.'
    ],
    tips: 'The key to great gluten-free pizza is pre-baking the crust! This prevents it from getting soggy. Make sure your water is warm but not hot (around 110°F) to activate the yeast properly. You can make the dough ahead and refrigerate for up to 24 hours. For a crispier crust, bake on a preheated pizza stone.'
  },
  {
    id: 2,
    image: '/images/g3.jpeg',
    title: 'BAKED POTATOES CASSEROLE',
    price: 36.99,
    cookTime: '1 hour 15 minutes',
    servings: '8-10 servings',
    difficulty: 'Easy',
    ingredients: [
      '3 lbs russet potatoes, peeled and diced',
      '1 cup sour cream',
      '1 cup shredded cheddar cheese',
      '½ cup butter, melted',
      '½ cup milk',
      '1 packet ranch seasoning mix (ensure gluten-free)',
      '6 strips bacon, cooked and crumbled',
      '3 green onions, sliced',
      '1 teaspoon garlic powder',
      'Salt and pepper to taste',
      'Additional ½ cup cheddar cheese for topping'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease a 9x13 inch baking dish.',
      'Place diced potatoes in a large pot and cover with cold water. Add a pinch of salt. Bring to a boil and cook for 15-18 minutes until fork-tender.',
      'Drain potatoes well and return to pot. Add melted butter and mash until mostly smooth (some chunks are fine).',
      'Stir in sour cream, milk, 1 cup cheddar cheese, ranch seasoning, garlic powder, salt, and pepper. Mix until well combined.',
      'Fold in half of the crumbled bacon and half of the green onions.',
      'Transfer mixture to the prepared baking dish and spread evenly.',
      'Top with remaining ½ cup cheddar cheese, remaining bacon, and green onions.',
      'Bake for 30-35 minutes until heated through and cheese is melted and bubbly. Let stand for 5 minutes before serving.'
    ],
    tips: 'This hearty casserole is naturally gluten-free - just ensure your ranch seasoning is certified gluten-free. You can make this ahead and refrigerate overnight; just add 10 extra minutes to baking time if cooking from cold. For a lighter version, use Greek yogurt instead of sour cream and turkey bacon. Add jalapeños for a spicy kick!'
  },
  {
    id: 3,
    image: '/images/g4.webp',
    title: 'GLUTEN FREE WAFFLES',
    price: 15.00,
    cookTime: '20 minutes',
    servings: '6 waffles',
    difficulty: 'Easy',
    ingredients: [
      '2 cups gluten-free all-purpose flour blend',
      '2 tablespoons sugar',
      '1 tablespoon baking powder',
      '½ teaspoon salt',
      '½ teaspoon xanthan gum (if not in flour blend)',
      '2 large eggs',
      '1¾ cups milk',
      '½ cup vegetable oil or melted butter',
      '1 teaspoon vanilla extract',
      'Cooking spray for waffle iron'
    ],
    instructions: [
      'Preheat your waffle iron according to manufacturer\'s instructions.',
      'In a large bowl, whisk together gluten-free flour, sugar, baking powder, salt, and xanthan gum.',
      'In a separate bowl, beat eggs. Add milk, oil (or melted butter), and vanilla extract. Whisk until well combined.',
      'Pour wet ingredients into dry ingredients and stir until just combined. The batter will be slightly lumpy - don\'t overmix.',
      'Let batter rest for 5 minutes. This allows the flour to absorb liquid and results in crispier waffles.',
      'Spray waffle iron with cooking spray. Pour appropriate amount of batter onto the hot waffle iron (amount depends on your waffle maker size).',
      'Close lid and cook until golden brown and crispy, about 3-5 minutes depending on your waffle iron.',
      'Carefully remove waffle and repeat with remaining batter. Serve immediately with your favorite toppings like maple syrup, fresh berries, or whipped cream.'
    ],
    tips: 'For extra crispy waffles, don\'t open the waffle iron too early - wait until steam stops escaping. These waffles freeze beautifully! Cool completely, then freeze in a single layer before storing in freezer bags. Reheat in a toaster for quick breakfasts. You can add chocolate chips, blueberries, or cinnamon to the batter for variety.'
  },
  {
    id: 4,
    image: '/images/g5.webp',
    title: 'GLUTEN-FREE PANCAKES',
    price: 11.00,
    cookTime: '20 minutes',
    servings: '12 pancakes',
    difficulty: 'Easy',
    ingredients: [
      '1½ cups gluten-free all-purpose flour',
      '2 tablespoons sugar',
      '2 teaspoons baking powder',
      '½ teaspoon baking soda',
      '½ teaspoon salt',
      '½ teaspoon xanthan gum (if not in flour)',
      '2 large eggs',
      '1¼ cups buttermilk',
      '3 tablespoons melted butter',
      '1 teaspoon vanilla extract',
      'Butter or oil for cooking'
    ],
    instructions: [
      'In a large bowl, whisk together gluten-free flour, sugar, baking powder, baking soda, salt, and xanthan gum.',
      'In another bowl, beat eggs. Add buttermilk, melted butter, and vanilla extract. Mix well.',
      'Pour wet ingredients into dry ingredients and stir until just combined. Some lumps are okay - don\'t overmix or pancakes will be tough.',
      'Let batter rest for 5-10 minutes. This helps achieve fluffy pancakes.',
      'Heat a griddle or large skillet over medium heat. Lightly grease with butter or oil.',
      'Pour ¼ cup of batter for each pancake onto the hot griddle. Cook until bubbles form on the surface and edges look set, about 2-3 minutes.',
      'Flip pancakes and cook for another 1-2 minutes until golden brown on the bottom.',
      'Transfer to a plate and keep warm. Repeat with remaining batter. Serve hot with maple syrup, fresh fruit, or your favorite toppings.'
    ],
    tips: 'The secret to fluffy gluten-free pancakes is not overmixing the batter and letting it rest. If you don\'t have buttermilk, make your own by adding 1 tablespoon of lemon juice or vinegar to regular milk and letting it sit for 5 minutes. These pancakes are best served fresh but can be frozen between layers of parchment paper and reheated in a toaster.'
  },
  {
    id: 5,
    image: '/images/g6.webp',
    title: 'BUTTERNUT SQUASH AND CAULIFLOWER SOUP',
    price: 8.95,
    cookTime: '45 minutes',
    servings: '6 servings',
    difficulty: 'Easy',
    ingredients: [
      '1 medium butternut squash (about 2 lbs), peeled and cubed',
      '1 head cauliflower, cut into florets',
      '1 large onion, diced',
      '3 cloves garlic, minced',
      '4 cups vegetable or chicken broth (ensure gluten-free)',
      '1 cup coconut milk or heavy cream',
      '2 tablespoons olive oil',
      '1 teaspoon ground cumin',
      '½ teaspoon smoked paprika',
      '¼ teaspoon nutmeg',
      'Salt and pepper to taste',
      'Fresh thyme or parsley for garnish',
      'Roasted pumpkin seeds for garnish (optional)'
    ],
    instructions: [
      'Heat olive oil in a large pot over medium heat. Add diced onion and cook until softened, about 5 minutes.',
      'Add minced garlic and cook for another minute until fragrant.',
      'Add cubed butternut squash and cauliflower florets to the pot. Stir to coat with oil.',
      'Add cumin, smoked paprika, nutmeg, salt, and pepper. Stir well.',
      'Pour in the broth and bring to a boil. Reduce heat, cover, and simmer for 25-30 minutes until vegetables are very tender.',
      'Remove from heat and use an immersion blender to puree the soup until smooth. Alternatively, carefully transfer to a blender in batches.',
      'Stir in coconut milk or heavy cream. Taste and adjust seasonings as needed.',
      'Reheat gently if needed. Serve hot, garnished with fresh herbs and pumpkin seeds if desired.'
    ],
    tips: 'This naturally gluten-free soup is perfect for fall and winter! Roasting the butternut squash and cauliflower at 400°F for 25 minutes before adding to the pot will deepen the flavor even more. The soup freezes well for up to 3 months. For a vegan version, use vegetable broth and coconut milk. Add a drizzle of olive oil and crispy sage leaves for an elegant presentation.'
  },
  {
    id: 6,
    image: '/images/g7.webp',
    title: 'LOW CARB TACO BAKE',
    price: 11.79,
    cookTime: '40 minutes',
    servings: '6 servings',
    difficulty: 'Easy',
    ingredients: [
      '1.5 lbs ground beef or turkey',
      '1 packet taco seasoning (ensure gluten-free)',
      '1 can (4 oz) diced green chilies',
      '1 cup salsa (gluten-free)',
      '8 oz cream cheese, softened',
      '1 cup sour cream',
      '2 cups shredded Mexican cheese blend',
      '1 can (4 oz) sliced black olives',
      '4 green onions, sliced',
      '1 medium tomato, diced',
      '1 cup shredded lettuce',
      'Optional: jalapeños, avocado, cilantro'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease a 9x13 inch baking dish.',
      'In a large skillet over medium-high heat, brown the ground beef or turkey, breaking it up as it cooks. Drain excess fat.',
      'Add taco seasoning and ¼ cup water to the meat. Stir and cook for 2-3 minutes. Remove from heat.',
      'In a bowl, mix softened cream cheese, sour cream, and diced green chilies until smooth.',
      'Spread the cream cheese mixture evenly in the bottom of the prepared baking dish.',
      'Layer the seasoned meat over the cream cheese layer. Spread salsa over the meat.',
      'Top with shredded cheese and sliced olives.',
      'Bake for 25-30 minutes until hot and bubbly and cheese is melted.',
      'Remove from oven and top with fresh lettuce, tomatoes, green onions, and any other desired toppings. Serve immediately.'
    ],
    tips: 'This low-carb, gluten-free taco bake is a family favorite! The cream cheese layer makes it incredibly creamy and delicious. Serve with tortilla chips or lettuce wraps. You can prep this ahead - assemble everything except the fresh toppings, cover, and refrigerate for up to 24 hours. Add 5-10 minutes to baking time if cooking from cold. Ground chicken also works great in this recipe.'
  },
  {
    id: 7,
    image: '/images/g8.webp',
    title: 'GLUTEN-FREE FLOUR TORTILLAS',
    price: 16.87,
    cookTime: '45 minutes',
    servings: '10 tortillas',
    difficulty: 'Medium',
    ingredients: [
      '2 cups gluten-free all-purpose flour',
      '1 teaspoon xanthan gum (if not in flour blend)',
      '1 teaspoon salt',
      '1 teaspoon baking powder',
      '⅓ cup shortening or lard',
      '¾ cup warm water',
      'Additional flour for dusting'
    ],
    instructions: [
      'In a large bowl, whisk together gluten-free flour, xanthan gum, salt, and baking powder.',
      'Add shortening or lard and use a pastry cutter or your fingers to work it into the flour until the mixture resembles coarse crumbs.',
      'Gradually add warm water, stirring with a fork, then kneading with your hands until a soft dough forms. The dough should be pliable but not sticky.',
      'Divide dough into 10 equal pieces and roll each into a ball. Cover with a damp towel and let rest for 15 minutes.',
      'Heat a dry skillet or griddle over medium-high heat.',
      'On a surface dusted with gluten-free flour, roll each ball into a thin 7-8 inch circle. Use plenty of flour to prevent sticking.',
      'Carefully transfer tortilla to the hot, dry skillet. Cook for about 30-45 seconds until bubbles form and bottom has light brown spots.',
      'Flip and cook the other side for another 30-45 seconds. The tortilla should be flexible with some golden spots.',
      'Transfer to a plate and cover with a clean kitchen towel to keep warm and soft. Repeat with remaining dough balls.',
      'Use immediately or store in an airtight container for up to 3 days. Reheat briefly on a dry skillet before using.'
    ],
    tips: 'The secret to pliable gluten-free tortillas is getting the right consistency - the dough should be soft but not sticky. Roll them as thin as possible for best results. These tortillas are best fresh but can be frozen between layers of parchment paper for up to 3 months. To keep them soft, stack them and wrap in a clean towel immediately after cooking. Perfect for tacos, quesadillas, or wraps!'
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
    id: "gluten-" + p.id,
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