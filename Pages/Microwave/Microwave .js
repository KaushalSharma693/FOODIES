const product = [
  {
    id: 0,
    image: '/images/m1.jpeg',
    title: 'SIMPLE CHICKEN AND SAUSAGE PAELLA',
    price: 21,
  },
  {
    id: 1,
    image: '/images/m2.jpeg',
    title: 'BROCCOLI HAM STROGANOFF',
    price: 11.47,
  },
  {
    id: 2,
    image: '/images/m3.jpg',
    title: 'MICROWAVE SALMON FILLETS',
    price: 16.49,
  },
  {
    id: 3,
    image: '/images/m4.jpg',
    title: 'MICROWAVE FRIED RICE',
    price: 1.49,
  },
  {
    id: 4,
    image: '/images/m5.jpeg',
    title: 'ONE STEP CHILI',
    price: 17.99,
  },
  {
    id: 5,
    image: '/images/m6.jpeg',
    title: 'LEMONY WALDORF FISH FILLETS FOR MICROWAVE',
    price: 10.95,
  },
  {
    id: 6,
    image: '/images/m7.jpg',
    title: 'SOUTHWESTERN RICE BOWL',
    price: 9,
  },
  {
    id: 7,
    image: '/images/m8.jpeg',
    title: 'CHICKEN RANCH TACOS',
    price: 2,
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