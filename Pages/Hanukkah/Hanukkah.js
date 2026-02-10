const product = [
  {
    id: 0,
    image: '/images/d1.webp',
    title: 'SUFGANIYOT',
    price: 5.25,
    tradition: 'Classic Tradition',
    prepTime: '30 mins + rising',
    cookTime: '20 mins',
    servings: '16 donuts',
    ingredients: [
      '3½ cups all-purpose flour',
      '¼ cup granulated sugar',
      '1 packet (2¼ tsp) active dry yeast',
      '¾ cup warm milk (110°F)',
      '2 eggs',
      '¼ cup butter, softened',
      '1 teaspoon vanilla extract',
      '½ teaspoon salt',
      'Vegetable oil for frying',
      '1 cup strawberry or raspberry jam',
      'Powdered sugar for dusting'
    ],
    instructions: [
      'In bowl, combine warm milk, 1 tablespoon sugar, and yeast. Let sit 10 minutes until foamy.',
      'In large bowl, mix flour, remaining sugar, and salt.',
      'Add yeast mixture, eggs, butter, and vanilla to flour. Mix until dough forms.',
      'Knead dough on floured surface for 8-10 minutes until smooth and elastic.',
      'Place in greased bowl, cover, and let rise 1-2 hours until doubled.',
      'Roll dough to ½ inch thickness. Cut into 3-inch rounds.',
      'Place on baking sheet, cover, and let rise 30 minutes.',
      'Heat oil to 350°F in deep pot.',
      'Fry donuts 2-3 minutes per side until golden brown.',
      'Drain on paper towels and cool completely.',
      'Fill pastry bag with jam. Insert tip into side of each donut and fill with jam.',
      'Dust generously with powdered sugar before serving.'
    ],
    tips: 'Don\'t skip the second rise - it makes them extra fluffy! The oil temperature is crucial - use a thermometer. Fill just before serving for the freshest donuts. Try different jams like apricot or custard for variety. These are best eaten the same day but can be frozen unfilled.',
    history: 'Sufganiyot are jelly donuts traditionally eaten during Hanukkah. They\'re fried in oil to commemorate the miracle of the oil that burned for eight days in the Temple. In Israel, bakeries sell millions of these during Hanukkah season, making them an iconic symbol of the holiday.'
  },
  {
    id: 1,
    image: '/images/d2.webp',
    title: 'POTATO PANCAKES (LATKES)',
    price: 48.18,
    tradition: 'Essential Tradition',
    prepTime: '20 mins',
    cookTime: '30 mins',
    servings: '16-20 latkes',
    ingredients: [
      '2 lbs russet potatoes',
      '1 medium onion',
      '2 large eggs, beaten',
      '¼ cup all-purpose flour or matzo meal',
      '1½ teaspoons salt',
      '½ teaspoon black pepper',
      'Vegetable oil for frying',
      'Sour cream for serving',
      'Applesauce for serving',
      'Fresh chives (optional)'
    ],
    instructions: [
      'Peel potatoes and onion. Grate using large holes of box grater or food processor.',
      'Place grated potatoes and onion in clean kitchen towel. Squeeze out as much liquid as possible.',
      'Transfer to large bowl. Add beaten eggs, flour, salt, and pepper. Mix well.',
      'Heat ¼ inch oil in large skillet over medium-high heat.',
      'Drop ¼ cup portions of mixture into hot oil. Flatten with spatula.',
      'Fry 3-4 minutes per side until golden brown and crispy.',
      'Transfer to paper towel-lined plate to drain.',
      'Keep warm in 200°F oven while frying remaining batches.',
      'Serve hot with sour cream and applesauce on the side.',
      'Garnish with fresh chives if desired.'
    ],
    tips: 'The key to crispy latkes is removing ALL the moisture from the potatoes! Work quickly after grating to prevent browning. Add a little baking powder for extra crispiness. These can be made ahead and reheated in a 400°F oven for 10 minutes. For a twist, try sweet potato latkes!',
    history: 'Latkes are the most iconic Hanukkah food, fried in oil to symbolize the miracle of the oil. While potato latkes are most common today, the tradition began with cheese pancakes. Eastern European Jews popularized the potato version in the 19th century when potatoes became widely available.'
  },
  {
    id: 2,
    image: '/images/d3.webp',
    title: 'DAD\'S BEST BRISKET',
    price: 11.49,
    tradition: 'Family Favorite',
    prepTime: '20 mins',
    cookTime: '4 hours',
    servings: '8-10 servings',
    ingredients: [
      '4-5 lb beef brisket (first cut)',
      '2 large onions, sliced',
      '4 cloves garlic, minced',
      '2 cups beef broth',
      '1 cup red wine',
      '3 tablespoons tomato paste',
      '2 tablespoons brown sugar',
      '2 tablespoons paprika',
      '1 tablespoon onion powder',
      '1 tablespoon garlic powder',
      '2 teaspoons salt',
      '1 teaspoon black pepper',
      '3 bay leaves',
      '2 tablespoons vegetable oil'
    ],
    instructions: [
      'Preheat oven to 325°F.',
      'Mix paprika, onion powder, garlic powder, salt, and pepper. Rub all over brisket.',
      'Heat oil in large Dutch oven over medium-high heat.',
      'Sear brisket 4-5 minutes per side until browned. Remove and set aside.',
      'In same pot, sauté onions until softened, about 5 minutes.',
      'Add garlic and cook 1 minute.',
      'Stir in tomato paste, cook 2 minutes.',
      'Add beef broth, wine, brown sugar, and bay leaves. Bring to simmer.',
      'Return brisket to pot, fat side up.',
      'Cover and braise in oven for 3-4 hours until fork-tender.',
      'Let rest 15 minutes before slicing against the grain.',
      'Serve with pan sauce spooned over top.'
    ],
    tips: 'Brisket is even better the next day! Make it a day ahead, refrigerate, then slice and reheat. This makes slicing easier and flavors deepen. Always slice against the grain for tender meat. Save leftovers for amazing brisket sandwiches. For extra richness, add dried fruits like prunes or apricots.',
    history: 'Brisket became a Hanukkah staple in Jewish-American homes as an affordable yet impressive centerpiece. The long, slow cooking makes it perfect for holiday entertaining. Many families have treasured brisket recipes passed down through generations, each with their own secret ingredients.'
  },
  {
    id: 3,
    image: '/images/d4.webp',
    title: 'RAINBOW LATKES',
    price: 22.00,
    tradition: 'Modern Twist',
    prepTime: '25 mins',
    cookTime: '35 mins',
    servings: '20 latkes',
    ingredients: [
      '2 medium russet potatoes',
      '1 medium sweet potato',
      '1 medium beet, peeled',
      '2 medium carrots',
      '1 medium zucchini',
      '1 small onion',
      '3 eggs, beaten',
      '½ cup all-purpose flour',
      '2 teaspoons salt',
      '1 teaspoon black pepper',
      'Vegetable oil for frying',
      'Sour cream and fresh herbs for serving'
    ],
    instructions: [
      'Grate all vegetables using large holes of box grater. Keep beets separate to avoid coloring.',
      'Divide vegetables into separate bowls (or mix for rainbow effect).',
      'Squeeze excess moisture from each batch using kitchen towel.',
      'Mix eggs, flour, salt, and pepper in small bowl.',
      'Divide egg mixture among vegetable bowls and mix each.',
      'Heat ¼ inch oil in large skillet over medium-high heat.',
      'For solid color latkes: drop ¼ cup of one vegetable mixture and flatten.',
      'For rainbow latkes: layer small amounts of different vegetables on spatula before adding to pan.',
      'Fry 3-4 minutes per side until golden and crispy.',
      'Drain on paper towels.',
      'Serve immediately with sour cream and fresh herbs.'
    ],
    tips: 'Work with one vegetable at a time to keep colors vibrant. The beet will stain, so use separate utensils! These are not only beautiful but also nutritious. Kids love the bright colors. Try serving with different colored sour creams (mix in beet juice or herbs). Perfect for Instagram!',
    history: 'Rainbow latkes are a modern innovation that celebrates diversity and adds nutrition to the traditional recipe. They maintain the essential Hanukkah symbolism of fried foods while bringing a contemporary, health-conscious twist to the Festival of Lights celebration.'
  },
  {
    id: 4,
    image: '/images/d5.webp',
    title: 'HANUKKAH HONEY PUFFS (BIMUELOS)',
    price: 6.00,
    tradition: 'Sephardic Tradition',
    prepTime: '15 mins + resting',
    cookTime: '20 mins',
    servings: '24 puffs',
    ingredients: [
      '1 cup water',
      '½ cup vegetable oil',
      '1 tablespoon sugar',
      '½ teaspoon salt',
      '1 cup all-purpose flour',
      '4 eggs',
      'Oil for deep frying',
      '1 cup honey',
      '½ cup water (for honey syrup)',
      '1 teaspoon lemon juice',
      'Cinnamon for dusting',
      'Chopped pistachios (optional)'
    ],
    instructions: [
      'In saucepan, bring water, oil, sugar, and salt to boil.',
      'Remove from heat and add flour all at once. Stir vigorously until mixture forms ball.',
      'Let cool 5 minutes.',
      'Add eggs one at a time, beating well after each addition until smooth.',
      'Let batter rest 30 minutes.',
      'For honey syrup: combine honey, water, and lemon juice. Simmer 5 minutes. Keep warm.',
      'Heat 2 inches oil in deep pot to 375°F.',
      'Drop tablespoons of batter into hot oil.',
      'Fry 3-4 minutes, turning, until golden and puffed.',
      'Drain on paper towels.',
      'While warm, dip in honey syrup or drizzle over top.',
      'Sprinkle with cinnamon and pistachios if desired.'
    ],
    tips: 'The batter should be thick but pipeable. If too thick, add a little water. These puff up dramatically when fried - don\'t overcrowd the pot! Serve warm for best texture. You can also dust with powdered sugar instead of honey. In Sephardic tradition, these are often made in large batches for the whole community.',
    history: 'Bimuelos are a traditional Sephardic (Spanish/Mediterranean Jewish) Hanukkah treat. Dating back centuries, they were brought to various countries by Spanish Jews. The honey coating symbolizes the sweetness of the holiday and the miracle of Hanukkah. Each community has its own variation of this beloved recipe.'
  },
  {
    id: 5,
    image: '/images/d6.webp',
    title: 'RUGELACH',
    price: 8.77,
    tradition: 'Ashkenazi Classic',
    prepTime: '30 mins + chilling',
    cookTime: '25 mins',
    servings: '48 cookies',
    ingredients: [
      '8 oz cream cheese, softened',
      '1 cup (2 sticks) butter, softened',
      '2 cups all-purpose flour',
      '¼ cup sugar',
      '¼ teaspoon salt',
      '⅔ cup apricot preserves',
      '⅔ cup raspberry preserves',
      '1 cup chopped walnuts',
      '1 cup mini chocolate chips',
      '½ cup granulated sugar mixed with 2 teaspoons cinnamon',
      '1 egg beaten with 1 tablespoon water',
      'Coarse sugar for sprinkling'
    ],
    instructions: [
      'Beat cream cheese and butter until fluffy.',
      'Add flour, sugar, and salt. Mix until dough forms.',
      'Divide dough into 4 equal portions. Flatten into disks.',
      'Wrap each in plastic and refrigerate at least 2 hours (or overnight).',
      'Preheat oven to 350°F. Line baking sheets with parchment.',
      'Roll one disk into 9-inch circle on floured surface.',
      'Spread with preserves, sprinkle with nuts, chocolate chips, and cinnamon sugar.',
      'Cut circle into 12 wedges like a pizza.',
      'Roll each wedge from wide end to point.',
      'Place on baking sheet, point side down. Curve slightly into crescent.',
      'Brush with egg wash and sprinkle with coarse sugar.',
      'Bake 22-25 minutes until golden brown.',
      'Cool on wire rack. Repeat with remaining dough.'
    ],
    tips: 'Cold dough is easier to work with - don\'t skip the chilling! Mix and match your fillings - try Nutella, cinnamon-raisin, or fig. These freeze beautifully before or after baking. For a fancy presentation, drizzle with chocolate. Traditional flavors are apricot and walnut or cinnamon-raisin.',
    history: 'Rugelach originated in Poland and became a beloved Jewish pastry throughout Eastern Europe. The name means "little twists" in Yiddish. While enjoyed year-round, they\'re especially popular during Hanukkah. The cream cheese dough is an American innovation - traditional recipes use a yeast dough.'
  },
  {
    id: 6,
    image: '/images/d7.webp',
    title: 'PHILADELPHIA JEWISH APPLE CAKE',
    price: 5.59,
    tradition: 'American Jewish Classic',
    prepTime: '20 mins',
    cookTime: '90 mins',
    servings: '12-16 slices',
    ingredients: [
      '4 large apples, peeled and sliced',
      '5 tablespoons sugar',
      '2 teaspoons cinnamon',
      '3 cups all-purpose flour',
      '2½ cups granulated sugar',
      '1 cup vegetable oil',
      '4 eggs',
      '⅓ cup orange juice',
      '1 tablespoon vanilla extract',
      '3 teaspoons baking powder',
      '½ teaspoon salt',
      'Powdered sugar for dusting'
    ],
    instructions: [
      'Preheat oven to 350°F. Grease and flour a 10-inch tube pan.',
      'Toss apple slices with 5 tablespoons sugar and cinnamon. Set aside.',
      'In large bowl, beat together oil, 2½ cups sugar, eggs, orange juice, and vanilla.',
      'In separate bowl, whisk flour, baking powder, and salt.',
      'Gradually add dry ingredients to wet ingredients, mixing until smooth.',
      'Pour ⅓ of batter into prepared pan.',
      'Layer with ½ of the apple mixture.',
      'Repeat: ⅓ batter, remaining apples, then final ⅓ of batter.',
      'Bake 90 minutes until toothpick comes out clean.',
      'Cool in pan 10 minutes, then invert onto wire rack.',
      'Cool completely before dusting with powdered sugar.'
    ],
    tips: 'Use a mix of apple varieties for best flavor - Granny Smith and Honeycrisp work great together! This cake actually improves with age - it\'s even better on day 2 or 3. Wrap tightly and store at room temperature. The orange juice adds a subtle brightness. Some families add raisins or chopped walnuts to the apple layers.',
    history: 'This cake became popular in Jewish-American communities, particularly in Philadelphia, in the mid-20th century. It\'s a pareve (dairy-free) cake, making it versatile for Jewish dietary laws. While not originally a Hanukkah-specific recipe, it has become a holiday staple in many families, often served alongside latkes and brisket.'
  },
  {
    id: 7,
    image: '/images/d8.webp',
    title: 'HANUKKAH GELT CHOCOLATE LAYER CAKE',
    price: 16.87,
    tradition: 'Modern Celebration',
    prepTime: '45 mins',
    cookTime: '30 mins',
    servings: '12-14 slices',
    ingredients: [
      '2 cups all-purpose flour',
      '2 cups granulated sugar',
      '¾ cup cocoa powder',
      '2 teaspoons baking soda',
      '1 teaspoon baking powder',
      '1 teaspoon salt',
      '2 eggs',
      '1 cup strong coffee, cooled',
      '1 cup buttermilk',
      '½ cup vegetable oil',
      '1 teaspoon vanilla extract',
      '1½ cups butter, softened (for frosting)',
      '4 cups powdered sugar',
      '½ cup cocoa powder',
      '⅓ cup heavy cream',
      'Chocolate gelt coins for decoration',
      'Gold luster dust (optional)'
    ],
    instructions: [
      'Preheat oven to 350°F. Grease and flour two 9-inch round pans.',
      'Whisk flour, sugar, cocoa, baking soda, baking powder, and salt.',
      'Add eggs, coffee, buttermilk, oil, and vanilla. Beat 2 minutes.',
      'Divide batter between pans.',
      'Bake 30-35 minutes until toothpick comes out clean.',
      'Cool in pans 10 minutes, then turn out onto wire racks.',
      'For frosting: beat butter until fluffy.',
      'Add powdered sugar and cocoa alternately with cream.',
      'Beat until light and fluffy.',
      'Once cakes are cool, place one layer on plate.',
      'Spread with frosting.',
      'Top with second layer and frost top and sides.',
      'Decorate with chocolate gelt coins.',
      'Optional: brush coins with gold luster dust for extra shine.'
    ],
    tips: 'The coffee enhances the chocolate flavor but doesn\'t make it taste like coffee. For extra richness, add chocolate chips to the batter. Make the cake layers a day ahead for easier assembly. Arrange gelt in a menorah pattern or scatter randomly. Kids love unwrapping the gelt! This is perfect for a Hanukkah party.',
    history: 'Chocolate gelt (Yiddish for "money") is a Hanukkah tradition symbolizing the coins given as gifts during the holiday. Originally real coins were given, but chocolate versions became popular in the 20th century. This cake celebrates that tradition, combining rich chocolate cake with the festive gelt decoration that children eagerly anticipate.'
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
            <i class="fa-solid fa-menorah"></i> Recipe
          </button>
        </div>
      </div>
    </div>`;
}).join('');

// Add to cart function
function addtocart(i) {
  const p = product[i];
  addToCart({
    id: "hanukkah-" + p.id,
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
  document.getElementById('tradition').textContent = recipe.tradition;
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
  
  // Populate history
  document.getElementById('history').textContent = recipe.history;
  
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