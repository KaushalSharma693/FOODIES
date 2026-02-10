const product = [
  {
    id: 0,
    image: '/images/sp1.webp',
    title: 'FAMOUS BARRS FRENCH ONION SOUP',
    price: 24.00,
  },
  {
    id: 1,
    image: '/images/sp2.jpg',
    title: 'CHICKEN TORTELLINI SOUP WITH MUSHROOMS AND SPINACH',
    price: 10,
  },
  {
    id: 2,
    image: '/images/sp4.webp',
    title: 'BEST CREAM OF BROCCOLI SOUP',
    price: 12.00,
  },
  {
    id: 3,
    image: '/images/sp3.webp',
    title: 'BROTHY BEEF NOODLE SOUP',
    price: 37.99,
  },
  {
    id: 4,
    image: '/images/sp6.webp',
    title: 'HEARTY PORTUGUESE KALE SOUP',
    price: 5,
  },
  {
    id: 5,
    image: '/images/sp7.webp',
    title: 'SPICY HEALTHY TACO BEAN SOUP',
    price: 12,
  },
  {
    id: 6,
    image: '/images/sp5.webp',
    title: 'BEENZEN BUZZARD STEW',
    price: 17.79,
  },
  {
    id: 7,
    image: '/images/sp8.webp',
    title: 'WALTERS POTATO, BACON, CORN CHOWDER',
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