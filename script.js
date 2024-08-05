
const addToCartButtons = document.querySelectorAll("#btn");//allows one to select all buttons with the common id
const orderBtn = document.getElementById("orderBtn");
const message = document.getElementById("preOrderMessage");
let currentOrder = document.getElementById('order');
let previousOrder = document.getElementById('preOrder');
let cart = [];

// Function to add an item to the cart
function addToCart(item) {
  const existingItem = cart.find(cartItem => cartItem.name === item.name);
    cart.push({...item, quantity: 1});
  updateCartDisplay();
}

// Function to display the items that are ordered
function updateCartDisplay() {
  if (cart.length === 0) {
    message.style.display = "block";
    currentOrder.innerHTML = "";
  } else {
    message.style.display = "none";
    currentOrder.innerHTML = cart.map(item => `
      <div class="cart-item">
        ${item.name} - ${item.quantity} x $${item.price}
      </div>
    `).join("");
  }
}

// Function to make changes when add cart is clicked
addToCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const itemElement = event.target.closest('.item');
    const itemName = itemElement.querySelector("#dessertName").innerText;
    const itemPrice = parseFloat(itemElement.querySelector("#price").innerText.replace('$', ''));
    addToCart({name: itemName, price: itemPrice});
  });
});
