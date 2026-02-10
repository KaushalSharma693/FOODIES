const product = [
  {
    id: 0,
    image: '/images/p1.webp',
    title: 'MOJITO SHRIMP TACO CUPS',
    price: 23.95,
  },
  {
    id: 1,
    image: '/images/p2.webp',
    title: 'MOZZARELLA STICKS',
    price: 6,
  },
  {
    id: 2,
    image: '/images/p3.webp',
    title: 'BACON BITES FLAMBE',
    price: 7.49,
  },
  {
    id: 3,
    image: '/images/p4.webp',
    title: 'CHEESY SHELL TACO BITES',
    price: 9.00,
  },
  {
    id: 4,
    image: '/images/p5.webp',
    title: 'CARAMELIZED ONION-CRANBERRY CREAM CHEESE BITES',
    price: 5.49,
  },
  {
    id: 5,
    image: '/images/p6.webp',
    title: 'EASY APRICOT BITES',
    price: 15.60,
  },
  {
    id: 6,
    image: '/images/p8.webp',
    title: 'SAUSAGE BALLS',
    price: 17.79,
  },
  {
    id: 7,
    image: '/images/p7.webp',
    title: 'BUFFALO CHICKEN CHEESE BALLS WITH BLUE CHEESE DIP',
    price: 10.87,
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