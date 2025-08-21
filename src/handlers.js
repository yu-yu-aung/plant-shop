import plants from "./plants.js";

//Initialize cart item count
let cartItemCount = 0;

//Add or Remove Plant from Cart
export function updateCart(e) {
  const statusEl = e.target;
  const cartCount = document.getElementById("cart-count");

  if (statusEl.classList.contains("added")) {
    // Remove from cart
    statusEl.classList.remove("added");
    statusEl.innerText = "Add to Cart";
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

//function for filtering products
export function filterProducts(searchInput, checkboxes, productsWrapper) {
  const searchValue = searchInput.value.trim().toLowerCase();

  const selectedCategories = Array.from(checkboxes)
    .filter((check) => check.checked)
    .map((check) => check.id.toLowerCase());

  const plantElements = productsWrapper.querySelectorAll(".item");

  Array.from(plantElements).forEach((plantElement, index) => {
    const plant = plants[index];

    // normalize categories for comparison
    const plantCategory = plant.category.toLowerCase();

    const matchesSearch = plant.name.toLowerCase().includes(searchValue);
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(plantCategory);

    if (matchesSearch && matchesCategory) {
      plantElement.classList.remove("hidden");
    } else {
      plantElement.classList.add("hidden");
    }
  });
}
