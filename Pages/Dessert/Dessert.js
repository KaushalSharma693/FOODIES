const product = [
  {
    id: 0,
    image: '/images/d1.jpeg',
    title: 'BEST BUCKEYES (PEANUT BUTTER AND CHOCOLATE CANDIES)',
    price: 1.80,
    cookTime: '30 min + 2 hours chill',
    servings: '48 candies',
    difficulty: 'Easy',
    ingredients: [
      '1½ cups creamy peanut butter',
      '½ cup (1 stick) butter, softened',
      '1 teaspoon vanilla extract',
      '3 cups powdered sugar',
      '12 oz semi-sweet chocolate chips',
      '2 tablespoons shortening or coconut oil',
      'Pinch of salt'
    ],
    instructions: [
      'Line a baking sheet with parchment paper. In a large bowl, mix peanut butter, softened butter, vanilla, and a pinch of salt until smooth and well combined.',
      'Gradually add powdered sugar, mixing until fully incorporated. The mixture should be thick and slightly crumbly but hold together when pressed.',
      'Roll the peanut butter mixture into 1-inch balls and place on the prepared baking sheet. Insert a toothpick into each ball and freeze for 30 minutes.',
      'In a microwave-safe bowl, combine chocolate chips and shortening. Microwave in 30-second intervals, stirring between each, until smooth and melted.',
      'Remove peanut butter balls from freezer. Holding the toothpick, dip each ball into the melted chocolate, leaving a small circle of peanut butter visible at the top (this creates the classic buckeye look).',
      'Return dipped candies to the parchment-lined sheet. Use your finger to smooth over the toothpick hole.',
      'Refrigerate for at least 1 hour until chocolate is completely set. Store in an airtight container in the refrigerator for up to 2 weeks.'
    ],
    tips: 'These Ohio State treats are named after the buckeye nut! Make sure your peanut butter mixture is cold before dipping to prevent it from sliding off. For easier dipping, use high-quality chocolate chips and don\'t overheat them. You can also use a fork instead of toothpicks for dipping.'
  },
  {
    id: 1,
    image: '/images/d2.webp',
    title: 'SPECIAL MOCHA CUPCAKES',
    price: 6.00,
    cookTime: '45 minutes',
    servings: '12 cupcakes',
    difficulty: 'Medium',
    ingredients: [
      '1¾ cups all-purpose flour',
      '1½ cups granulated sugar',
      '¾ cup unsweetened cocoa powder',
      '1½ teaspoons baking powder',
      '1½ teaspoons baking soda',
      '1 teaspoon salt',
      '2 large eggs',
      '1 cup whole milk',
      '½ cup vegetable oil',
      '2 teaspoons vanilla extract',
      '1 cup hot strong brewed coffee',
      'For Frosting: 1 cup butter, 3 cups powdered sugar, ⅓ cup cocoa powder, ⅓ cup heavy cream, 2 tablespoons instant espresso powder, 1 teaspoon vanilla'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Line a 12-cup muffin tin with cupcake liners.',
      'In a large bowl, whisk together flour, sugar, cocoa powder, baking powder, baking soda, and salt.',
      'In another bowl, beat eggs, milk, oil, and vanilla until well combined.',
      'Add the wet ingredients to the dry ingredients and mix until just combined. Slowly stir in the hot coffee (the batter will be thin).',
      'Fill cupcake liners about ⅔ full. Bake for 18-22 minutes, or until a toothpick inserted into the center comes out clean.',
      'Remove from oven and let cool in the pan for 5 minutes, then transfer to a wire rack to cool completely.',
      'For frosting: Beat butter until fluffy. Dissolve espresso powder in heavy cream. Gradually add powdered sugar and cocoa, alternating with the espresso cream. Add vanilla and beat until light and fluffy.',
      'Once cupcakes are completely cool, frost generously. Optional: garnish with chocolate shavings or coffee beans.'
    ],
    tips: 'The hot coffee enhances the chocolate flavor and creates an incredibly moist cupcake. Don\'t skip it! You can substitute the coffee with hot water if needed, but coffee gives the best flavor. Make sure cupcakes are completely cool before frosting or the frosting will melt.'
  },
  {
    id: 2,
    image: '/images/d3.jpg',
    title: 'LIGHT MY FIRE BROWNIE SUNDAES',
    price: 1.25,
    cookTime: '40 minutes',
    servings: '9 servings',
    difficulty: 'Easy',
    ingredients: [
      'For Brownies: 1 cup butter, 2 cups sugar, 4 large eggs, 1½ cups flour, ¾ cup cocoa powder, 1 teaspoon vanilla, ½ teaspoon salt, ¼ teaspoon cayenne pepper',
      'For Assembly: Vanilla ice cream, Hot fudge sauce, Whipped cream, Maraschino cherries, Crushed cinnamon candies or chili powder (optional)'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease a 9x9 inch baking pan and line with parchment paper.',
      'Melt butter in a microwave or on stovetop. Let cool slightly. Stir in sugar until well combined.',
      'Beat in eggs one at a time, mixing well after each addition. Add vanilla extract.',
      'In a separate bowl, whisk together flour, cocoa powder, salt, and cayenne pepper.',
      'Fold the dry ingredients into the wet ingredients until just combined. Don\'t overmix.',
      'Pour batter into prepared pan and smooth the top. Bake for 25-30 minutes, or until a toothpick inserted 2 inches from the edge comes out with just a few moist crumbs.',
      'Let brownies cool completely in the pan on a wire rack. Cut into 9 squares.',
      'To serve: Place a warm brownie in a bowl, top with a scoop of vanilla ice cream, drizzle with hot fudge, add whipped cream, and top with a cherry. Dust with a tiny pinch of chili powder for extra heat if desired.'
    ],
    tips: 'The cayenne pepper adds a subtle heat that complements the chocolate beautifully! You can adjust the amount based on your heat preference. Serve brownies slightly warm for the best contrast with cold ice cream. These brownies are fudgy and rich - perfect for sundaes!'
  },
  {
    id: 3,
    image: '/images/d4.jpg',
    title: 'RICE PUDDING',
    price: 3.97,
    cookTime: '1 hour',
    servings: '6 servings',
    difficulty: 'Easy',
    ingredients: [
      '4 cups whole milk',
      '½ cup uncooked white rice (short or medium grain)',
      '⅓ cup granulated sugar',
      '¼ teaspoon salt',
      '1 teaspoon vanilla extract',
      '½ teaspoon ground cinnamon',
      '2 large eggs, beaten',
      '⅓ cup raisins (optional)',
      'Ground cinnamon or nutmeg for serving'
    ],
    instructions: [
      'In a medium saucepan, combine milk, rice, sugar, and salt. Bring to a boil over medium-high heat, stirring frequently.',
      'Reduce heat to low and simmer, uncovered, for 45-50 minutes, stirring occasionally. The rice should be tender and the mixture should thicken.',
      'In a small bowl, whisk the beaten eggs. Slowly add about ½ cup of the hot rice mixture to the eggs, whisking constantly (this tempers the eggs so they don\'t scramble).',
      'Pour the egg mixture back into the saucepan with the remaining rice, stirring constantly.',
      'Cook for 2 more minutes, stirring continuously, until the pudding thickens further.',
      'Remove from heat and stir in vanilla extract and raisins if using.',
      'Transfer to a serving bowl or individual dishes. Serve warm or chilled, sprinkled with cinnamon or nutmeg.'
    ],
    tips: 'Stir frequently while cooking to prevent the rice from sticking to the bottom of the pan. The pudding will thicken more as it cools. For extra creaminess, you can add a splash of heavy cream at the end. This comforting dessert is perfect warm on a cold day or chilled for a refreshing treat.'
  },
  {
    id: 4,
    image: '/images/d5.jpeg',
    title: 'DECADENT RICE KRISPIES BAR',
    price: 13.89,
    cookTime: '20 min + chill time',
    servings: '16 bars',
    difficulty: 'Easy',
    ingredients: [
      '6 cups Rice Krispies cereal',
      '3 tablespoons butter',
      '4 cups mini marshmallows',
      '1 teaspoon vanilla extract',
      '1 cup semi-sweet chocolate chips',
      '1 cup peanut butter chips',
      '½ cup chopped pecans or walnuts (optional)',
      '½ cup mini M&Ms or chocolate candies',
      'Pinch of salt'
    ],
    instructions: [
      'Grease a 9x13 inch baking pan with butter or line with parchment paper.',
      'In a large pot, melt butter over low heat. Add marshmallows and stir constantly until completely melted and smooth.',
      'Remove from heat and stir in vanilla extract and a pinch of salt.',
      'Add Rice Krispies cereal and stir until evenly coated with the marshmallow mixture.',
      'Press half of the mixture into the prepared pan using a buttered spatula or wax paper.',
      'Melt chocolate chips and peanut butter chips together in the microwave in 30-second intervals, stirring until smooth. Pour over the first layer.',
      'Top with remaining Rice Krispies mixture, pressing gently. Sprinkle with nuts and candy pieces, pressing them lightly into the surface.',
      'Let cool at room temperature for 30 minutes, then refrigerate for 1 hour until firm. Cut into 16 squares and serve.'
    ],
    tips: 'Work quickly when mixing the cereal with marshmallows, as the mixture sets up fast! For easier pressing, butter your hands or use a piece of wax paper. These upgraded krispie treats are perfect for parties and can be customized with your favorite candy mix-ins. Store in an airtight container for up to 3 days.'
  },
  {
    id: 5,
    image: '/images/d6.jpg',
    title: 'NEW ORLEANS PRALINE CAKE',
    price: 3.29,
    cookTime: '1 hour 15 minutes',
    servings: '12 servings',
    difficulty: 'Medium',
    ingredients: [
      'For Cake: 1 box German chocolate cake mix, eggs, oil, water per package directions',
      'For Praline Filling: 1 cup evaporated milk, 1 cup sugar, 3 egg yolks, ½ cup butter, 1 teaspoon vanilla, 1 cup chopped pecans, 1 cup shredded coconut',
      'For Chocolate Ganache: 1 cup heavy cream, 8 oz semi-sweet chocolate chips, 2 tablespoons butter'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
      'Prepare cake mix according to package directions. Divide batter evenly between the two pans.',
      'Bake for 25-30 minutes or until a toothpick inserted in center comes out clean. Cool in pans for 10 minutes, then turn out onto wire racks to cool completely.',
      'For praline filling: In a medium saucepan, combine evaporated milk, sugar, egg yolks, and butter. Cook over medium heat, stirring constantly, until mixture thickens (about 12 minutes).',
      'Remove from heat and stir in vanilla, pecans, and coconut. Let cool to room temperature, stirring occasionally.',
      'For ganache: Heat heavy cream until just boiling. Pour over chocolate chips and butter. Let sit for 2 minutes, then stir until smooth and glossy.',
      'To assemble: Place one cake layer on a serving plate. Spread praline filling evenly over top. Add second cake layer.',
      'Pour chocolate ganache over the top, letting it drip down the sides. Garnish with extra pecans if desired. Refrigerate for 30 minutes before serving.'
    ],
    tips: 'This decadent cake is inspired by New Orleans pralines! The coconut-pecan filling is similar to traditional German chocolate cake but with a praline twist. Make sure the filling is completely cool before assembling or it will make the cake soggy. This cake is even better the next day after the flavors meld together.'
  },
  {
    id: 6,
    image: '/images/d7.jpg',
    title: 'DOUBLE CHOCOLATE FUDGE CAKE',
    price: 7.79,
    cookTime: '1 hour',
    servings: '10-12 servings',
    difficulty: 'Medium',
    ingredients: [
      'For Cake: 2 cups all-purpose flour, 2 cups sugar, ¾ cup cocoa powder, 2 teaspoons baking soda, 1 teaspoon baking powder, 1 teaspoon salt, 2 eggs, 1 cup strong coffee, 1 cup buttermilk, ½ cup vegetable oil, 1 teaspoon vanilla',
      'For Fudge Frosting: ½ cup butter, ⅔ cup cocoa powder, 3 cups powdered sugar, ⅓ cup milk, 1 teaspoon vanilla, Pinch of salt'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease and flour a 9x13 inch baking pan.',
      'In a large bowl, whisk together flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
      'Add eggs, coffee, buttermilk, oil, and vanilla. Beat on medium speed for 2 minutes (the batter will be thin).',
      'Pour batter into prepared pan. Bake for 35-40 minutes or until a toothpick inserted in center comes out clean.',
      'Cool cake completely in the pan on a wire rack.',
      'For frosting: Melt butter in a saucepan. Stir in cocoa powder until smooth. Remove from heat.',
      'Alternately add powdered sugar and milk, beating to spreading consistency. Stir in vanilla and salt.',
      'Spread frosting over cooled cake. For extra decadence, top with chocolate shavings or chopped nuts.'
    ],
    tips: 'The coffee enhances the chocolate flavor without making it taste like coffee. You can substitute with hot water if needed. This cake is incredibly moist and rich - perfect for chocolate lovers! It stays fresh for several days when covered. Serve with a glass of cold milk or a scoop of vanilla ice cream.'
  },
  {
    id: 7,
    image: '/images/d8.webp',
    title: 'EASY STRAWBERRY JELL-O PIE',
    price: 4.13,
    cookTime: '15 min + 4 hours chill',
    servings: '8 servings',
    difficulty: 'Easy',
    ingredients: [
      '1 (6 oz) package strawberry Jell-O',
      '1 cup boiling water',
      '2 cups vanilla ice cream',
      '1½ cups sliced fresh strawberries',
      '1 (9-inch) graham cracker crust',
      'Whipped cream for topping',
      'Fresh strawberries for garnish'
    ],
    instructions: [
      'In a large bowl, dissolve the strawberry Jell-O in 1 cup of boiling water, stirring until completely dissolved.',
      'Add the vanilla ice cream by spoonfuls, stirring until the ice cream is melted and the mixture is smooth.',
      'Refrigerate the mixture for about 15-20 minutes, stirring occasionally, until it\'s slightly thickened (the consistency of unbeaten egg whites).',
      'Fold in the sliced fresh strawberries gently.',
      'Pour the mixture into the graham cracker crust, spreading evenly.',
      'Refrigerate for at least 4 hours or until firm and set.',
      'Before serving, top with whipped cream and garnish with fresh strawberry slices. Keep refrigerated until ready to serve.'
    ],
    tips: 'This retro no-bake pie is perfect for summer! You can use any flavor of Jell-O and matching fruit - try raspberry, cherry, or orange. Make sure not to skip the chilling step after mixing the Jell-O and ice cream, or the fruit will sink to the bottom. For a fancier presentation, pipe the whipped cream in rosettes around the edge.'
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
    id: "dessert-" + p.id,
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