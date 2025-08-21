//Initialize cart item count
let cartItemCount = 0;

//Add or Remove Plant from Cart
function updateCart(e) {
  const statusEl = e.target;
  const cartCount = document.getElementById("cart-count");

  if (statusEl.classList.contains("added")) {
    // Remove from cart
    statusEl.classList.remove("added");
    statusEl.textContent = "Add to Cart";
    statusEl.classList.remove("bg-red-600");
    statusEl.classList.add("bg-black");
    cartItemCount--;
  } else {
    // Add to cart
    statusEl.classList.add("added");
    statusEl.innerText = "Remove from Cart";
    statusEl.classList.add("bg-red-600");
    statusEl.classList.remove("bg-black");
    cartItemCount++;
  }

  //update cart count display
  cartCount.innerText = cartItemCount.toString();
}

//filter plants by category and search input
const filterContainer = document.getElementById("filters-container");
const searchInput = document.getElementById("search");
const checkboxes = document.querySelectorAll(".check");



export default updateCart;
