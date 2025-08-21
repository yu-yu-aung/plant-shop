import init from "./init";
import plants from "./plants";
import "./style.css";

import { createIcons, Search, ShoppingCart } from "lucide";

createIcons({
  icons: {
    Search,
    ShoppingCart,
  },
});

//console.log(plants);
init();
