const product = [
  {
    id: 0,
    image: '/images/m1.webp',
    title: 'SO ITS BEKAHS PULLED PORK NOW',
    price: 12.4,
  },
  {
    id: 1,
    image: '/images/m2.webp',
    title: 'CHICAGO-STYLE HOT DOGS',
    price: 54.95,
  },
  {
    id: 2,
    image: '/images/m3.webp',
    title: 'HOMEMADE LEMONADE',
    price: 5.49,
  },
  {
    id: 3,
    image: '/images/m4.webp',
    title: 'COWBOY BURGERS',
    price: 22.97,
  },
  {
    id: 4,
    image: '/images/m5.webp',
    title: 'GERMAN POTATO SALAD',
    price: 19.45,
  },
  {
    id: 5,
    image: '/images/m6.webp',
    title: 'MEMPHIS STYLE BABY BACK RIBS',
    price: 40.00,
  },
  {
    id: 6,
    image: '/images/m7.webp',
    title: 'SOUTHWESTERN GRILLED CHICKEN WITH LIME BUTTER',
    price: 13.00,
  },
  {
    id: 7,
    image: '/images/m8.webp',
    title: 'GREEK VILLAGE SALAD',
    price: 11.00,
  },
];

const categories = product.map(item => item.title);

let cart = [];

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

function addtocart(a) {
  cart.push({...product[a]});
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart(); 
}

function displaycart() {
  let total = 0;
  let j = 0;
  
  document.getElementById("count").innerHTML = cart.length;
  
  if (cart.length === 0) {
    document.querySelector(".cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ 0.00";
  } else {
    document.querySelector(".cartItem").innerHTML = cart.map((item, index) => {
      const { image, title, price } = item;
      total += price;
      document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
      return `
        <div class="cart-item">
          <div class="row-img">
            <img class="rowimg" src=${image}>
          </div>
          <p style="font-size:12px;">${title}</p>
          <h2 style="font-size:15px;">$ ${price.toFixed(2)}</h2>
          <i class="fa-solid fa-trash" onclick='delElement(${index})'></i>
        </div>`;
    }).join('');
  }
}
