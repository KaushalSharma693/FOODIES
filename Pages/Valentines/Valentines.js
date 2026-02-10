const product = [
  {
    id: 0,
    image: '/images/s1.webp',
    title: 'LEMON AND GARLIC ROAST CHICKEN',
    price: 12.4,
  },
  {
    id: 1,
    image: '/images/s2.webp',
    title: 'COMPANY PORK ROAST',
    price: 4.98,
  },
  {
    id: 2,
    image: '/images/s3.webp',
    title: 'COD BAKED WITH CREAM AND BAY LEAVES',
    price: 8.30,
  },
  {
    id: 3,
    image: '/images/s4.webp',
    title: 'TENDER FLAT IRON STEAK',
    price: 9.99,
  },
  {
    id: 4,
    image: '/images/s5.webp',
    title: 'YUMMIEST EVER BAKED MAC AND CHEESE',
    price: 6.98,
  },
  {
    id: 5,
    image: '/images/s6.webp',
    title: 'PINK FLIRTINI',
    price: 10.00,
  },
  {
    id: 6,
    image: '/images/s7.webp',
    title: 'COPYCAT STARBUCKS MANGO DRAGONFRUIT REFRESHER',
    price: 17.79,
  },
  {
    id: 7,
    image: '/images/s8.webp',
    title: 'PINK MOJITO',
    price: 30.99,
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