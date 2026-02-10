const product = [
  {
    id: 0,
    image: '/images/j1.webp',
    title: 'PAN-FRIED TOFU WITH SPICY PEANUT SAUCE',
    price: 32.4,
  },
  {
    id: 1,
    image: '/images/j2.webp',
    title: 'SWEET CHILI-GLAZED TOFU WITH BOK CHOY',
    price: 39,
  },
  {
    id: 2,
    image: '/images/j3.webp',
    title: 'TOFU AND BROCCOLI WITH PEANUT SAUCE',
    price: 33.49,
  },
  {
    id: 3,
    image: '/images/j4.webp',
    title: 'THE BEST TOFU SCRAMBLE',
    price: 35.00,
  },
  {
    id: 4,
    image: '/images/j5.webp',
    title: 'GREEN BEANS & TOFU WITH CRUNCHY THAI PEANUT SAUCE',
    price: 15.00,
  },
  {
    id: 5,
    image: '/images/j6.webp',
    title: 'SOBA SOUP WITH SPINACH AND TOFU',
    price: 10.00,
  },
  {
    id: 6,
    image: '/images/j7.webp',
    title: 'LIGHT SPINACH PASTA WITH TOFU',
    price: 7.79,
  },
  {
    id: 7,
    image: '/images/j8.webp',
    title: 'ACADIAS TOFU STIR FRY',
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