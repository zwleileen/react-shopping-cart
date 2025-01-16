// src/components/Shop/Shop.jsx

import { useState } from "react";
import { inventoryData } from "../../data/data";
import InventoryList from "../InventoryList";

const Shop = () => {

    const [shopInventory, setShopInventory] = useState(inventoryData);
    const [userInventory, setUserInventory] = useState([])

    // const handleAddItem = () => {
    //     setUserInventory([{
    //         _id: "",
    //         name: "",
    //         price: "",
    //     }])
    // }

    return (
      <main>
        <h1>Shop</h1>
        <section>
            <InventoryList title="Shop Inventory" inventory={shopInventory}/>
            <InventoryList title="User Inventory" inventory={userInventory}/>
        </section>
      </main>
    );
  };
  
  export default Shop;
  