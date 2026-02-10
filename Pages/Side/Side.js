const product = [
  {
    id: 0,
    image: '/images/d1.jpeg',
    title: 'BACON CHEDDAR MASHED POTATOES',
    price: 13.99,
  },
  {
    id: 1,
    image: '/images/d2.jpeg',
    title: 'CHEESY MINI CORN MUFFINS',
    price: 7.99,
  },
  {
    id: 2,
    image: '/images/d3.jpeg',
    title: 'BROCCOLI DAL CURRY',
    price: 3,
  },
  {
    id: 3,
    image: '/images/d4.jpeg',
    title: 'ROASTED CARROTS WITH LEMON DRESSING',
    price: 4,
  },
  {
    id: 4,
    image: '/images/q5.jpeg',
    title: '"ALMOST" BOSTON MARKET CREAMED SPINACH',
    price: 3.99,
  },
  {
    id: 5,
    image: '/images/d6.jpg',
    title: 'SIMPLE GARLIC MASHED POTATOES',
    price: 4.14,
  },
  {
    id: 6,
    image: '/images/q7.jpeg',
    title: 'ZESTY HERBED CARROTS',
    price: 7,
  },
  {
    id: 7,
    image: '/images/d8.jpeg',
    title: 'BLACK ANGUS CHEESY GARLIC BREAD',
    price: 9.99,
  },
];

const categories = product.map(item => ({ ...item })); // Create a new array of product objects

let i = 0;
document.querySelector("#root").innerHTML = categories.map(item => {
  const { image, title, price } = item;
  return `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src=${image}></img>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price.toFixed(2)}</h2>
        <button onClick='addtocart(${i++})'>Add to cart</button>
      </div>
    </div>`;
}).join('');
function addtocart(i) {
  const p = product[i];

  addToCart({
    id: "air-" + p.id,
    title: p.title,
    price: p.price,
    image: p.image
  });
}