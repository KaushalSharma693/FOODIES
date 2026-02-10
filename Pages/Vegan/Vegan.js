const product = [
  {
    id: 0,
    image: '/images/v1.webp',
    title: 'CREAMY VEGAN PESTO PASTA WITH BROCCOLI',
    price: 13.99,
  },
  {
    id: 1,
    image: '/images/v2.webp',
    title: 'VEGAN BACON',
    price: 12.99,
  },
  {
    id: 2,
    image: '/images/v3.webp',
    title: 'EASY BLACK BEANS AND RICE',
    price: 13.54,
  },
  {
    id: 3,
    image: '/images/v4.webp',
    title: 'ALOO GOBI',
    price: 14.99,
  },
  {
    id: 4,
    image: '/images/v5.webp',
    title: 'VEGAN FRENCH TOAST',
    price: 12.76,
  },
  {
    id: 5,
    image: '/images/v6.webp',
    title: 'VEGAN PESTO SAUCE',
    price: 13.29,
  },
  {
    id: 6,
    image: '/images/v7.webp',
    title: 'VEGAN PANCAKES',
    price: 11.87,
  },
  {
    id: 7,
    image: '/images/v8.webp',
    title: 'VEGAN CORNBREAD',
    price: 12.59,
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