import plants from "./plants";

const init = () => {
  //Select DOM elements
  const productsWrapper = document.getElementById("products-wrapper");
  const checkboxes = document.querySelectorAll(".check");
  const filterContainer = document.getElementById("filter-container");
  const searchInput = document.getElementById("search");
  const cartCount = document.getElementById("cart-count");

  //Initialize cart item count
  let cartItemCount = 0;

  //init plant element array
  const plantElements = [];

  //Loop over plants and create an element
  plants.forEach((plant) => {
    const plantElement = createPlantElement(plant);

    plantElements.push(plantElement);
    productsWrapper.appendChild(plantElement);
  });
};

//create product element
const createPlantElement = (plant) => {
  const plantElement = document.createElement("div");

  plantElement.className = "item space-y-2";

  plantElement.innerHTML = `
      <div
        class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl h-48 md:h-56 sm:h-64"
        >
        <img
          src="${plant.image}"
          alt="${plant.name}"
          class="w-full h-full object-cover"
        />
        <button
          class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0"
        >
          Add to Cart
        </button>
      </div>
      <p class="text-xl">${plant.name}</p>
      <strong>$${plant.price.toLocaleString()}</strong>
    `;

  return plantElement;
};

export default init;
