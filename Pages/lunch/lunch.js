const product = [
  {
    id: 0,
    image: '/images/l1.webp',
    title: 'CHORIZO AND EGG BURRITOS',
    price: 7.99,
    mealType: 'Hearty & Filling',
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: '4 burritos',
    ingredients: [
      '8 oz chorizo sausage, casings removed',
      '6 large eggs',
      '4 large flour tortillas (10-inch)',
      '1 cup shredded cheddar cheese',
      '1/2 cup diced bell peppers (red and green)',
      '1/4 cup diced onion',
      '1/2 cup salsa',
      '1/4 cup sour cream',
      '2 tablespoons butter',
      'Salt and pepper to taste',
      'Optional: avocado slices, cilantro'
    ],
    instructions: [
      'In a large skillet over medium heat, cook chorizo until browned and crumbly, about 5-7 minutes. Remove and set aside.',
      'In the same skillet, add butter and sauté bell peppers and onions until softened, about 3 minutes.',
      'Whisk eggs in a bowl with salt and pepper. Pour into the skillet with vegetables.',
      'Cook eggs, stirring gently, until scrambled and just set. Return chorizo to pan and mix.',
      'Warm tortillas in microwave for 20 seconds or on a dry skillet.',
      'Divide egg mixture among tortillas, placing in center.',
      'Top with cheese, salsa, and sour cream.',
      'Fold sides in, then roll up burrito tightly from bottom.',
      'Optional: Grill seam-side down in skillet for 1-2 minutes for crispy exterior.',
      'Serve immediately with extra salsa and avocado.'
    ],
    tips: 'Make these ahead and freeze! Wrap individually in foil and freeze up to 3 months. Reheat in oven at 350°F for 20 minutes. For a milder version, use breakfast sausage instead of chorizo. Add black beans for extra protein and fiber.',
    nutrition: 'High in protein (25g per burrito) from eggs and chorizo. To reduce calories, use egg whites and turkey chorizo. Add vegetables like spinach or mushrooms for extra nutrients.'
  },
  {
    id: 1,
    image: '/images/l2.jpeg',
    title: 'SIMPLE PASTA TOSS',
    price: 12,
    mealType: 'Quick & Easy',
    prepTime: '5 mins',
    cookTime: '15 mins',
    servings: '4 servings',
    ingredients: [
      '1 lb pasta (penne, fusilli, or spaghetti)',
      '3 tablespoons olive oil',
      '4 cloves garlic, minced',
      '1 pint cherry tomatoes, halved',
      '1/2 cup fresh basil leaves, torn',
      '1/2 cup grated Parmesan cheese',
      '1/4 teaspoon red pepper flakes',
      'Salt and black pepper to taste',
      '1/4 cup pasta cooking water',
      'Optional: fresh mozzarella balls'
    ],
    instructions: [
      'Bring large pot of salted water to boil. Cook pasta according to package directions until al dente.',
      'Reserve 1/2 cup pasta cooking water before draining.',
      'While pasta cooks, heat olive oil in large skillet over medium heat.',
      'Add garlic and red pepper flakes, cook until fragrant (30 seconds - don\'t burn!).',
      'Add cherry tomatoes and cook until they start to burst, about 5 minutes.',
      'Add drained pasta to skillet with tomatoes.',
      'Toss everything together, adding pasta water a little at a time to create a light sauce.',
      'Remove from heat and stir in torn basil and Parmesan.',
      'Season with salt and pepper to taste.',
      'Serve immediately with extra Parmesan on top.'
    ],
    tips: 'This is the perfect base recipe - customize with grilled chicken, shrimp, or sausage for protein. Use whole wheat pasta for more fiber. Add spinach or arugula for greens. The starchy pasta water helps create a silky sauce!',
    nutrition: 'Moderate calories, can be made lighter with whole wheat pasta. Tomatoes provide lycopene and vitamin C. Garlic and olive oil offer heart-healthy benefits. Add protein like chicken or beans for a complete meal.'
  },
  {
    id: 2,
    image: '/images/l3.jpeg',
    title: 'EASY ENCHILADAS',
    price: 1.29,
    mealType: 'Comfort Food',
    prepTime: '20 mins',
    cookTime: '25 mins',
    servings: '6 servings (12 enchiladas)',
    ingredients: [
      '2 cups cooked shredded chicken (or ground beef)',
      '12 corn or flour tortillas',
      '2 cups enchilada sauce (red or green)',
      '2 cups shredded Mexican cheese blend',
      '1 can (4 oz) diced green chiles',
      '1/2 cup sour cream',
      '1/4 cup chopped cilantro',
      '1 can (15 oz) black beans, drained',
      '1 teaspoon cumin',
      'Salt and pepper to taste',
      'Optional toppings: diced avocado, jalapeños, lime wedges'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Spray 9x13 inch baking dish with cooking spray.',
      'Mix chicken, 1 cup cheese, black beans, green chiles, cumin, and half the sour cream.',
      'Pour 1/2 cup enchilada sauce in bottom of baking dish.',
      'Warm tortillas in microwave for 30 seconds to make them pliable.',
      'Place about 1/3 cup filling in center of each tortilla.',
      'Roll up tortillas and place seam-side down in baking dish.',
      'Pour remaining enchilada sauce over rolled tortillas.',
      'Sprinkle with remaining cheese.',
      'Cover with foil and bake for 20 minutes.',
      'Remove foil and bake 5 more minutes until cheese is bubbly.',
      'Let rest 5 minutes before serving. Top with cilantro, remaining sour cream, and desired toppings.'
    ],
    tips: 'Use rotisserie chicken for a shortcut! These freeze beautifully before baking - just add 15 minutes to baking time. For vegetarian, use only beans and add corn and bell peppers. Make your own enchilada sauce for fresher flavor.',
    nutrition: 'Good source of protein and fiber from beans and chicken. To lighten, use low-fat cheese and Greek yogurt instead of sour cream. Corn tortillas are gluten-free and lower in calories than flour.'
  },
  {
    id: 3,
    image: '/images/l4.jpeg',
    title: 'HEALTHY EGG SALAD SANDWICH',
    price: 3,
    mealType: 'Light & Healthy',
    prepTime: '15 mins',
    cookTime: '12 mins',
    servings: '4 sandwiches',
    ingredients: [
      '8 hard-boiled eggs, peeled and chopped',
      '1/4 cup Greek yogurt',
      '2 tablespoons mayonnaise',
      '1 tablespoon Dijon mustard',
      '2 tablespoons fresh dill, chopped',
      '2 celery stalks, finely diced',
      '2 tablespoons red onion, finely diced',
      '1 tablespoon lemon juice',
      'Salt and black pepper to taste',
      '8 slices whole wheat bread',
      'Lettuce leaves and tomato slices for serving'
    ],
    instructions: [
      'Place eggs in pot and cover with cold water by 1 inch.',
      'Bring to boil, then remove from heat, cover, and let sit 12 minutes.',
      'Transfer eggs to ice bath to cool completely. Peel and chop.',
      'In large bowl, mix Greek yogurt, mayo, mustard, lemon juice, salt, and pepper.',
      'Add chopped eggs, celery, onion, and dill. Stir gently to combine.',
      'Taste and adjust seasoning as needed.',
      'Chill egg salad for at least 30 minutes for best flavor.',
      'Toast bread if desired.',
      'Spread egg salad on bread, top with lettuce and tomato.',
      'Serve immediately or pack for lunch.'
    ],
    tips: 'Greek yogurt reduces calories while adding protein! For extra crunch, add diced pickles or radishes. Make egg salad up to 3 days ahead. Try it on croissants, crackers, or lettuce wraps. Add curry powder for Indian-inspired flavor.',
    nutrition: 'Excellent protein source with 15g per serving. Greek yogurt adds probiotics and reduces fat compared to all-mayo versions. Whole wheat bread provides fiber. Eggs contain choline, important for brain health.'
  },
  {
    id: 4,
    image: '/images/l5.jpeg',
    title: 'CHEESY TURKEY BURGER',
    price: 7.79,
    mealType: 'Classic Favorite',
    prepTime: '15 mins',
    cookTime: '12 mins',
    servings: '4 burgers',
    ingredients: [
      '1 lb ground turkey (93% lean)',
      '1/2 cup shredded cheddar cheese',
      '1/4 cup breadcrumbs',
      '1 egg, beaten',
      '2 cloves garlic, minced',
      '1 teaspoon Worcestershire sauce',
      '1/2 teaspoon onion powder',
      'Salt and pepper to taste',
      '4 hamburger buns',
      '4 slices cheese (cheddar or Swiss)',
      'Toppings: lettuce, tomato, onion, pickles, condiments'
    ],
    instructions: [
      'In large bowl, combine ground turkey, shredded cheese, breadcrumbs, egg, garlic, Worcestershire, onion powder, salt, and pepper.',
      'Mix gently with hands until just combined - don\'t overmix.',
      'Divide mixture into 4 equal portions and shape into patties about 3/4 inch thick.',
      'Make small indentation in center of each patty (prevents puffing).',
      'Preheat grill or skillet over medium-high heat. Lightly oil cooking surface.',
      'Cook burgers 5-6 minutes per side until internal temperature reaches 165°F.',
      'Add cheese slices during last minute of cooking, cover to melt.',
      'Toast buns on grill for 30 seconds.',
      'Assemble burgers with desired toppings.',
      'Serve immediately with fries or salad.'
    ],
    tips: 'Adding cheese to the meat keeps turkey burgers moist! Don\'t press down on burgers while cooking - you\'ll squeeze out the juices. For extra flavor, mix in chopped jalapeños or sun-dried tomatoes. These freeze great as uncooked patties.',
    nutrition: 'Leaner than beef burgers with 25g protein per serving. Turkey is rich in B vitamins and selenium. To reduce sodium, use fresh turkey and control the salt. Serve on whole grain buns for added fiber.'
  },
  {
    id: 5,
    image: '/images/l6.jpeg',
    title: 'TOMATO & EGG MUFFIN',
    price: 15.69,
    mealType: 'Breakfast for Lunch',
    prepTime: '10 mins',
    cookTime: '5 mins',
    servings: '4 muffins',
    ingredients: [
      '4 English muffins, split',
      '4 large eggs',
      '2 large tomatoes, sliced thick',
      '4 slices cheddar cheese',
      '2 tablespoons butter',
      '4 tablespoons mayonnaise',
      'Salt and pepper to taste',
      'Fresh basil leaves',
      'Optional: bacon or ham slices'
    ],
    instructions: [
      'Toast English muffin halves until golden brown.',
      'While muffins toast, heat butter in skillet over medium heat.',
      'Crack eggs into skillet, keeping yolks intact.',
      'Cook until whites are set but yolks are still runny, about 3-4 minutes. Season with salt and pepper.',
      'For over-easy, flip gently and cook 30 seconds more.',
      'Spread mayonnaise on both muffin halves.',
      'On bottom half: layer tomato slice, fresh basil, cheese slice, and fried egg.',
      'Season with additional salt and pepper.',
      'Top with other muffin half.',
      'Serve immediately while egg is warm and yolk is runny.'
    ],
    tips: 'The runny yolk creates a delicious sauce! For meal prep, assemble without egg and add freshly fried egg when ready to eat. Add avocado for healthy fats. Try with different cheeses like Swiss or pepper jack. Perfect for breakfast-for-lunch!',
    nutrition: 'Balanced meal with protein from eggs (6g), calcium from cheese, and lycopene from tomatoes. To reduce calories, use light mayo and skip the cheese. Eggs provide vitamin D and choline. Tomatoes add vitamin C.'
  },
  {
    id: 6,
    image: '/images/l7.jpeg',
    title: 'BOSTON FENWAY FRANKS',
    price: 6.25,
    mealType: 'Game Day Classic',
    prepTime: '5 mins',
    cookTime: '10 mins',
    servings: '4 hot dogs',
    ingredients: [
      '4 all-beef hot dogs',
      '4 hot dog buns (preferably New England-style top-split)',
      '2 tablespoons butter',
      '1 cup shredded cheddar cheese',
      '1/2 cup sweet pickle relish',
      '1/4 cup diced onions',
      'Yellow mustard',
      'Optional: ketchup (though not traditional in Boston!)'
    ],
    instructions: [
      'Bring pot of water to boil. Add hot dogs and simmer for 5 minutes.',
      'Alternatively, grill hot dogs over medium-high heat for 8-10 minutes, turning occasionally.',
      'While hot dogs cook, butter the inside of buns and toast in skillet or on grill until golden.',
      'Place cooked hot dog in toasted bun.',
      'Top generously with shredded cheddar cheese while hot dog is still hot.',
      'Add a stripe of yellow mustard down the center.',
      'Top with sweet pickle relish and diced onions.',
      'Serve immediately while cheese is melty.',
      'Enjoy with chips and a cold drink!'
    ],
    tips: 'For authentic Fenway Park taste, use Pearl hot dog buns if you can find them. The top-split buns are easier to load with toppings! Warm the relish slightly for best flavor. Make it a loaded dog with sauerkraut, jalapeños, or chili. Don\'t forget the napkins!',
    nutrition: 'A treat meal - enjoy occasionally! All-beef hot dogs provide protein but are high in sodium and fat. To lighten, use turkey dogs and reduce toppings. Pair with a side salad to add vegetables to the meal.'
  },
  {
    id: 7,
    image: '/images/l8.jpeg',
    title: 'TEA ROOM TUNA SALAD',
    price: 2.4,
    mealType: 'Light & Elegant',
    prepTime: '15 mins',
    cookTime: '0 mins',
    servings: '4 servings',
    ingredients: [
      '2 cans (5 oz each) tuna in water, drained',
      '1/2 cup mayonnaise',
      '2 tablespoons lemon juice',
      '1/4 cup finely diced celery',
      '2 tablespoons finely diced red onion',
      '2 tablespoons fresh parsley, chopped',
      '1 tablespoon capers, chopped',
      '1/2 teaspoon Dijon mustard',
      'Salt and white pepper to taste',
      '8 slices white or wheat bread, crusts removed',
      'Lettuce leaves',
      'Optional: cucumber slices, watercress'
    ],
    instructions: [
      'In medium bowl, break up tuna with fork.',
      'Add mayonnaise, lemon juice, and Dijon mustard. Mix well.',
      'Fold in celery, red onion, parsley, and capers.',
      'Season with salt and white pepper. Taste and adjust.',
      'Refrigerate for at least 30 minutes to let flavors meld.',
      'When ready to serve, remove crusts from bread for tea sandwiches.',
      'Spread tuna salad on 4 bread slices.',
      'Top with lettuce leaves and cucumber if using.',
      'Cover with remaining bread slices.',
      'Cut diagonally into triangles or into finger sandwiches.',
      'Arrange on a pretty plate and serve.'
    ],
    tips: 'For authentic tea room style, cut into small triangles or rectangles. The capers add a sophisticated briny flavor! Make salad up to 2 days ahead. For a healthier version, use Greek yogurt instead of mayo. Try on croissants or crackers. Add diced apple for sweetness and crunch.',
    nutrition: 'Excellent source of protein (20g per serving) and omega-3 fatty acids from tuna. Low in calories when made with light mayo or Greek yogurt. Tuna provides vitamin D and selenium. Choose white bread for classic tea room style or whole wheat for more fiber.'
  }
];

