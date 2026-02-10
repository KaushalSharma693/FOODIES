const product = [
  {
    id: 0,
    image: '/images/c1.jpg',
    title: 'BAKED ZITI',
    price: 40.00,
    prepTime: '20 mins',
    cookTime: '35 mins',
    servings: 8,
    difficulty: 'Easy',
    ingredients: [
      '1 lb ziti pasta',
      '1 lb ground Italian sausage',
      '1 lb ground beef',
      '1 jar (24 oz) marinara sauce',
      '1 can (15 oz) ricotta cheese',
      '3 cups shredded mozzarella cheese, divided',
      '1 cup grated Parmesan cheese',
      '2 eggs',
      '3 cloves garlic, minced',
      '1 tbsp Italian seasoning',
      '1 tsp dried basil',
      'Salt and pepper to taste',
      'Fresh parsley for garnish'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C). Grease a 9x13 inch baking dish.',
      'Cook ziti according to package directions until al dente. Drain and set aside.',
      'In a large skillet, brown Italian sausage and ground beef over medium-high heat. Drain excess fat.',
      'Add minced garlic to the meat and cook for 1 minute. Stir in marinara sauce, Italian seasoning, and basil. Simmer for 10 minutes.',
      'In a bowl, combine ricotta cheese, 1 cup mozzarella, Parmesan, eggs, salt, and pepper. Mix well.',
      'In the prepared baking dish, layer half the cooked ziti, then spread half the ricotta mixture, and top with half the meat sauce.',
      'Repeat layers with remaining ziti, ricotta mixture, and meat sauce.',
      'Top with remaining 2 cups of mozzarella cheese.',
      'Cover with aluminum foil and bake for 25 minutes. Remove foil and bake an additional 10 minutes until cheese is bubbly and golden.',
      'Let rest for 10 minutes before serving. Garnish with fresh parsley.'
    ],
    nutrition: {
      calories: 520,
      protein: '32g',
      carbs: '45g',
      fat: '24g',
      fiber: '3g'
    },
    tips: 'For extra flavor, add a layer of sautéed spinach or mushrooms. This casserole freezes beautifully - prepare up to step 8, freeze, and bake when ready (add 15 extra minutes to baking time).'
  },
  {
    id: 1,
    image: '/images/c2.jpg',
    title: 'MEATBALL SUB CASSEROLE',
    price: 41.00,
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 8,
    difficulty: 'Easy',
    ingredients: [
      '24 frozen meatballs (or homemade)',
      '1 loaf French bread, cut into 1-inch cubes',
      '2 cups marinara sauce',
      '3 cups shredded mozzarella cheese',
      '1/2 cup grated Parmesan cheese',
      '1/2 cup melted butter',
      '3 cloves garlic, minced',
      '1 tbsp Italian seasoning',
      '1/2 tsp red pepper flakes (optional)',
      '1/4 cup fresh basil, chopped',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C). Grease a 9x13 inch baking dish.',
      'If using frozen meatballs, cook according to package directions. Cut each meatball in half.',
      'In a small bowl, mix melted butter with minced garlic and Italian seasoning.',
      'Toss bread cubes with the garlic butter mixture until well coated.',
      'Arrange half of the bread cubes in the bottom of the prepared baking dish.',
      'Layer half the meatballs over the bread, then pour half the marinara sauce over the meatballs.',
      'Sprinkle with half of the mozzarella cheese.',
      'Repeat layers with remaining bread, meatballs, sauce, and cheese. Top with Parmesan.',
      'Cover with foil and bake for 20 minutes. Remove foil and bake for an additional 10 minutes until cheese is melted and bubbly.',
      'Let cool for 5 minutes, garnish with fresh basil and red pepper flakes if desired. Serve hot.'
    ],
    nutrition: {
      calories: 485,
      protein: '28g',
      carbs: '38g',
      fat: '25g',
      fiber: '2g'
    },
    tips: 'For a crispier top, broil for the last 2-3 minutes. You can also add sliced bell peppers and onions for extra veggies. Use garlic bread instead of French bread for even more flavor!'
  },
  {
    id: 2,
    image: '/images/c3.jpeg',
    title: 'CHEESY SHRIMP & GRITS CASSEROLE',
    price: 25.49,
    prepTime: '25 mins',
    cookTime: '40 mins',
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      '1 1/2 lbs large shrimp, peeled and deveined',
      '4 cups chicken broth',
      '1 cup stone-ground grits',
      '2 cups sharp cheddar cheese, shredded',
      '4 strips bacon, cooked and crumbled',
      '1/2 cup heavy cream',
      '4 tbsp butter, divided',
      '3 cloves garlic, minced',
      '1 small onion, diced',
      '1 bell pepper, diced',
      '1 tsp Cajun seasoning',
      '1/2 tsp smoked paprika',
      'Salt and pepper to taste',
      '2 green onions, sliced',
      'Hot sauce for serving'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease a 9x13 inch baking dish.',
      'In a large saucepan, bring chicken broth to a boil. Slowly whisk in grits, reduce heat to low, and cook for 15-20 minutes, stirring frequently.',
      'Once grits are thick and creamy, stir in 2 tbsp butter, heavy cream, and 1 1/2 cups cheddar cheese. Season with salt and pepper. Set aside.',
      'In a large skillet, cook bacon until crispy. Remove and crumble. In the bacon fat (or add 2 tbsp butter), sauté onion and bell pepper for 5 minutes.',
      'Add garlic and shrimp to the skillet. Cook for 2-3 minutes per side until shrimp are pink. Season with Cajun seasoning and paprika.',
      'Pour the cheesy grits into the prepared baking dish. Spread evenly.',
      'Top with the shrimp mixture, distributing evenly over the grits.',
      'Sprinkle remaining cheddar cheese and crumbled bacon on top.',
      'Bake for 20-25 minutes until heated through and cheese is bubbly.',
      'Garnish with sliced green onions and serve with hot sauce on the side.'
    ],
    nutrition: {
      calories: 445,
      protein: '32g',
      carbs: '28g',
      fat: '23g',
      fiber: '2g'
    },
    tips: 'For extra richness, add a splash of white wine when cooking the shrimp. You can substitute andouille sausage for bacon for a more traditional Southern flavor. Make it spicier by adding diced jalapeños!'
  },
  {
    id: 3,
    image: '/images/c4.jpeg',
    title: 'RO-TEL CHICKEN SPAGHETTI',
    price: 16.00,
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 8,
    difficulty: 'Easy',
    ingredients: [
      '1 lb spaghetti',
      '3 cups cooked chicken, shredded',
      '1 can (10 oz) Ro-Tel diced tomatoes with green chilies',
      '1 can (10.5 oz) cream of chicken soup',
      '1 can (10.5 oz) cream of mushroom soup',
      '2 cups chicken broth',
      '1 small onion, diced',
      '1 bell pepper, diced',
      '3 cups shredded cheddar cheese, divided',
      '2 tbsp butter',
      '1 tsp garlic powder',
      '1 tsp chili powder',
      'Salt and pepper to taste',
      'Fresh cilantro for garnish'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease a 9x13 inch baking dish.',
      'Cook spaghetti according to package directions until al dente. Drain and set aside.',
      'In a large skillet, melt butter over medium heat. Sauté onion and bell pepper until softened, about 5 minutes.',
      'In a large bowl, combine Ro-Tel tomatoes (with juices), cream of chicken soup, cream of mushroom soup, chicken broth, sautéed vegetables, garlic powder, and chili powder. Mix well.',
      'Add shredded chicken, cooked spaghetti, and 2 cups of cheddar cheese to the mixture. Stir until everything is well combined. Season with salt and pepper.',
      'Pour the mixture into the prepared baking dish and spread evenly.',
      'Top with remaining 1 cup of cheddar cheese.',
      'Bake uncovered for 25-30 minutes until bubbly and cheese is melted.',
      'Let rest for 5 minutes before serving. Garnish with fresh cilantro.',
      'Serve with tortilla chips or cornbread on the side.'
    ],
    nutrition: {
      calories: 465,
      protein: '30g',
      carbs: '42g',
      fat: '19g',
      fiber: '2g'
    },
    tips: 'Use rotisserie chicken for a quick shortcut! For extra kick, add diced jalapeños or use spicy Ro-Tel. This freezes wonderfully - assemble, freeze before baking, and bake from frozen (add 15-20 minutes).'
  },
  {
    id: 4,
    image: '/images/c5.webp',
    title: 'ABSOLUTE BEST EVER LASAGNA',
    price: 8.00,
    prepTime: '30 mins',
    cookTime: '60 mins',
    servings: 12,
    difficulty: 'Medium',
    ingredients: [
      '1 lb ground beef',
      '1 lb Italian sausage',
      '1 onion, diced',
      '4 cloves garlic, minced',
      '1 can (28 oz) crushed tomatoes',
      '2 cans (6 oz each) tomato paste',
      '1 can (15 oz) tomato sauce',
      '1/2 cup water',
      '2 tbsp sugar',
      '1 1/2 tsp dried basil',
      '1 tsp Italian seasoning',
      '1 tbsp salt, divided',
      '1/4 tsp black pepper',
      '4 tbsp fresh parsley, divided',
      '16 oz lasagna noodles',
      '16 oz ricotta cheese',
      '1 egg',
      '1 lb mozzarella cheese, sliced',
      '3/4 cup Parmesan cheese, grated'
    ],
    instructions: [
      'In a large pot, cook ground beef, sausage, and onion over medium heat until browned. Add garlic and cook for 1 minute.',
      'Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Add sugar, basil, Italian seasoning, 1 tsp salt, pepper, and 2 tbsp parsley. Simmer covered for 1.5 hours, stirring occasionally.',
      'Meanwhile, cook lasagna noodles according to package directions. Drain and rinse with cold water.',
      'In a bowl, mix ricotta cheese with egg, remaining parsley, and 1/2 tsp salt.',
      'Preheat oven to 375°F (190°C).',
      'In a 9x13 inch baking dish, spread 1 1/2 cups meat sauce. Layer with 6 noodles, half the ricotta mixture, half the mozzarella slices, and 1/4 cup Parmesan. Pour 1 1/2 cups meat sauce over.',
      'Repeat layers: noodles, remaining ricotta, remaining mozzarella, 1/4 cup Parmesan, and meat sauce.',
      'Top with remaining noodles, meat sauce, and remaining Parmesan.',
      'Cover with foil (spray foil with cooking spray to prevent sticking) and bake for 25 minutes. Remove foil and bake 25 more minutes.',
      'Let stand 15 minutes before cutting. The wait is worth it for perfect slices!'
    ],
    nutrition: {
      calories: 475,
      protein: '32g',
      carbs: '38g',
      fat: '22g',
      fiber: '3g'
    },
    tips: 'Make ahead tip: Assemble the lasagna up to 24 hours before baking and refrigerate. Add 10 minutes to covered baking time. For vegetarian version, substitute meat with sautéed mushrooms, zucchini, and spinach.'
  },
  {
    id: 5,
    image: '/images/c6.jpeg',
    title: 'CLASSIC BAKED SPAGHETTI',
    price: 18.00,
    prepTime: '20 mins',
    cookTime: '35 mins',
    servings: 8,
    difficulty: 'Easy',
    ingredients: [
      '1 lb spaghetti',
      '1 1/2 lbs ground beef',
      '1 onion, diced',
      '1 jar (24 oz) marinara sauce',
      '1 can (8 oz) tomato sauce',
      '8 oz cream cheese, softened',
      '1/2 cup sour cream',
      '1/4 cup butter, melted',
      '3 cups shredded mozzarella cheese, divided',
      '1/2 cup grated Parmesan cheese',
      '3 cloves garlic, minced',
      '1 tsp Italian seasoning',
      'Salt and pepper to taste',
      'Fresh basil for garnish'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease a 9x13 inch baking dish.',
      'Cook spaghetti according to package directions until al dente. Drain well.',
      'While pasta cooks, brown ground beef and onion in a large skillet over medium-high heat. Drain fat.',
      'Add garlic to beef and cook 1 minute. Stir in marinara sauce, tomato sauce, and Italian seasoning. Simmer for 10 minutes. Season with salt and pepper.',
      'In a bowl, combine softened cream cheese, sour cream, and melted butter until smooth.',
      'In the prepared baking dish, layer half the cooked spaghetti. Spread the cream cheese mixture over the pasta.',
      'Top with remaining spaghetti, then pour all the meat sauce over the top.',
      'Sprinkle with 2 cups mozzarella and all the Parmesan cheese.',
      'Bake uncovered for 30 minutes. Top with remaining mozzarella and bake 5 more minutes until cheese is melted and bubbly.',
      'Let rest 5-10 minutes. Garnish with fresh basil and serve.'
    ],
    nutrition: {
      calories: 535,
      protein: '31g',
      carbs: '46g',
      fat: '25g',
      fiber: '3g'
    },
    tips: 'The cream cheese layer is what makes this extra special! For a lighter version, use low-fat cream cheese and sour cream. Add vegetables like bell peppers, mushrooms, or zucchini to the meat sauce for extra nutrition.'
  },
  {
    id: 6,
    image: '/images/c7.jpg',
    title: 'CHICKEN RICE CASSEROLE',
    price: 24.00,
    prepTime: '15 mins',
    cookTime: '50 mins',
    servings: 6,
    difficulty: 'Easy',
    ingredients: [
      '3 cups cooked chicken, diced',
      '1 1/2 cups long-grain white rice, uncooked',
      '3 cups chicken broth',
      '1 can (10.5 oz) cream of chicken soup',
      '1 can (10.5 oz) cream of mushroom soup',
      '1 cup frozen mixed vegetables',
      '1 cup sour cream',
      '2 cups shredded cheddar cheese, divided',
      '1 small onion, diced',
      '2 cloves garlic, minced',
      '1/2 cup butter, melted',
      '1 tsp poultry seasoning',
      '1 cup crushed Ritz crackers',
      'Salt and pepper to taste',
      'Fresh parsley for garnish'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease a 9x13 inch baking dish.',
      'In a large bowl, combine uncooked rice, chicken broth, cream of chicken soup, cream of mushroom soup, sour cream, frozen vegetables, onion, garlic, and poultry seasoning. Mix well.',
      'Stir in diced chicken and 1 cup of cheddar cheese. Season with salt and pepper.',
      'Pour mixture into the prepared baking dish and spread evenly.',
      'Cover tightly with aluminum foil and bake for 45 minutes.',
      'While casserole bakes, mix crushed Ritz crackers with melted butter.',
      'After 45 minutes, remove foil. Top with remaining 1 cup cheddar cheese and buttered cracker crumbs.',
      'Bake uncovered for an additional 10-15 minutes until rice is tender, cheese is melted, and topping is golden.',
      'Let rest for 5 minutes before serving. Garnish with fresh parsley.',
      'Serve as a complete meal or with a side salad.'
    ],
    nutrition: {
      calories: 565,
      protein: '32g',
      carbs: '48g',
      fat: '28g',
      fiber: '2g'
    },
    tips: 'Use rotisserie chicken to save time! For extra flavor, sauté the onions and garlic before mixing. You can also add chopped broccoli or green beans. This is perfect for using up Thanksgiving turkey leftovers!'
  },
  {
    id: 7,
    image: '/images/c8.jpeg',
    title: 'MAKE AHEAD MASHED POTATO CASSEROLE',
    price: 20.00,
    prepTime: '30 mins',
    cookTime: '40 mins',
    servings: 10,
    difficulty: 'Easy',
    ingredients: [
      '5 lbs russet potatoes, peeled and cubed',
      '8 oz cream cheese, softened',
      '1/2 cup sour cream',
      '1/2 cup butter, melted',
      '1/2 cup milk (more if needed)',
      '2 cups shredded cheddar cheese, divided',
      '4 slices bacon, cooked and crumbled',
      '3 green onions, sliced',
      '2 cloves garlic, minced',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      'Salt and pepper to taste',
      '1/4 cup butter for topping',
      'Paprika for garnish'
    ],
    instructions: [
      'Place cubed potatoes in a large pot and cover with cold water. Add 1 tbsp salt. Bring to a boil and cook for 15-20 minutes until fork-tender.',
      'Drain potatoes well and return to pot. Let steam dry for 2 minutes.',
      'Mash potatoes until smooth. Add softened cream cheese, sour cream, melted butter, and milk. Mix until creamy and fluffy. Add more milk if needed for desired consistency.',
      'Stir in minced garlic, garlic powder, onion powder, 1 cup cheddar cheese, half the bacon, and half the green onions. Season generously with salt and pepper.',
      'Preheat oven to 350°F (175°C). Grease a 9x13 inch baking dish.',
      'Spread mashed potato mixture evenly in the prepared dish.',
      'Top with remaining cheddar cheese and bacon. Dot with butter pieces. Sprinkle with paprika.',
      'At this point, you can cover and refrigerate for up to 24 hours, or bake immediately.',
      'Bake uncovered for 35-40 minutes (45-50 if chilled) until heated through and top is golden.',
      'Garnish with remaining green onions before serving. Perfect for holiday dinners!'
    ],
    nutrition: {
      calories: 385,
      protein: '12g',
      carbs: '38g',
      fat: '22g',
      fiber: '3g'
    },
    tips: 'The beauty of this dish is you can make it a day ahead! For loaded potato flavor, add extra bacon and cheese. Try mixing in roasted garlic for incredible depth. Leftovers can be formed into patties and pan-fried for potato cakes!'
  }
];

// Render products
document.querySelector("#root").innerHTML = product.map((item, i) => {
  const { image, title, price, difficulty } = item;
  return `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src='${image}' alt='${title}'></img>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <div class='price-badge'>
          <h2>$ ${price.toFixed(2)}</h2>
          <span class='comfort-badge'>${difficulty}</span>
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
    id: "casserole-" + p.id,
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
      <h4><i class="fa-solid fa-lightbulb"></i> Chef's Tips</h4>
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