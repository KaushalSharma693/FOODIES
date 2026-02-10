const product = [
  {
    id: 0,
    image: '/images/s1.jpeg',
    title: 'PINTO BEANS AND RICE IN A CROCK POT (OR ON STOVE TOP)',
    price: 1.50,
  },
  {
    id: 1,
    image: '/images/s2.webp',
    title: 'CHEESY MINI CORN MUFFINS',
    price: 5.99,
  },
  {
    id: 2,
    image: '/images/s3.webp',
    title: 'PEPSI PORK ROAST',
    price: 3.99,
  },
  {
    id: 3,
    image: '/images/s4.jpeg',
    title: 'DEBBIE CROCK POT CHILI',
    price: 8.56,
  },
  {
    id: 4,
    image: '/images/s5.webp',
    title: 'PERFECT POT ROAST (SLOW-COOKER)',
    price: 3.99,
  },
  {
    id: 5,
    image: '/images/s6.jpeg',
    title: 'PULLED PORK (CROCK POT)',
    price: 14.14,
  },
  {
    id: 6,
    image: '/images/s7.jpeg',
    title: 'EASY AND TASTY BARBECUE CHICKEN SANDWICHES IN THE CROCK POT',
    price: 9.49,
  },
  {
    id: 7,
    image: '/images/s8.jpeg',
    title: 'CROCK POT THYME ROASTED BEETS',
    price: 10.99,
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