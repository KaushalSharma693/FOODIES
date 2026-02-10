const product = [
  {
    id: 0,
    image: '/images/e1.webp',
    title: 'CARROT CAKE',
    price: 7.40,
    category: 'Dessert',
    prepTime: '30 mins',
    cookTime: '50 mins',
    servings: 12,
    difficulty: 'Medium',
    ingredients: [
      'For the Cake:',
      '2 cups all-purpose flour',
      '2 tsp baking soda',
      '2 tsp cinnamon',
      '1/2 tsp salt',
      '1/2 tsp nutmeg',
      '3 cups grated carrots',
      '1 1/2 cups vegetable oil',
      '2 cups sugar',
      '4 large eggs',
      '1 cup crushed pineapple, drained',
      '1 cup chopped walnuts',
      'For the Cream Cheese Frosting:',
      '16 oz cream cheese, softened',
      '1/2 cup butter, softened',
      '4 cups powdered sugar',
      '2 tsp vanilla extract',
      'Chopped walnuts for decoration'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
      'In a bowl, whisk together flour, baking soda, cinnamon, salt, and nutmeg.',
      'In a large bowl, beat together oil, sugar, and eggs until well combined.',
      'Gradually stir the dry ingredients into the wet ingredients until just combined.',
      'Fold in grated carrots, crushed pineapple, and chopped walnuts.',
      'Divide batter evenly between prepared pans.',
      'Bake for 45-50 minutes until a toothpick inserted in the center comes out clean.',
      'Cool in pans for 10 minutes, then turn out onto wire racks to cool completely.',
      'For the frosting: Beat cream cheese and butter until fluffy. Gradually add powdered sugar and vanilla, beating until smooth.',
      'Place one cake layer on a serving plate. Spread with frosting, then top with second layer.',
      'Frost top and sides of cake. Decorate with additional walnuts.',
      'Refrigerate for at least 1 hour before serving for best results.'
    ],
    nutrition: {
      calories: 625,
      protein: '7g',
      carbs: '75g',
      fat: '35g',
      fiber: '2g'
    },
    tips: 'For the moistest carrot cake, use freshly grated carrots and don\'t skip the pineapple - it adds amazing moisture! This cake actually tastes better the next day as the flavors meld. Store covered in the refrigerator for up to 5 days. Perfect for Easter brunch!'
  },
  {
    id: 1,
    image: '/images/e2.webp',
    title: 'DEVILED EGGS WITH LEMON',
    price: 18.00,
    category: 'Appetizer',
    prepTime: '20 mins',
    cookTime: '12 mins',
    servings: 12,
    difficulty: 'Easy',
    ingredients: [
      '12 large eggs',
      '1/3 cup mayonnaise',
      '2 tsp Dijon mustard',
      '2 tsp fresh lemon juice',
      '1 tsp lemon zest',
      '1/4 tsp salt',
      '1/8 tsp black pepper',
      '1/8 tsp cayenne pepper (optional)',
      'Paprika for garnish',
      'Fresh dill or chives for garnish',
      'Capers for garnish (optional)'
    ],
    instructions: [
      'Place eggs in a single layer in a saucepan and cover with water by 1 inch. Bring to a boil over high heat.',
      'Once boiling, remove from heat, cover, and let stand for 12 minutes.',
      'Transfer eggs to an ice bath and let cool for 5 minutes.',
      'Peel eggs under cool running water. Pat dry.',
      'Slice eggs in half lengthwise. Carefully remove yolks and place in a bowl.',
      'Mash yolks with a fork until smooth.',
      'Add mayonnaise, Dijon mustard, lemon juice, lemon zest, salt, pepper, and cayenne. Mix until creamy and smooth.',
      'Taste and adjust seasonings if needed.',
      'Spoon or pipe yolk mixture into egg white halves.',
      'Garnish with a light sprinkle of paprika and fresh dill or chives.',
      'Refrigerate for at least 30 minutes before serving.',
      'Serve chilled. Can be made up to 1 day ahead.'
    ],
    nutrition: {
      calories: 85,
      protein: '6g',
      carbs: '1g',
      fat: '7g',
      fiber: '0g'
    },
    tips: 'The lemon adds a bright, fresh twist to classic deviled eggs - perfect for spring! For the creamiest filling, use room temperature eggs and press the yolk mixture through a fine-mesh sieve. To pipe perfectly, use a piping bag with a star tip. These are a must-have at any Easter gathering!'
  },
  {
    id: 2,
    image: '/images/e3.webp',
    title: 'ITALIAN EASTER EGG BASKET',
    price: 4.11,
    category: 'Bread',
    prepTime: '30 mins + rising',
    cookTime: '35 mins',
    servings: 8,
    difficulty: 'Medium',
    ingredients: [
      '4 cups all-purpose flour',
      '1/2 cup sugar',
      '1 packet active dry yeast',
      '1/2 cup warm milk',
      '1/2 cup butter, melted',
      '3 eggs, beaten',
      '1 tsp vanilla extract',
      '1/2 tsp salt',
      'Zest of 1 lemon',
      '6 raw colored eggs (uncooked)',
      '1 egg, beaten (for egg wash)',
      'Colored sprinkles for decoration'
    ],
    instructions: [
      'In a small bowl, dissolve yeast in warm milk. Let stand for 5 minutes until foamy.',
      'In a large bowl, combine flour, sugar, and salt.',
      'Add yeast mixture, melted butter, beaten eggs, vanilla, and lemon zest. Mix until dough forms.',
      'Knead on a floured surface for 8-10 minutes until smooth and elastic.',
      'Place in a greased bowl, cover, and let rise in a warm place for 1.5 hours until doubled.',
      'Punch down dough and divide into 8 equal pieces.',
      'Roll each piece into a 24-inch rope. Form into a circle, creating a nest shape with a center well.',
      'Place on parchment-lined baking sheets. Nestle one raw colored egg in the center of each basket.',
      'Cover and let rise for 30 minutes.',
      'Preheat oven to 350°F (175°C).',
      'Brush baskets with egg wash and sprinkle with colored sprinkles.',
      'Bake for 30-35 minutes until golden brown. The eggs will cook in the oven!',
      'Cool completely before serving. These are traditionally given as gifts on Easter morning.'
    ],
    nutrition: {
      calories: 385,
      protein: '11g',
      carbs: '58g',
      fat: '13g',
      fiber: '2g'
    },
    tips: 'This beautiful Italian tradition makes stunning Easter centerpieces! Use food coloring to dye the raw eggs before baking, or use naturally dyed eggs. The eggs cook perfectly in the oven as the bread bakes. Kids absolutely love these! Serve for Easter breakfast or give as festive gifts.'
  },
  {
    id: 3,
    image: '/images/e4.webp',
    title: 'SPRING GREEN RISOTTO, INAS WAY',
    price: 14.33,
    category: 'Main Course',
    prepTime: '20 mins',
    cookTime: '35 mins',
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      '6 cups chicken or vegetable broth',
      '3 tbsp olive oil',
      '2 tbsp butter',
      '1 cup chopped leeks (white and light green parts)',
      '2 cups Arborio rice',
      '1/2 cup dry white wine',
      '1 cup fresh or frozen peas',
      '1 cup asparagus, cut into 1-inch pieces',
      '1 cup baby spinach',
      '1/2 cup fresh basil, chopped',
      '1 cup grated Parmesan cheese',
      '1 tsp lemon zest',
      '2 tbsp lemon juice',
      'Salt and pepper to taste',
      'Extra Parmesan for serving'
    ],
    instructions: [
      'Heat broth in a saucepan and keep warm over low heat.',
      'In a large heavy-bottomed pot, heat olive oil and 1 tbsp butter over medium heat.',
      'Add leeks and cook until softened, about 5 minutes.',
      'Add Arborio rice and stir for 2-3 minutes until lightly toasted.',
      'Pour in white wine and stir until absorbed.',
      'Add warm broth one ladle at a time, stirring constantly. Wait until each addition is absorbed before adding more.',
      'After about 15 minutes, add peas and asparagus. Continue adding broth and stirring.',
      'When rice is creamy and al dente (about 25-30 minutes total), remove from heat.',
      'Stir in spinach, basil, remaining butter, Parmesan, lemon zest, and lemon juice.',
      'Season with salt and pepper to taste.',
      'Let rest for 2 minutes, then serve immediately.',
      'Garnish with extra Parmesan and fresh basil. The risotto should be creamy and flow slightly on the plate.'
    ],
    nutrition: {
      calories: 385,
      protein: '14g',
      carbs: '62g',
      fat: '12g',
      fiber: '4g'
    },
    tips: 'The key to perfect risotto is patience and constant stirring! The wine adds depth, while the spring vegetables and lemon make this perfect for Easter. For vegetarian version, use vegetable broth. This dish is best served immediately as it continues to absorb liquid as it sits. Elegant enough for company, delicious enough for family!'
  },
  {
    id: 4,
    image: '/images/e5.webp',
    title: 'DANISH EASTER CAKE',
    price: 15.00,
    category: 'Dessert',
    prepTime: '25 mins',
    cookTime: '45 mins',
    servings: 10,
    difficulty: 'Medium',
    ingredients: [
      'For the Cake:',
      '2 1/4 cups all-purpose flour',
      '2 1/2 tsp baking powder',
      '1/2 tsp salt',
      '3/4 cup butter, softened',
      '1 3/4 cups sugar',
      '4 large eggs',
      '1 tsp vanilla extract',
      '1 tsp almond extract',
      '1 cup milk',
      'For the Topping:',
      '1/2 cup sliced almonds',
      '2 tbsp sugar',
      '1 tsp cinnamon',
      'For the Glaze:',
      '1 1/2 cups powdered sugar',
      '3 tbsp milk',
      '1/2 tsp almond extract',
      'Pastel-colored sprinkles or small eggs for decoration'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease and flour a 9x13 inch baking pan.',
      'In a bowl, whisk together flour, baking powder, and salt.',
      'In a large bowl, cream butter and sugar until light and fluffy, about 3 minutes.',
      'Add eggs one at a time, beating well after each addition. Stir in vanilla and almond extracts.',
      'Alternately add flour mixture and milk to the butter mixture, beginning and ending with flour. Mix until just combined.',
      'Pour batter into prepared pan and spread evenly.',
      'Mix almonds, sugar, and cinnamon. Sprinkle over the top of the batter.',
      'Bake for 40-45 minutes until a toothpick inserted in center comes out clean.',
      'Cool in pan for 15 minutes, then turn out onto a wire rack to cool completely.',
      'For the glaze: Whisk together powdered sugar, milk, and almond extract until smooth.',
      'Drizzle glaze over cooled cake.',
      'Decorate with pastel sprinkles or small candy eggs while glaze is still wet.',
      'Let glaze set for 30 minutes before serving.'
    ],
    nutrition: {
      calories: 485,
      protein: '7g',
      carbs: '68g',
      fat: '21g',
      fiber: '1g'
    },
    tips: 'This traditional Danish Easter cake is light, almond-flavored, and beautifully festive! The almond topping adds a delightful crunch. For extra Danish authenticity, serve with fresh whipped cream and strawberries. This cake stays moist for several days when stored in an airtight container.'
  },
  {
    id: 5,
    image: '/images/e6.webp',
    title: 'SOUTHERN SWEET ICED TEA',
    price: 7.88,
    category: 'Beverage',
    prepTime: '10 mins',
    cookTime: '5 mins',
    servings: 8,
    difficulty: 'Easy',
    ingredients: [
      '8 cups water, divided',
      '6-8 black tea bags (family size or regular)',
      '1 cup sugar (adjust to taste)',
      '1/4 tsp baking soda (secret ingredient!)',
      '1 lemon, sliced',
      'Fresh mint leaves',
      'Ice cubes for serving'
    ],
    instructions: [
      'Bring 4 cups of water to a rolling boil in a large pot.',
      'Remove from heat and add tea bags. Let steep for 5-7 minutes.',
      'Remove tea bags, squeezing gently to extract flavor.',
      'Stir in sugar and baking soda while the tea is still hot. The baking soda reduces bitterness!',
      'Add remaining 4 cups of cold water to dilute and cool the tea.',
      'Pour into a large pitcher.',
      'Add lemon slices and fresh mint leaves.',
      'Refrigerate for at least 2 hours until well chilled.',
      'Serve over ice in tall glasses.',
      'Garnish each glass with a lemon wedge and sprig of fresh mint.',
      'Adjust sweetness by adding more sugar or water to taste.'
    ],
    nutrition: {
      calories: 100,
      protein: '0g',
      carbs: '26g',
      fat: '0g',
      fiber: '0g'
    },
    tips: 'The baking soda is the secret to smooth, never-bitter sweet tea! For a lighter version, reduce sugar to 1/2 cup. You can also use a sugar substitute. This refreshing drink is perfect for Easter brunch or dinner. Make a day ahead for best flavor. Try adding fresh peach slices or strawberries for a fruity twist!'
  },
  {
    id: 6,
    image: '/images/e7.webp',
    title: 'SALMON PATTIES',
    price: 6.20,
    category: 'Main Course',
    prepTime: '15 mins',
    cookTime: '15 mins',
    servings: 6,
    difficulty: 'Easy',
    ingredients: [
      '2 cans (14.75 oz each) salmon, drained',
      '1/2 cup breadcrumbs',
      '1/2 cup finely diced onion',
      '1/4 cup finely diced celery',
      '2 large eggs, beaten',
      '2 tbsp mayonnaise',
      '1 tbsp Dijon mustard',
      '1 tbsp fresh lemon juice',
      '1 tsp Old Bay seasoning',
      '1/4 tsp black pepper',
      '2 tbsp fresh parsley, chopped',
      '1/4 cup vegetable oil for frying',
      'Lemon wedges for serving',
      'Tartar sauce or aioli for serving'
    ],
    instructions: [
      'Remove any bones and skin from salmon, then flake into a large bowl.',
      'Add breadcrumbs, onion, celery, eggs, mayonnaise, mustard, lemon juice, Old Bay, pepper, and parsley.',
      'Mix gently until well combined. The mixture should hold together when pressed.',
      'Form mixture into 6 equal patties, about 3/4 inch thick.',
      'Refrigerate patties for 15 minutes to help them hold together during cooking.',
      'Heat oil in a large skillet over medium heat.',
      'Carefully place patties in the hot oil, working in batches if needed.',
      'Cook for 4-5 minutes per side until golden brown and crispy.',
      'Drain on paper towels.',
      'Serve hot with lemon wedges and tartar sauce or aioli.',
      'Perfect for Easter lunch served with spring salad and roasted asparagus.'
    ],
    nutrition: {
      calories: 285,
      protein: '24g',
      carbs: '12g',
      fat: '16g',
      fiber: '1g'
    },
    tips: 'For extra crispy patties, coat them in additional breadcrumbs before frying. You can also bake these at 425°F for 20 minutes, flipping halfway through. Salmon is traditional for Easter in many cultures and these patties are a delicious, budget-friendly way to serve it. Make them mini-sized for appetizers!'
  },
  {
    id: 7,
    image: '/images/e8.webp',
    title: 'GREAT EASY CREPES',
    price: 8.49,
    category: 'Breakfast',
    prepTime: '10 mins + resting',
    cookTime: '20 mins',
    servings: 8,
    difficulty: 'Easy',
    ingredients: [
      '1 1/2 cups all-purpose flour',
      '2 tbsp sugar',
      '1/2 tsp salt',
      '2 cups milk',
      '4 large eggs',
      '3 tbsp butter, melted',
      '1 tsp vanilla extract',
      'Butter for cooking',
      'For Serving:',
      'Fresh berries',
      'Whipped cream',
      'Nutella or jam',
      'Powdered sugar',
      'Lemon wedges',
      'Maple syrup'
    ],
    instructions: [
      'In a blender, combine flour, sugar, salt, milk, eggs, melted butter, and vanilla. Blend until completely smooth.',
      'Let batter rest for at least 30 minutes (or up to overnight in the refrigerator). This allows the flour to absorb the liquid.',
      'Heat a 10-inch nonstick skillet over medium heat. Lightly butter the pan.',
      'Pour about 1/4 cup batter into the center of the pan, immediately tilting and swirling to spread batter thinly and evenly.',
      'Cook for 1-2 minutes until the bottom is light golden and edges begin to lift.',
      'Flip carefully with a spatula and cook for another 30 seconds to 1 minute.',
      'Transfer to a plate and repeat with remaining batter, stacking crepes as you go.',
      'Fill crepes with your choice of sweet or savory fillings.',
      'For sweet: spread with Nutella, add fresh berries, fold, and dust with powdered sugar.',
      'For savory: fill with scrambled eggs, ham, and cheese.',
      'Serve immediately while warm. Perfect for Easter brunch!',
      'Can be made ahead and reheated, separated by parchment paper.'
    ],
    nutrition: {
      calories: 195,
      protein: '7g',
      carbs: '24g',
      fat: '8g',
      fiber: '1g'
    },
    tips: 'The key to perfect crepes is a very thin, even layer of batter and medium heat. Don\'t worry if your first crepe doesn\'t turn out - it rarely does! These freeze beautifully - stack with parchment between each crepe. For Easter brunch, set up a crepe bar with various fillings and let guests create their own!'
  }
];

// Render products
document.querySelector("#root").innerHTML = product.map((item, i) => {
  const { image, title, price, category } = item;
  return `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src='${image}' alt='${title}'></img>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <div class='price-badge'>
          <h2>$ ${price.toFixed(2)}</h2>
          <span class='spring-badge'>${category}</span>
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
    id: "easter-" + p.id,
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
      <span class='easter-tag'>🌷 Perfect for Easter ${recipe.category} 🐰</span>
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
      <h4><i class="fa-solid fa-lightbulb"></i> Easter Celebration Tips</h4>
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