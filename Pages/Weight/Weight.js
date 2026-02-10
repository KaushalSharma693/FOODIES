const product = [
  {
    id: 0,
    image: '/images/w1.webp',
    title: 'CHICKEN YAKITORI',
    price: 3.4,
  },
  {
    id: 1,
    image: '/images/w2.webp',
    title: 'WW TRUFFLES',
    price: 22.00,
  },
  {
    id: 2,
    image: '/images/w3.webp',
    title: 'WW HAM AND CHEESE STUFFED POTATOES',
    price: 7.49,
  },
  {
    id: 3,
    image: '/images/w4.webp',
    title: 'HONEY-GLAZED SALMON WITH WASABI',
    price: 15,
  },
  {
    id: 4,
    image: '/images/w5.webp',
    title: ' BROCCOLI CHEESE SOUP',
    price: 10.00,
  },
  {
    id: 5,
    image: '/images/w6.webp',
    title: 'GRILLED CHICKEN AND KEY LIME SALSA',
    price: 12.99,
  },
  {
    id: 6,
    image: '/images/w7.webp',
    title: 'BAKED SPICY FRENCH FRIES',
    price: 7.79,
  },
  {
    id: 7,
    image: '/images/w8.webp',
    title: 'HOPPIN JOHN WITH SHRIMP',
    price: 16.87,
  },
];

const categories = product.map(item => item.title);



document.querySelector("#root").innerHTML = product.map((item, i) => {
  const { image, title, price } = item;
  return `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src=${image}></img>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price.toFixed(2)}</h2>
        <button onClick='addtocart(${i})'>Add to cart</button>
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