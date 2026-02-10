const product = [
  {
    id: 0,
    image: '/images/drk1.jpg',
    title: 'SUMMER BERRY MOJITO',
    price: 20,
    type: 'Cocktail',
    prepTime: '5 mins',
    servings: '1 drink',
    difficulty: 'Easy',
    ingredients: [
      '10-12 fresh mint leaves',
      '1/4 cup mixed berries (strawberries, raspberries, blueberries)',
      '2 tablespoons fresh lime juice',
      '1 tablespoon simple syrup',
      '2 oz white rum',
      '4 oz club soda',
      'Ice cubes',
      '1 lime wedge'
    ],
    instructions: [
      'In a tall glass, muddle mint leaves and mixed berries together until berries are crushed and mint is fragrant.',
      'Add lime juice and simple syrup, muddle gently to combine.',
      'Fill the glass with ice cubes.',
      'Pour the white rum over the ice.',
      'Top with club soda and stir gently to combine.',
      'Give it a final stir from bottom to top to distribute the berries.'
    ],
    garnish: 'Fresh mint sprig, mixed berries, and a lime wheel on the rim',
    tips: 'Use frozen berries if fresh aren\'t available - they\'ll also help keep the drink cold! For a non-alcoholic version, replace rum with extra club soda and add a splash of berry juice. The key to a great mojito is not over-muddling the mint - you want to release the oils, not shred the leaves.'
  },
  {
    id: 1,
    image: '/images/drk0.jpeg',
    title: 'CUBAN MOJITOS',
    price: 6,
    type: 'Classic Cocktail',
    prepTime: '5 mins',
    servings: '1 drink',
    difficulty: 'Easy',
    ingredients: [
      '10 fresh mint leaves',
      '1/2 lime, cut into 4 wedges',
      '2 tablespoons white sugar (or 1 oz simple syrup)',
      '1 cup ice cubes',
      '1½ oz white rum',
      '½ cup club soda'
    ],
    instructions: [
      'Place mint leaves and 1 lime wedge into a sturdy glass.',
      'Use a muddler to crush the mint and lime to release the mint oils and lime juice.',
      'Add 2 more lime wedges and the sugar, muddle again.',
      'Fill the glass almost to the top with ice.',
      'Pour the rum over the ice.',
      'Fill the glass with club soda.',
      'Stir vigorously to mix and lift the mint from the bottom.',
      'Taste and add more sugar if needed.'
    ],
    garnish: 'Remaining lime wedge and a fresh mint sprig',
    tips: 'The authentic Cuban mojito uses spearmint (yerba buena). White rum is traditional - avoid dark rum as it changes the flavor profile. For the best flavor, make simple syrup instead of using granulated sugar. Crush the ice if you want a slushier texture.'
  },
  {
    id: 2,
    image: '/images/drk3.jpeg',
    title: 'FROZEN MANGO MARGARITA',
    price: 19.99,
    type: 'Frozen Cocktail',
    prepTime: '10 mins',
    servings: '4 drinks',
    difficulty: 'Easy',
    ingredients: [
      '3 cups frozen mango chunks',
      '1/2 cup tequila (silver/blanco)',
      '1/4 cup triple sec or Cointreau',
      '1/4 cup fresh lime juice',
      '2 tablespoons agave nectar or simple syrup',
      '2 cups ice',
      'Tajín or salt for rim',
      'Lime wedges for garnish'
    ],
    instructions: [
      'Rim glasses with lime wedge and dip in Tajín or salt. Set aside.',
      'In a high-powered blender, combine frozen mango, tequila, triple sec, lime juice, and agave nectar.',
      'Add ice and blend on high until smooth and slushy, about 30-45 seconds.',
      'Taste and adjust sweetness with more agave if needed.',
      'Pour into prepared glasses immediately.'
    ],
    garnish: 'Fresh mango slice, lime wheel, and a sprinkle of Tajín',
    tips: 'For a sweeter version, add an extra tablespoon of agave. Use frozen mango for the best texture - fresh mango will make it too watery unless you add more ice. For a spicy kick, muddle fresh jalapeño slices in the blender. Make it virgin by omitting the alcohol and adding mango juice.'
  },
  {
    id: 3,
    image: '/images/drk4.webp',
    title: 'CHAMPAGNE SORBET FLOATS',
    price: 25,
    type: 'Elegant Drink',
    prepTime: '3 mins',
    servings: '4 floats',
    difficulty: 'Very Easy',
    ingredients: [
      '1 bottle (750ml) champagne or prosecco, chilled',
      '1 pint raspberry or lemon sorbet',
      '1 pint mango or peach sorbet',
      'Fresh berries for garnish',
      'Fresh mint leaves (optional)'
    ],
    instructions: [
      'Chill champagne flutes or wine glasses in the freezer for 10 minutes before serving.',
      'Scoop 2-3 small balls of sorbet into each glass (mix flavors or use one).',
      'Slowly pour champagne over the sorbet, allowing the bubbles to settle.',
      'Add more champagne to fill the glass about 3/4 full.',
      'Serve immediately while the sorbet is still frozen and champagne is bubbly.'
    ],
    garnish: 'Fresh berries, edible flowers, or a sprig of mint',
    tips: 'This is perfect for brunch, weddings, or New Year\'s! The key is to pour slowly to avoid overflow. Try different sorbet flavors - strawberry, blood orange, or passion fruit all work beautifully. For a budget-friendly option, use prosecco or cava instead of champagne. Make sure your champagne is well-chilled before making these.'
  },
  {
    id: 4,
    image: '/images/drk5.jpg',
    title: 'MINT JULEP',
    price: 23,
    type: 'Classic Cocktail',
    prepTime: '5 mins',
    servings: '1 drink',
    difficulty: 'Easy',
    ingredients: [
      '8-10 fresh mint leaves, plus extra for garnish',
      '1/2 oz simple syrup',
      '2 oz bourbon whiskey',
      'Crushed ice',
      'Powdered sugar for dusting (optional)'
    ],
    instructions: [
      'In a julep cup or rocks glass, gently muddle mint leaves with simple syrup.',
      'Don\'t over-muddle - just press enough to release the oils.',
      'Fill the cup halfway with crushed ice.',
      'Pour bourbon over the ice.',
      'Add more crushed ice to fill the cup, mounding it on top.',
      'Stir gently until the outside of the cup frosts.',
      'Add more ice if needed to maintain the mound.'
    ],
    garnish: 'Large bouquet of fresh mint and a dusting of powdered sugar',
    tips: 'The Mint Julep is the official drink of the Kentucky Derby! Use quality bourbon - it makes a huge difference. Crushed ice is essential for the proper dilution and temperature. A silver julep cup is traditional and keeps the drink colder longer. Make your own simple syrup for the best flavor: equal parts sugar and water, heated until dissolved.'
  },
  {
    id: 5,
    image: '/images/drk6.jpg',
    title: 'LAVENDER GIN & TONIC BY THE PITCHER',
    price: 27.99,
    type: 'Pitcher Cocktail',
    prepTime: '10 mins',
    servings: '8 drinks',
    difficulty: 'Easy',
    ingredients: [
      '2 cups (16 oz) gin',
      '1/2 cup lavender simple syrup',
      '1/4 cup fresh lemon juice',
      '4 cups tonic water, chilled',
      'Ice cubes',
      '2 lemons, sliced',
      '1/4 cup fresh or dried lavender buds'
    ],
    instructions: [
      'To make lavender simple syrup: Combine 1 cup water, 1 cup sugar, and 3 tablespoons dried lavender in a saucepan. Bring to a boil, reduce heat, and simmer for 5 minutes. Strain and cool completely.',
      'In a large pitcher, combine gin, lavender simple syrup, and lemon juice.',
      'Add lemon slices and lavender buds.',
      'Refrigerate for at least 30 minutes to infuse flavors.',
      'When ready to serve, add ice to the pitcher.',
      'Top with chilled tonic water and stir gently.',
      'Pour into glasses over ice.'
    ],
    garnish: 'Lemon wheel, fresh lavender sprig, and additional ice',
    tips: 'Make the lavender syrup ahead of time and store in the fridge for up to 2 weeks. Use a good quality tonic water - it makes a difference! For a less sweet version, reduce the lavender syrup to 1/3 cup. This is perfect for garden parties and spring/summer gatherings. Don\'t add the tonic until just before serving to maintain carbonation.'
  },
  {
    id: 6,
    image: '/images/drk8.webp',
    title: 'ELDERFLOWER COCKTAIL',
    price: 9.99,
    type: 'Summer Cocktail',
    prepTime: '5 mins',
    servings: '1 drink',
    difficulty: 'Easy',
    ingredients: [
      '1½ oz vodka',
      '¾ oz elderflower liqueur (St. Germain)',
      '½ oz fresh lime juice',
      '3 oz prosecco or champagne',
      'Ice cubes',
      '2-3 fresh cucumber slices'
    ],
    instructions: [
      'In a cocktail shaker, muddle cucumber slices gently.',
      'Add vodka, elderflower liqueur, and lime juice.',
      'Fill shaker with ice and shake vigorously for 15 seconds.',
      'Strain into a champagne flute or coupe glass.',
      'Top with prosecco.',
      'Give it a gentle stir.'
    ],
    garnish: 'Cucumber ribbon, edible flowers, or a lime twist',
    tips: 'St. Germain is the most popular elderflower liqueur, but you can use alternatives. For a lighter version, use more prosecco and less vodka. This cocktail is incredibly refreshing and perfect for warm weather. The floral notes pair beautifully with light appetizers and seafood. Make it a mocktail by replacing vodka with elderflower cordial and using sparkling water instead of prosecco.'
  },
  {
    id: 7,
    image: '/images/drk8.jpeg',
    title: 'FROZEN STRAWBERRY DAIQUIRI',
    price: 2.29,
    type: 'Frozen Cocktail',
    prepTime: '5 mins',
    servings: '2 drinks',
    difficulty: 'Easy',
    ingredients: [
      '2 cups frozen strawberries',
      '3 oz white rum',
      '2 oz fresh lime juice',
      '1½ oz simple syrup',
      '1 cup ice',
      'Fresh strawberries for garnish'
    ],
    instructions: [
      'Add frozen strawberries, rum, lime juice, and simple syrup to a blender.',
      'Add ice and blend on high speed until smooth and slushy, about 30-45 seconds.',
      'If too thick, add a splash of water or rum. If too thin, add more ice or frozen strawberries.',
      'Taste and adjust sweetness with more simple syrup if needed.',
      'Pour into chilled glasses immediately.'
    ],
    garnish: 'Fresh strawberry on the rim and a lime wheel',
    tips: 'The classic daiquiri is one of Hemingway\'s favorite drinks! Use frozen strawberries for the best texture - they create a perfectly slushy consistency without watering down the drink. For a sweeter version, use strawberry simple syrup. Fresh strawberries can be used but will require more ice. Add a handful of fresh basil for an herbal twist. This is perfect for pool parties and summer entertaining!'
  }
];

const categories = product.map(item => item.title);

// Render products
document.querySelector("#root").innerHTML = product.map((item, i) => {
  const { image, title, price, type } = item;
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
            <i class="fa-solid fa-cocktail"></i> Recipe
          </button>
        </div>
      </div>
    </div>`;
}).join('');

// Add to cart function
function addtocart(i) {
  const p = product[i];
  addToCart({
    id: "drink-" + p.id,
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
  document.getElementById('drinkType').textContent = recipe.type;
  document.getElementById('prepTime').textContent = `Prep: ${recipe.prepTime}`;
  document.getElementById('servings').textContent = `Serves: ${recipe.servings}`;
  document.getElementById('difficulty').textContent = recipe.difficulty;
  
  // Populate ingredients
  const ingredientsList = document.getElementById('ingredients');
  ingredientsList.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
  
  // Populate instructions
  const instructionsList = document.getElementById('instructions');
  instructionsList.innerHTML = recipe.instructions.map(inst => `<li>${inst}</li>`).join('');
  
  // Populate garnish
  document.getElementById('garnish').textContent = recipe.garnish;
  
  // Populate tips
  document.getElementById('tips').textContent = recipe.tips;
  
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