const categories = product.map(item => item.title);

// Render products
document.querySelector("#root").innerHTML = product.map((item, i) => {
  const { image, title, price } = item;
  return `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src=${image} alt="${title}">
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price.toFixed(2)}</h2>
        <div class="button-group">
          <button class="add-to-cart-btn" onClick='addtocart(${i})'>
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
          <button class="view-recipe-btn" onClick='viewRecipe(${i})'>
            <i class="fa-solid fa-utensils"></i> Recipe
          </button>
        </div>
      </div>
    </div>`;
}).join('');

// Add to cart function
function addtocart(i) {
  const p = product[i];
  addToCart({
    id: "lunch-" + p.id,
    title: p.title,
    price: p.price,
    image: p.image
  });
}

// View recipe function
function viewRecipe(i) {
  const recipe = product[i];
  const modal = document.getElementById('recipeModal');
  
  // Populate modal content
  document.getElementById('modalImage').src = recipe.image;
  document.getElementById('modalTitle').textContent = recipe.title;
  document.getElementById('mealType').textContent = recipe.mealType;
  document.getElementById('prepTime').textContent = `Prep: ${recipe.prepTime}`;
  document.getElementById('cookTime').textContent = `Cook: ${recipe.cookTime}`;
  document.getElementById('servings').textContent = `Serves: ${recipe.servings}`;
  
  // Populate ingredients
  const ingredientsList = document.getElementById('ingredients');
  ingredientsList.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
  
  // Populate instructions
  const instructionsList = document.getElementById('instructions');
  instructionsList.innerHTML = recipe.instructions.map(inst => `<li>${inst}</li>`).join('');
  
  // Populate tips
  document.getElementById('tips').textContent = recipe.tips;
  
  // Populate nutrition
  document.getElementById('nutrition').textContent = recipe.nutrition;
  
  // Show modal
  modal.style.display = 'block';
}

// Modal close functionality
const modal = document.getElementById('recipeModal');
const span = document.getElementsByClassName('close')[0];

span.onclick = function() {
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