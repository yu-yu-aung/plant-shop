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
export function filterProducts(searchInput, checkboxes, plantElements, plants) {
  //get search input value
  const searchInputValue = searchInput.value.trim().toLowerCase();

  //get selected categories
  const selectedCategories = Array.from(checkboxes)
    .filter((check) => check.checked)
    .map((check) => check.id.toLowerCase());

  //Loop through all plant elements
  Array.from(plantElements).forEach((plantElement, index) => {
    const plant = plants[index];

    //Check if plant matches search input
    const matchesSearch =
      plant.name.toLowerCase().includes(searchInputValue) ||
      plant.category.toLowerCase().includes(searchInputValue);

    //Check if plant matches selected categories
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(plant.category);

    //Show or hide plants based on search
    if (matchesSearch && matchesCategory) {
      plantElement.classList.remove("hidden");
    } else {
      plantElement.classList.add("hidden");
    }
  });
}
