const product = [
  {
    id: 0,
    image: '/images/S1.jpeg',
    title: 'SPINACH & ROQUEFORT SALAD',
    price: 4.29,
  },
  {
    id: 1,
    image: '/images/S2.webp',
    title: 'CHUNKY BLUE CHEESE SALAD DRESSING',
    price: 2.08,
  },
  {
    id: 2,
    image: '/images/S3.jpeg',
    title: 'KITTENCALS FAMOUS GREEK SALAD',
    price: 3.49,
  },
  {
    id: 3,
    image: '/images/S4.jpg',
    title: 'MOROCCAN CARROT SALAD',
    price: 4.79,
  },
  {
    id: 4,
    image: '/images/S5.webp',
    title: 'CHICKPEA AND FRESH TOMATO TOSS',
    price: 10.50,
  },
  {
    id: 5,
    image: '/images/S6.jpeg',
    title: 'CUCUMBER CILANTRO PASTA SALAD',
    price: 5.06,
  },
  {
    id: 6,
    image: '/images/S7.jpeg',
    title: 'ITALIAN CHOPPED SALAD IN SHELLS',
    price: 9.99,
  },
  {
    id: 7,
    image: '/images/S8.webp',
    title: 'TOSSED SALAD WITH MANDARIN ORANGES',
    price: 3.50,
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