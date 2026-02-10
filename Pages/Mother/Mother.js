const product = [
  {
    id: 0,
    image: '/images/A1.webp',
    title: 'GINGER ALE BAKED HAM',
    price: 34.00,
  },
  {
    id: 1,
    image: '/images/A2.webp',
    title: 'CITRUS BEET SALAD',
    price: 10.12,
  },
  {
    id: 2,
    image: '/images/A3.webp',
    title: 'FAVA BEAN AND GRILLED SHRIMP SALAD IN RADICCHIO CUPS',
    price: 15.00,
  },
  {
    id: 3,
    image: '/images/A4.webp',
    title: 'SPINACH & ARTICHOKE MASHED POTATOES',
    price: 22.89,
  },
  {
    id: 4,
    image: '/images/A5.webp',
    title: 'RHUBARB CRISP',
    price: 17.00,
  },
  {
    id: 5,
    image: '/images/A6.webp',
    title: 'SPINACH, STRAWBERRY, MANDARIN SALAD WITH POPPY SEED DRESSING',
    price: 10.29,
  },
  {
    id: 6,
    image: '/images/A7.webp',
    title: 'ASIAN PASTA SALAD',
    price: 7.79,
  },
  {
    id: 7,
    image: '/images/A8.webp',
    title: 'ASPARAGUS GRUYERE TART',
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