import {updateCart} from "./handlers.js";

function createPlantElement(plant) {
  const plantElement = document.createElement("div");
  plantElement.className = "item space-y-2";

  plantElement.innerHTML = `
    <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl h-48 md:h-56 sm:h-64">
      <img src="${plant.image}" alt="${
    plant.name
  }" class="w-full h-full object-cover"/>
      <button class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">
        Add to Cart
      </button>
    </div>
    <p class="text-xl">${plant.name}</p>
    <strong>$${plant.price.toLocaleString()}</strong>
  `;

  plantElement.querySelector(".status").addEventListener("click", updateCart);
  return plantElement;
}

export default createPlantElement;
