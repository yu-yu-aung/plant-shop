import { updateCart, filterProducts } from "./handlers";
import plants from "./plants";
import createPlantElements from "./createPlantElement";

const init = () => {
  //Select DOM elements
  const productsWrapper = document.getElementById("products-wrapper");

  //filter plants by category and search input
  const filterContainer = document.getElementById("filters-container");
  const searchInput = document.getElementById("search");
  const checkboxes = document.querySelectorAll(".check");

  //Loop over plants and create an element
  plants.forEach((plant) => {
    const plantElement = createPlantElements(plant);
    productsWrapper.appendChild(plantElement);
  });

  //Event listeners for filtering
  filterContainer.addEventListener("change", () => {
    filterProducts(searchInput, checkboxes, productsWrapper.children, plants);
  });
  searchInput.addEventListener("input", () => {
    filterProducts(searchInput, checkboxes, productsWrapper.children, plants);
  });
};

export default init;
