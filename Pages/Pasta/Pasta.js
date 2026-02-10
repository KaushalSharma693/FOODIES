const product = [
  {
    id: 0,
    image: '/images/p1.jpeg',
    title: 'RANCH AND AVOCADO PASTA SALAD',
    price: 9.60,
  },
  {
    id: 1,
    image: '/images/P2.jpeg',
    title: 'MACARONI WITH FONTINA AND GORGONZOLA CHEESES',
    price: 8.99,
  },
  {
    id: 2,
    image: '/images/P3.jpeg',
    title: 'CARAMELIZED ONION-CRANBERRY CREAM CHEESE BITES',
    price: 8.69,
  },
  {
    id: 3,
    image: '/images/P4.jpeg',
    title: 'SWEET ITALIAN SAUSAGE WITH PENNE PASTA',
    price: 7.25,
  },
  {
    id: 4,
    image: '/images/P5.webp',
    title: 'BALSAMIC CHICKEN PASTA',
    price: 5.00,
  },
  {
    id: 5,
    image: '/images/P6.jpeg',
    title: 'LEMON CHICKEN PASTA',
    price: 30.00,
  },
  {
    id: 6,
    image: '/images/P7.jpeg',
    title: 'STUFFED PASTA SHELLS FOR MEAT-LOVERS',
    price: 16.99,
  },
  {
    id: 7,
    image: '/images/P8.jpeg',
    title: 'GINGER PEANUT CHICKEN PASTA',
    price: 26.87,
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