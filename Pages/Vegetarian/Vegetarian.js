const product = [
  {
    id: 0,
    image: '/images/r1.webp',
    title: 'THAI SATAY NOODLES',
    price: 11.49,
  },
  {
    id: 1,
    image: '/images/r2.webp',
    title: 'FALAFEL',
    price: 2,
  },
  {
    id: 2,
    image: '/images/r3.webp',
    title: 'MEXICAN NOODLE BAKE (MEATLESS)',
    price: 5.49,
  },
  {
    id: 3,
    image: '/images/r4.webp',
    title: 'SWEETIE PIES MAC AND CHEESE',
    price: 4.38,
  },
  {
    id: 4,
    image: '/images/r5.webp',
    title: 'BROCCOLI STUFFED VIDALIA ONIONS',
    price: 31.39,
  },
  {
    id: 5,
    image: '/images/r6.webp',
    title: 'NIFS BACONLESS PASTA CARBONARA WITH BREADCRUMBS',
    price: 23.29,
  },
  {
    id: 6,
    image: '/images/r7.webp',
    title: 'LENTIL SLOPPY JOES',
    price: 17.79,
  },
  {
    id: 7,
    image: '/images/r8.webp',
    title: '7-LAYER PARTY DIP TORTA',
    price: 12.87,
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