// ================= CART STORAGE =================
function getCart() {
  return JSON.parse(localStorage.getItem("foodies_cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("foodies_cart", JSON.stringify(cart));
}

// ================= ADD =================
function addToCart(product) {
  const cart = getCart();
  const item = cart.find(p => p.id === product.id);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  updateCartBadge();
}

// ================= REMOVE =================
function removeFromCart(id) {
  const cart = getCart().filter(p => p.id !== id);
  saveCart(cart);
  renderCartUI();
  updateCartBadge();
}

// ================= BADGE =================
function updateCartBadge() {
  const cart = getCart();
  const count = cart.reduce((s, i) => s + i.quantity, 0);

  const badge =
    document.getElementById("cartBadge") ||
    document.getElementById("count");

  if (badge) badge.innerText = count;
}

// ================= CART PAGE UI =================
function renderCartUI() {
  const cart = getCart();

  const itemsDiv = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("subtotal");
  const taxEl = document.getElementById("tax");
  const shippingEl = document.getElementById("shipping");
  const totalEl = document.getElementById("total");

  if (!itemsDiv) return;

  if (cart.length === 0) {
    itemsDiv.innerHTML = `
      <div class="empty-cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Your cart is empty</p>
      </div>`;
    subtotalEl.innerText = "$0.00";
    taxEl.innerText = "$0.00";
    shippingEl.innerText = "$0.00";
    totalEl.innerText = "$0.00";
    return;
  }

  let subtotal = 0;

  itemsDiv.innerHTML = cart.map(item => {
    subtotal += item.price * item.quantity;
    return `
      <div class="cart-item">
        <img src="${item.image}" class="cart-item-image">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.title}</div>
          <div>$${item.price.toFixed(2)} × ${item.quantity}</div>
        </div>
        <button class="remove-item" onclick="removeFromCart('${item.id}')">×</button>
      </div>
    `;
  }).join("");

  const tax = subtotal * 0.1;
  const shipping = 5;

  subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  taxEl.innerText = `$${tax.toFixed(2)}`;
  shippingEl.innerText = `$${shipping.toFixed(2)}`;
  totalEl.innerText = `$${(subtotal + tax + shipping).toFixed(2)}`;
}

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  renderCartUI();
});
