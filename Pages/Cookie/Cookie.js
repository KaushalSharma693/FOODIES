const product = [
  {
    id: 0,
    image: '/images/C1.jpeg',
    title: 'OATMEAL RAISIN COOKIES',
    price: 1.5,
    prepTime: '15 mins',
    cookTime: '12 mins',
    servings: '24 cookies',
    ingredients: [
      '1 cup butter, softened',
      '1 cup packed brown sugar',
      '½ cup white sugar',
      '2 eggs',
      '1 teaspoon vanilla extract',
      '1½ cups all-purpose flour',
      '1 teaspoon baking soda',
      '1 teaspoon ground cinnamon',
      '½ teaspoon salt',
      '3 cups quick-cooking oats',
      '1 cup raisins'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Line baking sheets with parchment paper.',
      'In a large bowl, cream together butter, brown sugar, and white sugar until fluffy.',
      'Beat in eggs one at a time, then stir in vanilla extract.',
      'In a separate bowl, combine flour, baking soda, cinnamon, and salt.',
      'Gradually blend the dry ingredients into the butter mixture.',
      'Stir in oats and raisins until well combined.',
      'Drop rounded tablespoons of dough onto prepared baking sheets.',
      'Bake for 10-12 minutes until golden brown.',
      'Cool on baking sheet for 5 minutes before transferring to a wire rack.'
    ],
    tips: 'For chewier cookies, slightly underbake them. You can substitute raisins with dried cranberries or chocolate chips. Store in an airtight container for up to 5 days.'
  },
  {
    id: 1,
    image: '/images/C2.webp',
    title: 'FUDGE CRINKLES (CAKE MIX COOKIES)',
    price: 29.99,
    prepTime: '10 mins',
    cookTime: '10 mins',
    servings: '36 cookies',
    ingredients: [
      '1 box chocolate cake mix',
      '2 eggs',
      '½ cup vegetable oil',
      '1 cup powdered sugar (for rolling)'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Line baking sheets with parchment paper.',
      'In a large bowl, combine cake mix, eggs, and vegetable oil. Mix until well combined.',
      'The dough will be thick and sticky.',
      'Place powdered sugar in a shallow bowl.',
      'Roll dough into 1-inch balls, then roll generously in powdered sugar.',
      'Place cookies 2 inches apart on prepared baking sheets.',
      'Bake for 8-10 minutes. Cookies will be soft and crackled.',
      'Cool on baking sheet for 5 minutes before transferring to a wire rack.',
      'Dust with additional powdered sugar if desired.'
    ],
    tips: 'These cookies are meant to be soft and fudgy. Don\'t overbake! You can use any flavor of cake mix for variety. They\'re perfect for last-minute cookie cravings.'
  },
  {
    id: 2,
    image: '/images/C3.jpeg',
    title: 'CHEWY CHOCOLATE COOKIES',
    price: 3.49,
    prepTime: '20 mins',
    cookTime: '11 mins',
    servings: '48 cookies',
    ingredients: [
      '1 cup butter, softened',
      '1½ cups white sugar',
      '2 eggs',
      '2 teaspoons vanilla extract',
      '2 cups all-purpose flour',
      '⅔ cup cocoa powder',
      '¾ teaspoon baking soda',
      '¼ teaspoon salt',
      '2 cups chocolate chips',
      '½ cup chopped walnuts (optional)'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C).',
      'In a large bowl, beat butter and sugar until light and fluffy.',
      'Add eggs and vanilla, beat well.',
      'In a separate bowl, combine flour, cocoa, baking soda, and salt.',
      'Gradually blend dry ingredients into butter mixture.',
      'Stir in chocolate chips and nuts if using.',
      'Drop by rounded teaspoons onto ungreased cookie sheets.',
      'Bake for 8-11 minutes. Do not overbake - cookies should be soft.',
      'Cool slightly on cookie sheets before removing to wire racks.'
    ],
    tips: 'For extra chewy cookies, use melted butter instead of softened. Add a pinch of espresso powder to enhance the chocolate flavor. Store in an airtight container with a slice of bread to keep them soft.'
  },
  {
    id: 3,
    image: '/images/C4.jpeg',
    title: 'WORLD\'S BEST CHOCOLATE CHIP COOKIES',
    price: 2.36,
    prepTime: '15 mins',
    cookTime: '10 mins',
    servings: '60 cookies',
    ingredients: [
      '1 cup butter, softened',
      '1 cup white sugar',
      '1 cup packed brown sugar',
      '2 eggs',
      '2 teaspoons vanilla extract',
      '1 teaspoon baking soda',
      '2 teaspoons hot water',
      '½ teaspoon salt',
      '3 cups all-purpose flour',
      '2 cups semisweet chocolate chips',
      '1 cup chopped walnuts (optional)'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C).',
      'Cream together the butter, white sugar, and brown sugar until smooth.',
      'Beat in eggs one at a time, then stir in vanilla.',
      'Dissolve baking soda in hot water and add to batter along with salt.',
      'Stir in flour, chocolate chips, and nuts.',
      'Drop large spoonfuls onto ungreased pans.',
      'Bake for about 10 minutes or until edges are golden brown.',
      'Cool on baking sheet for 2 minutes before removing to a wire rack.'
    ],
    tips: 'Use room temperature ingredients for best results. Chill the dough for 30 minutes before baking for thicker cookies. Mix different types of chocolate chips for variety.'
  },
  {
    id: 4,
    image: '/images/C5.jpeg',
    title: 'SAUSAGE BALLS',
    price: 0.89,
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: '50 balls',
    ingredients: [
      '1 pound ground pork sausage',
      '2 cups shredded sharp Cheddar cheese',
      '2 cups baking mix (like Bisquick)',
      '½ cup milk (if needed for moisture)'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Line baking sheets with parchment paper.',
      'In a large bowl, combine sausage, cheese, and baking mix.',
      'Mix with your hands until well combined. Add milk if mixture is too dry.',
      'Roll mixture into 1-inch balls.',
      'Place on prepared baking sheets about 1 inch apart.',
      'Bake for 20-25 minutes until golden brown and cooked through.',
      'Serve warm or at room temperature.'
    ],
    tips: 'These freeze beautifully! Make a double batch and freeze half for later. Try using different cheese varieties like pepper jack for a kick. Perfect for parties and game day!'
  },
  {
    id: 5,
    image: '/images/C6.jpeg',
    title: 'CHEESECAKE COOKIES',
    price: 3.75,
    prepTime: '25 mins',
    cookTime: '12 mins',
    servings: '24 cookies',
    ingredients: [
      '½ cup butter, softened',
      '8 oz cream cheese, softened',
      '1 cup sugar',
      '1 egg',
      '1 teaspoon vanilla extract',
      '2 cups all-purpose flour',
      '½ teaspoon baking powder',
      '¼ teaspoon salt',
      '1 cup graham cracker crumbs',
      'Cherry or strawberry preserves for topping'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C).',
      'Beat butter, cream cheese, and sugar until light and fluffy.',
      'Add egg and vanilla, beat well.',
      'In a separate bowl, combine flour, baking powder, and salt.',
      'Gradually add dry ingredients to cream cheese mixture.',
      'Roll dough into 1-inch balls and roll in graham cracker crumbs.',
      'Place on ungreased baking sheets and make an indentation in center of each.',
      'Fill indentation with ½ teaspoon of preserves.',
      'Bake 12-15 minutes until edges are lightly golden.',
      'Cool completely on wire racks.'
    ],
    tips: 'Don\'t skip chilling the cream cheese - it should be softened but not warm. You can use any flavor of preserves you like. These taste even better the next day!'
  },
  {
    id: 6,
    image: '/images/C7.webp',
    title: 'GRANNY\'S SUGAR COOKIES',
    price: 35,
    prepTime: '20 mins',
    cookTime: '8 mins',
    servings: '36 cookies',
    ingredients: [
      '1 cup butter, softened',
      '1½ cups powdered sugar',
      '1 egg',
      '1 teaspoon vanilla extract',
      '½ teaspoon almond extract',
      '2½ cups all-purpose flour',
      '1 teaspoon baking soda',
      '1 teaspoon cream of tartar',
      'Colored sugar for decorating'
    ],
    instructions: [
      'Cream together butter and powdered sugar until light and fluffy.',
      'Beat in egg, vanilla, and almond extract.',
      'In a separate bowl, sift together flour, baking soda, and cream of tartar.',
      'Gradually blend dry ingredients into butter mixture.',
      'Refrigerate dough for 2-3 hours or overnight.',
      'Preheat oven to 375°F (190°C).',
      'Roll out dough on floured surface to ¼ inch thickness.',
      'Cut with cookie cutters and sprinkle with colored sugar.',
      'Bake 7-8 minutes until edges are barely golden.',
      'Cool on baking sheet for 2 minutes before transferring to wire rack.'
    ],
    tips: 'This dough is perfect for decorating! The almond extract gives it a classic sugar cookie flavor. Don\'t overbake - they should stay pale. Great for holidays!'
  },
  {
    id: 7,
    image: '/images/C8.webp',
    title: 'ELOISE\'S EASY SUGAR COOKIES',
    price: 6.00,
    prepTime: '15 mins',
    cookTime: '10 mins',
    servings: '30 cookies',
    ingredients: [
      '2¾ cups all-purpose flour',
      '1 teaspoon baking soda',
      '½ teaspoon baking powder',
      '1 cup butter, softened',
      '1½ cups white sugar',
      '1 egg',
      '1 teaspoon vanilla extract',
      '3-4 tablespoons sugar (for rolling)'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'In a bowl, stir together flour, baking soda, and baking powder.',
      'In a large bowl, cream together butter and 1½ cups sugar until light and fluffy.',
      'Beat in egg and vanilla.',
      'Gradually blend in dry ingredients.',
      'Roll rounded teaspoons of dough into balls.',
      'Roll balls in remaining sugar.',
      'Place cookies 2 inches apart on ungreased cookie sheets.',
      'Bake 8-10 minutes or until golden.',
      'Let stand on cookie sheet for 2 minutes before removing to cool on wire racks.'
    ],
    tips: 'For flatter cookies, press down balls with the bottom of a glass dipped in sugar before baking. These are perfect plain or can be decorated with icing. Kids love helping roll these in sugar!'
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
            <i class="fa-solid fa-book-open"></i> Recipe
          </button>
        </div>
      </div>
    </div>`;
}).join('');

// Add to cart function
function addtocart(i) {
  const p = product[i];
  addToCart({
    id: "cookie-" + p.id,
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
  document.getElementById('prepTime').textContent = `Prep: ${recipe.prepTime}`;
  document.getElementById('cookTime').textContent = `Cook: ${recipe.cookTime}`;
  document.getElementById('servings').textContent = `Makes: ${recipe.servings}`;
  
  // Populate ingredients
  const ingredientsList = document.getElementById('ingredients');
  ingredientsList.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
  
  // Populate instructions
  const instructionsList = document.getElementById('instructions');
  instructionsList.innerHTML = recipe.instructions.map(inst => `<li>${inst}</li>`).join('');
  
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