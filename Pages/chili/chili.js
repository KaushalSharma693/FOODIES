const product = [
  {
    id: 0,
    image: '/images/ch1.jpeg',
    title: 'COWBOY STEAK CHILI IN A CROCK POT',
    price: 22.40,
    cookTime: '6-8 hours',
    servings: '8-10 servings',
    difficulty: 'Medium',
    ingredients: [
      '2 lbs beef steak, cut into 1-inch cubes',
      '1 lb ground beef',
      '1 large onion, diced',
      '4 cloves garlic, minced',
      '2 cans (15 oz each) kidney beans, drained',
      '2 cans (15 oz each) diced tomatoes',
      '1 can (6 oz) tomato paste',
      '2 cups beef broth',
      '3 tablespoons chili powder',
      '2 teaspoons cumin',
      '1 teaspoon smoked paprika',
      '1 teaspoon oregano',
      '2 jalapeños, diced',
      'Salt and black pepper to taste',
      '2 tablespoons vegetable oil'
    ],
    instructions: [
      'Heat oil in a large skillet over medium-high heat. Brown the steak cubes on all sides, about 5-7 minutes. Transfer to crock pot.',
      'In the same skillet, brown the ground beef, breaking it up with a spoon. Add onions and garlic, cook until fragrant, about 3 minutes.',
      'Transfer beef mixture to crock pot. Add kidney beans, diced tomatoes, tomato paste, and beef broth.',
      'Stir in chili powder, cumin, smoked paprika, oregano, jalapeños, salt, and pepper. Mix well.',
      'Cover and cook on low for 6-8 hours or high for 4-5 hours, stirring occasionally.',
      'Taste and adjust seasonings before serving. The longer it cooks, the more tender the steak will become.',
      'Serve hot with your favorite toppings like shredded cheese, sour cream, and green onions.'
    ],
    tips: 'For extra flavor, sear the steak pieces in batches to get a good crust. This cowboy-style chili gets better the next day, so make it ahead for gatherings. You can also add a can of beer for depth of flavor.'
  },
  {
    id: 1,
    image: '/images/ch2.jpeg',
    title: 'SLOW-COOKED CHICKEN CHILI',
    price: 6.90,
    cookTime: '4-6 hours',
    servings: '6-8 servings',
    difficulty: 'Easy',
    ingredients: [
      '2 lbs boneless, skinless chicken breasts',
      '2 cans (15 oz each) white beans, drained',
      '1 can (15 oz) corn, drained',
      '1 can (4 oz) diced green chilies',
      '1 large onion, chopped',
      '3 cloves garlic, minced',
      '4 cups chicken broth',
      '2 teaspoons cumin',
      '1 teaspoon oregano',
      '1/2 teaspoon cayenne pepper',
      '1 teaspoon chili powder',
      'Salt and pepper to taste',
      '1 cup sour cream',
      'Juice of 1 lime',
      'Fresh cilantro for garnish'
    ],
    instructions: [
      'Place chicken breasts in the bottom of your slow cooker.',
      'Add white beans, corn, green chilies, onion, and garlic over the chicken.',
      'Pour chicken broth over everything. Add cumin, oregano, cayenne pepper, chili powder, salt, and pepper.',
      'Cover and cook on low for 4-6 hours or high for 2-3 hours until chicken is cooked through and tender.',
      'Remove chicken from slow cooker and shred using two forks.',
      'Return shredded chicken to the slow cooker and stir well.',
      'Stir in sour cream and lime juice just before serving.',
      'Garnish with fresh cilantro, additional sour cream, and tortilla chips if desired.'
    ],
    tips: 'This white chicken chili is lighter than traditional red chili but just as satisfying. You can use rotisserie chicken to save time - just add it shredded in the last 30 minutes of cooking. Top with avocado, cheese, and crispy tortilla strips for a complete meal.'
  },
  {
    id: 2,
    image: '/images/ch3.jpeg',
    title: 'GROUND TURKEY AND WHITE BEAN CHILI',
    price: 4.99,
    cookTime: '45 minutes',
    servings: '6 servings',
    difficulty: 'Easy',
    ingredients: [
      '1.5 lbs ground turkey',
      '2 cans (15 oz each) white beans (cannellini or great northern)',
      '1 can (15 oz) diced tomatoes',
      '1 large onion, diced',
      '3 cloves garlic, minced',
      '2 cups chicken broth',
      '1 can (4 oz) diced green chilies',
      '2 teaspoons cumin',
      '1 teaspoon chili powder',
      '1/2 teaspoon paprika',
      '1/4 teaspoon cayenne pepper',
      'Salt and pepper to taste',
      '2 tablespoons olive oil',
      'Fresh cilantro and lime wedges for serving'
    ],
    instructions: [
      'Heat olive oil in a large pot over medium-high heat. Add ground turkey and cook until browned, breaking it up as it cooks, about 8-10 minutes.',
      'Add diced onion and cook until softened, about 5 minutes. Add garlic and cook for another minute until fragrant.',
      'Stir in cumin, chili powder, paprika, cayenne pepper, salt, and pepper. Cook for 1 minute to toast the spices.',
      'Add white beans (with their liquid), diced tomatoes, green chilies, and chicken broth. Stir well to combine.',
      'Bring to a boil, then reduce heat to low and simmer for 25-30 minutes, stirring occasionally.',
      'Taste and adjust seasonings as needed. If chili is too thick, add more broth; if too thin, simmer longer.',
      'Serve hot with fresh cilantro, a squeeze of lime, and your favorite toppings.'
    ],
    tips: 'This healthy chili is high in protein and fiber while being lower in fat. For a creamier texture, mash some of the beans against the side of the pot. This also freezes beautifully - portion into containers for easy weeknight meals.'
  },
  {
    id: 3,
    image: '/images/ch4.jpeg',
    title: 'HORMEL CHILI DIP',
    price: 7.99,
    cookTime: '15 minutes',
    servings: '10-12 servings',
    difficulty: 'Easy',
    ingredients: [
      '2 cans (15 oz each) Hormel chili (with or without beans)',
      '16 oz cream cheese, softened',
      '2 cups shredded cheddar cheese',
      '1 cup shredded mozzarella cheese',
      '1 can (4 oz) diced green chilies',
      '1/2 cup diced onion',
      '1 teaspoon garlic powder',
      '1/2 teaspoon cumin',
      'Sliced jalapeños (optional)',
      'Green onions for garnish',
      'Tortilla chips for serving'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C).',
      'In a large bowl, mix softened cream cheese until smooth and creamy.',
      'Add Hormel chili, 1.5 cups cheddar cheese, mozzarella cheese, green chilies, onion, garlic powder, and cumin. Mix until well combined.',
      'Spread mixture evenly into a 9x13 inch baking dish or large oven-safe skillet.',
      'Top with remaining 1/2 cup cheddar cheese and jalapeño slices if using.',
      'Bake for 20-25 minutes until hot and bubbly, and cheese is melted.',
      'Remove from oven and let cool for 5 minutes. Garnish with sliced green onions.',
      'Serve warm with tortilla chips, crackers, or fresh vegetables.'
    ],
    tips: 'This crowd-pleasing dip is perfect for game day or parties. You can make it ahead and refrigerate, then bake when ready to serve. For extra heat, add diced jalapeños to the mixture or use spicy Hormel chili. Keep warm in a slow cooker for parties.'
  },
  {
    id: 4,
    image: '/images/ch5.webp',
    title: 'HEARTY VEGETARIAN TOFU CHILI',
    price: 2.44,
    cookTime: '40 minutes',
    servings: '6 servings',
    difficulty: 'Easy',
    ingredients: [
      '14 oz firm tofu, pressed and crumbled',
      '2 cans (15 oz each) kidney beans, drained',
      '1 can (15 oz) black beans, drained',
      '2 cans (15 oz each) diced tomatoes',
      '1 can (6 oz) tomato paste',
      '1 large onion, diced',
      '1 bell pepper, diced',
      '3 cloves garlic, minced',
      '2 cups vegetable broth',
      '3 tablespoons chili powder',
      '2 teaspoons cumin',
      '1 teaspoon smoked paprika',
      '1/2 teaspoon oregano',
      '2 tablespoons soy sauce',
      '2 tablespoons olive oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Press tofu to remove excess water, then crumble into small pieces resembling ground meat.',
      'Heat olive oil in a large pot over medium-high heat. Add crumbled tofu and cook until lightly browned, about 5-7 minutes.',
      'Add onion and bell pepper, cook until softened, about 5 minutes. Add garlic and cook for 1 minute.',
      'Stir in chili powder, cumin, smoked paprika, and oregano. Cook for 1 minute to release the flavors.',
      'Add kidney beans, black beans, diced tomatoes, tomato paste, vegetable broth, and soy sauce. Stir well.',
      'Bring to a boil, then reduce heat and simmer uncovered for 25-30 minutes, stirring occasionally.',
      'Season with salt and pepper to taste. If too thick, add more broth; if too thin, simmer longer.',
      'Serve hot with toppings like avocado, vegan cheese, cilantro, or cashew sour cream.'
    ],
    tips: 'Pressing the tofu is key to getting a good texture - wrap it in paper towels and place something heavy on top for 15 minutes. The tofu absorbs all the delicious chili flavors. This is a protein-packed vegan option that even meat-lovers will enjoy!'
  },
  {
    id: 5,
    image: '/images/ch6.jpeg',
    title: 'TASTY LOW SODIUM CHILI',
    price: 1.39,
    cookTime: '1 hour',
    servings: '8 servings',
    difficulty: 'Easy',
    ingredients: [
      '1.5 lbs lean ground beef (93% lean)',
      '2 cans (15 oz each) no-salt-added kidney beans, drained',
      '2 cans (15 oz each) no-salt-added diced tomatoes',
      '1 can (6 oz) no-salt-added tomato paste',
      '2 cups low-sodium beef broth',
      '1 large onion, diced',
      '1 green bell pepper, diced',
      '4 cloves garlic, minced',
      '3 tablespoons chili powder',
      '2 teaspoons cumin',
      '1 teaspoon smoked paprika',
      '1 teaspoon oregano',
      '1/2 teaspoon black pepper',
      '1 tablespoon olive oil',
      '1 teaspoon cocoa powder (optional, for depth)'
    ],
    instructions: [
      'Heat olive oil in a large pot over medium-high heat. Add ground beef and cook until browned, breaking it up as it cooks.',
      'Add onion and bell pepper, cook until softened, about 5-7 minutes. Add garlic and cook for 1 minute.',
      'Stir in chili powder, cumin, smoked paprika, oregano, and black pepper. Cook for 1-2 minutes.',
      'Add kidney beans, diced tomatoes, tomato paste, and low-sodium beef broth. Stir well to combine.',
      'If using cocoa powder, add it now for extra richness without salt.',
      'Bring to a boil, then reduce heat to low and simmer for 40-45 minutes, stirring occasionally.',
      'Taste and adjust seasonings if needed. Remember, traditional chili relies heavily on salt, so be generous with other spices.',
      'Serve with low-sodium toppings like fresh vegetables, herbs, or a dollop of plain yogurt.'
    ],
    tips: 'Using no-salt-added canned goods and low-sodium broth significantly reduces sodium without sacrificing flavor. The cocoa powder adds depth and richness. Fresh herbs like cilantro and a squeeze of lime add brightness without sodium. This heart-healthy version is perfect for those watching their salt intake.'
  },
  {
    id: 6,
    image: '/images/ch7.jpeg',
    title: 'LEFTOVER TURKEY OR CHICKEN CHILI',
    price: 3.79,
    cookTime: '35 minutes',
    servings: '6 servings',
    difficulty: 'Easy',
    ingredients: [
      '3 cups cooked turkey or chicken, shredded or diced',
      '2 cans (15 oz each) white beans, drained',
      '1 can (15 oz) corn, drained',
      '1 can (15 oz) diced tomatoes',
      '1 can (4 oz) diced green chilies',
      '1 onion, diced',
      '3 cloves garlic, minced',
      '3 cups chicken or turkey broth',
      '2 teaspoons cumin',
      '1 teaspoon chili powder',
      '1 teaspoon oregano',
      '1/2 teaspoon paprika',
      'Salt and pepper to taste',
      '2 tablespoons olive oil',
      'Juice of 1 lime'
    ],
    instructions: [
      'Heat olive oil in a large pot over medium heat. Add onion and cook until softened, about 5 minutes.',
      'Add garlic and cook for another minute until fragrant.',
      'Stir in cumin, chili powder, oregano, and paprika. Cook for 1 minute to toast the spices.',
      'Add white beans, corn, diced tomatoes, green chilies, and broth. Stir well.',
      'Bring to a boil, then reduce heat and simmer for 20 minutes to let flavors meld.',
      'Add shredded turkey or chicken and heat through for 5-10 minutes.',
      'Stir in lime juice and season with salt and pepper to taste.',
      'Serve hot with toppings like sour cream, cheese, avocado, and cilantro.'
    ],
    tips: 'This is the perfect recipe for using up Thanksgiving or rotisserie chicken leftovers! The turkey or chicken is already cooked, so this comes together quickly. You can use dark meat for extra flavor or white meat for a leaner option. Freeze leftovers in portions for easy meals.'
  },
  {
    id: 7,
    image: '/images/ch8.jpeg',
    title: 'CHILI COLORADO',
    price: 16.87,
    cookTime: '3 hours',
    servings: '6-8 servings',
    difficulty: 'Medium',
    ingredients: [
      '3 lbs beef chuck roast, cut into 2-inch cubes',
      '6 dried New Mexico chiles',
      '4 dried guajillo chiles',
      '2 dried ancho chiles',
      '4 cups beef broth',
      '1 large onion, chopped',
      '6 cloves garlic',
      '2 teaspoons cumin',
      '1 teaspoon Mexican oregano',
      '1/2 teaspoon cinnamon',
      '2 tablespoons tomato paste',
      '2 tablespoons vegetable oil',
      'Salt and pepper to taste',
      'Flour for dusting',
      'Fresh cilantro and lime for serving'
    ],
    instructions: [
      'Remove stems and seeds from dried chiles. Toast them in a dry skillet over medium heat for 1-2 minutes until fragrant. Place in a bowl and cover with hot water for 20 minutes.',
      'Season beef cubes with salt and pepper, then dust lightly with flour. Heat oil in a large Dutch oven and brown beef in batches. Set aside.',
      'Drain soaked chiles (reserve 1 cup soaking liquid). Blend chiles with reserved liquid, half the onion, garlic, cumin, oregano, cinnamon, and tomato paste until smooth.',
      'In the same Dutch oven, sauté remaining onion until softened. Add chile sauce and cook for 5 minutes, stirring frequently.',
      'Return beef to pot and add beef broth. Bring to a boil, then reduce heat to low.',
      'Cover and simmer for 2-2.5 hours, stirring occasionally, until beef is very tender and sauce has thickened.',
      'If sauce is too thin, uncover and simmer for additional 15-20 minutes. Season with salt to taste.',
      'Serve with warm tortillas, rice, beans, fresh cilantro, and lime wedges.'
    ],
    tips: 'This authentic New Mexican-style chili is all about the rich red chile sauce - no tomatoes or beans! The dried chiles create a complex, smoky flavor. You can adjust the heat by choosing different chile varieties. This dish tastes even better the next day after flavors have melded.'
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
    id: "chili-" + p.id,
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