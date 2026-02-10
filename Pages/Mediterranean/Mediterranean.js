const product = [
  {
    id: 0,
    image: '/images/m1.webp',
    title: 'MEDITERRANEAN CHICKEN BREASTS WITH AVOCADO TAPENADE',
    price: 10.49,
  },
  {
    id: 1,
    image: '/images/m2.webp',
    title: 'CRISPY FRIED FALAFEL',
    price: 2.86,
  },
  {
    id: 2,
    image: '/images/m3.webp',
    title: 'MEDITERRANEAN TILAPIA POCKETS #RSC',
    price: 15.49,
  },
  {
    id: 3,
    image: '/images/m4.webp',
    title: 'LEBANESE LENTIL SALAD',
    price: 24.99,
  },
  {
    id: 4,
    image: '/images/m5.webp',
    title: 'LEBANESE LENTIL SALAD',
    price: 6.30,
  },
  {
    id: 5,
    image: '/images/m6.webp',
    title: 'SHAKSHUKA BURRITO WITH ROASTED PEPPER SALSA AND TZATZIKI',
    price: 14.45,
  },
  {
    id: 6,
    image: '/images/m7.webp',
    title: 'PAN SEARED MOROCCAN SALMON',
    price: 55.00,
  },
  {
    id: 7,
    image: '/images/m8.webp',
    title: 'MEDITERRANEAN LASAGNA',
    price: 30.00,
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