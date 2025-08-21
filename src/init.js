import { filterProducts } from "./handlers";
import plants from "./plants";
import createPlantElement from "./createPlantElement";

const init = () => {
  const productsWrapper = document.getElementById("products-wrapper");
  const filterContainer = document.getElementById("filters-container");
  const searchInput = document.getElementById("search");
  const checkboxes = document.querySelectorAll(".check");

  plants.forEach((plant) => {
    const plantElement = createPlantElement(plant);
    productsWrapper.appendChild(plantElement);
  });

  filterContainer.addEventListener("change", () =>
    filterProducts(searchInput, checkboxes, productsWrapper)
  );
  searchInput.addEventListener("input", () =>
    filterProducts(searchInput, checkboxes, productsWrapper)
  );
};

export default init;
