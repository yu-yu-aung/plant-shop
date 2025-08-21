import updateCart from "./handlers";
import plants from "./plants";
import createPlantElements from "./createPlantElement";

const init = () => {
  //Select DOM elements
  const productsWrapper = document.getElementById("products-wrapper");

  //Loop over plants and create an element
  plants.forEach((plant) => {
    const plantElement = createPlantElements(plant);
    productsWrapper.appendChild(plantElement);
  });

};

export default init;
